/* eslint-disable import /no-anonymous-default-export */
import { authorized } from './axios';
export default {
  get() {
    return authorized.get('/date-format');
  },
};
