/* eslint-disable import /no-anonymous-default-export */
import { authorized, axiosPrivate } from './axios';

export default {
  login(form) {
    return axiosPrivate.post('/login', form);
  },

  profile() {
    return authorized.get('/profile');
  },

  refresh(token) {
    return axiosPrivate.post('/refresh-token', { refresh_token: token });
  },
};
