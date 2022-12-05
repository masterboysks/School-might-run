import { authorized } from '../../../../common/axios';

export default {
  get(page = 1) {
    return authorized.get(`/batches?page=${page}`);
  },
  getOne(id) {
    return authorized.get(`/batches/${id}`);
  },
  delete(id) {
    return authorized.delete(`batches/${id}`);
  },
  edit(id, form) {
    return authorized.put(`batches/${id}`, form);
  },
  create(form) {
    return authorized.post(`/batches`, form);
  },
  getAll() {
    return authorized.get(`/get-batches`);
  },
};
