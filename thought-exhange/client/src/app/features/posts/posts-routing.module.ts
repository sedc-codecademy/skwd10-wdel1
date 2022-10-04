import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostListComponent } from './components/post-list/post-list.component';

const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
  },
  {
    path: 'create',
    component: PostFormComponent,
  },
  {
    path: ':id',
    component: PostDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
