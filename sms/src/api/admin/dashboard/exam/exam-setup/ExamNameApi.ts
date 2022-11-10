import { authorized } from '../../../../common/axios';

export default {
  get(page = 1) {
    return authorized.get(`/exam?page=${page}`);
  },
  delete(id) {
    return authorized.delete(`/exam/${id}`);
  },
  edit(id, form) {
    return authorized.put(`/exam/${id}`, form);
  },
  create(form) {
    return authorized.post(`/exam`, form);
  },
  getAll() {
    return authorized.get(`/get-exam`);
  },
};
