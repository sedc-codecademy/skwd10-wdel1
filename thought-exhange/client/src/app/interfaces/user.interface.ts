export interface LoggedInUser {
  _id: string;
  username: string;
  email: string;
  posts: string[];
  comments: string[];
  token: string;
  refreshToken: string;
}
