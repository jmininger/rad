import axios from 'axios';

const AUTHENTICATED = 'AUTHENTICATED';

const reducer = (state = null, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return action.user;
    default:
      return state;
  }
};

export const authenticated = user => ({
  type: AUTHENTICATED, user
});

export const whoami = () =>
  dispatch =>
{
  return axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data;
        dispatch(authenticated(user));
      })
      .catch(() => dispatch(authenticated(null)));};

export const login = (username, password) =>
  dispatch =>
    {
      return axios.post('/api/auth/login/local',
      {username, password})
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()));
    };

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()));

export const createUser = (user) =>

    dispatch =>
    axios.post('/api/users', user)
    .then(() => dispatch(login(user.email, user.password)))
    .catch(err => console.error(err));


export default reducer;
