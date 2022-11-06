import { authorized } from '../../../../common/axios';

export default {
  get(page = 1) {
    return authorized.get(`/fiscal-years?page=${page}`);
  },
  delete(id) {
    return authorized.delete(`fiscal-years/${id}`);
  },
  edit(id, form) {
    return authorized.put(`fiscal-years/${id}`, form);
  },
  create(form) {
    return authorized.post(`/fiscal-years`, form);
  },
  getAll() {
    return authorized.get(`/get-fiscal-years`);
  },
};
