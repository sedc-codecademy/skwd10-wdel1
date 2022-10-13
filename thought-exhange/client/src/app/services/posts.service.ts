import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Subject } from 'rxjs';
import { Post, SelectedPost } from '../interfaces/post.interface';
import { environment } from 'src/environments/environment';
import { NotificationService } from './notification.service';
import { Router } from '@angular/router';
import { PostComment } from '../interfaces/comment.interface';

const { API_URL } = environment;

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts$ = new BehaviorSubject<Post[]>([]);

  selectedPost$ = new BehaviorSubject<SelectedPost | null>(null);

  userComments$ = new BehaviorSubject<PostComment[]>([]);

  postToEdit$ = new BehaviorSubject<Post | null>(null);

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  setPostToEdit(post: Post) {
    this.postToEdit$.next(post);
    this.router.navigate(['posts', 'edit']);
  }

  // 1.Get all posts
  getAllPosts() {
    // Clearing selected subject for like/dislike business logic
    this.selectedPost$.next(null);
    this.http
      .get(`${API_URL}/posts`)
      .pipe(map((value) => value as Post[]))
      .subscribe({
        next: (posts) => {
          this.posts$.next(posts);
        },
        error: (err) => this.notificationService.showError(err.error.message),
      });
  }

  // 2. Get post by id
  getPostById(postId: string) {
    this.http
      .get(`${API_URL}/posts/${postId}`)
      .pipe(map((value) => value as SelectedPost))
      .subscribe({
        next: (post) => {
          this.selectedPost$.next(post);
        },
        error: (err) => {
          this.notificationService.showError(err.error.message);
          this.router.navigate(['not-found']);
        },
      });
  }

  // 3. Create new post
  createPost(title: string, body: string) {
    this.http
      .post(`${API_URL}/posts`, { title, body })
      .pipe(map((value) => value as { message: string; postId: string }))
      .subscribe({
        next: (value) => {
          this.router.navigate(['posts', value.postId]);
          this.notificationService.showSuccess(value.message);
        },
        error: (err) => this.notificationService.showError(err.error.message),
      });
  }

  //4. Create comment
  createComment(body: string) {
    const postId = this.selectedPost$.value?._id;

    this.http
      .post(`${API_URL}/comments`, { post: postId, body })
      .pipe(map((value) => value as { message: string; postId: string }))
      .subscribe({
        next: (value) => {
          this.getPostById(value.postId);
          this.notificationService.showSuccess(value.message);
        },
        error: (err) => this.notificationService.showError(err.error.message),
      });
  }

  // 5. Like Post
  likePost(postId: string) {
    this.http
      .patch(`${API_URL}/posts/${postId}/like`, null)
      .pipe(map((value) => value as { likes: number }))
      .subscribe({
        next: ({ likes }) => {
          if (this.selectedPost$.value) {
            // User is in post details
            const post = this.selectedPost$.value;

            post.likes = likes;

            this.selectedPost$.next(post);
          } else {
            // User is in post list
            const posts = this.posts$.value;

            posts.forEach((post) => {
              if (post._id === postId) {
                post.likes = likes;
                return;
              }
            });

            // const updatedPosts = posts.map((post) =>
            //   post._id === postId ? { ...post, likes: likes } : post
            // );

            this.posts$.next(posts);
          }
        },
        error: (err) => this.notificationService.showError(err.error.message),
      });
  }

  // 6. Dislike Post
  dislikePost(postId: string) {
    this.http
      .patch(`${API_URL}/posts/${postId}/dislike`, null)
      .pipe(map((value) => value as { dislikes: number }))
      .subscribe({
        next: ({ dislikes }) => {
          if (this.selectedPost$.value) {
            // User is in post details
            const post = this.selectedPost$.value;

            post.dislikes = dislikes;

            this.selectedPost$.next(post);
          } else {
            // User is in post list
            const posts = this.posts$.value;

            posts.forEach((post) => {
              if (post._id === postId) {
                post.dislikes = dislikes;
                return;
              }
            });

            // const updatedPosts = posts.map((post) =>
            //   post._id === postId ? { ...post, dislikes: dislikes } : post
            // );

            this.posts$.next(posts);
          }
        },
        error: (err) => this.notificationService.showError(err.error.message),
      });
  }

  // 7. Get posts by user
  getPostsByUser() {
    this.http
      .get(`${API_URL}/user/posts`)
      .pipe(map((value) => value as Post[]))
      .subscribe({
        next: (posts) => this.posts$.next(posts),
        error: (err) => this.notificationService.showError(err.error.message),
      });
  }

  // 8. Get comments by user
  getCommentsByUser() {
    this.http
      .get(`${API_URL}/user/comments`)
      .pipe(map((value) => value as PostComment[]))
      .subscribe({
        next: (comments) => this.userComments$.next(comments),
        error: (err) => this.notificationService.showError(err.error.message),
      });
  }

  // 9. Update Post
  updatePost(postId: string, title: string, body: string) {
    this.http.patch(`${API_URL}/posts/${postId}`, { title, body }).subscribe({
      next: () => {
        this.notificationService.showSuccess('Post Updated Succesffully!');
        this.router.navigate(['posts', postId]);
        this.postToEdit$.next(null);
      },
      error: (err) => this.notificationService.showError(err.error.message),
    });
  }

  // 10. Delete post
  deletePost(postId: string) {
    this.http.delete(`${API_URL}/posts/${postId}`).subscribe({
      next: () => {
        this.notificationService.showSuccess('Post Deleted Successfully!');

        const updatedPosts = this.posts$.value.filter(
          (post) => post._id !== postId
        );

        this.posts$.next(updatedPosts);

        // If you need to ping the api after a deletion
        // this.getPostsByUser()
      },
      error: (err) => this.notificationService.showError(err.error.message),
    });
  }
}
