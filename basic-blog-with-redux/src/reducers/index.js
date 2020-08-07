import { combineReducers } from 'redux';
import PostsReducer from './PostsReducer';
import UsersReducer from './UsersReducer';


export default combineReducers(
  {
    posts: PostsReducer,
    users: UsersReducer
  }
)