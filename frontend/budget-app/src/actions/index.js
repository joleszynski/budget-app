export const AUTH_SUCCESS = 'AUTH_SUCCESS';

export const authSuccess = (data) => ({
  type: AUTH_SUCCESS,
  payload: data,
});
