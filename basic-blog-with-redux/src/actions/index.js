import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';


export const fetchPosts = () => async dispatch => {
  const { data } = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: data });
};

export const fetchUser = (id) => async (dispatch, ) => {
  _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {

  const { data } = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: data });
})