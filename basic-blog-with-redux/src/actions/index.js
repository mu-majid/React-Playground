import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

// over-fetching solution : action creator inside of action creator
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts()); // wait for posts to be fetched

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id))) // no need to wait for each user
    .value();
}

export const fetchPosts = () => async dispatch => {
  const { data } = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: data });
};


export const fetchUser = id => async dispatch => {
  const { data } = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: data });
}



// downside of memoization : a user is fetched only one time in our app,
// and if he's updated we need to write the same exact code but without memoize fn.

// export const fetchUser = (id) => async (dispatch, ) => {
//   _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {

//   const { data } = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: 'FETCH_USER', payload: data });
// });