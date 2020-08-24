import streams from '../apis/streams';
import history from '../history';

export const signIn = (userId) => {
  return {
    type: 'SIGN_IN',
    payload: { userId }
  };
}

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  };
}

export const fetchStreams = () => async dispatch => {
  const { data } = await streams.get('/streams');

  dispatch({ type: 'FETCH_STREAMS', payload: data });
}

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const { data } = await streams.post('/streams', { ...formValues, userId });

  dispatch({ type: 'CREATE_STREAM', payload: data });
  history.push('/');
}

export const fetchStream = id => async dispatch => {
  const { data } = await streams.get(`/streams/${id}`);

  dispatch({ type: 'FETCH_STREAM', payload: data });
}

export const editStream = (id, formValues) => async dispatch => {
  const { data } = await streams.patch(`/streams/${id}`, formValues); // put update ALL, but patch update SOME props!!

  dispatch({ type: 'EDIT_STREAM', payload: data });
  history.push('/');

}

export const deleteStream = (id) => async dispatch => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: 'DELETE_STREAM', payload: id });
}