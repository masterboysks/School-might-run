import { authorized } from '../../../common/axios';

export default {
  get(page = 1) {
    return authorized.get(`/notices?page=${page}`);
  },
  delete(id) {
    return authorized.delete(`notices/${id}`);
  },
  edit(id, form) {
    return authorized.put(`notices/${id}`, form);
  },
  create(form) {
    return authorized.post(`/notices`, form);
  },
  getAll() {
    return authorized.get(`/get-notices`);
  },
  sendTo() {
    return authorized.get(`/array-send-to`);
  },
};
