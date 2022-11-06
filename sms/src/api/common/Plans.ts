/* eslint-disable import /no-anonymous-default-export */
import { authorized } from './axios';
export default {
  create(form) {
    return authorized.post('/plans', form);
  },
  get(page) {
    return authorized.get(`/plans?page=${page}`);
  },
  edit({ id, form }) {
    return authorized.put(`/plans/${id}`, form);
  },
  delete(id) {
    return authorized.delete(`/plans/${id}`);
  },
};
