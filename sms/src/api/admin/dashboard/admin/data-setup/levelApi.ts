import { authorized } from '../../../../common/axios';

export default {
  get(page = 1) {
    return authorized.get(`/levels?page=${page}`);
  },
  delete(id) {
    return authorized.delete(`levels/${id}`);
  },
  edit(id, form) {
    return authorized.put(`levels/${id}`, form);
  },
  create(form) {
    return authorized.post(`/levels`, form);
  },
  getAll() {
    return authorized.get(`/get-levels`);
  },
};
