import { authorized } from '../../../../common/axios';

export default {
  get(page = 1) {
    return authorized.get(`/subjects?page=${page}`);
  },
  delete(id) {
    return authorized.delete(`subjects/${id}`);
  },
  edit(id, form) {
    return authorized.put(`subjects/${id}`, form);
  },
  create(form) {
    return authorized.post(`/subjects`, form);
  },
  getAll(id = '') {
    return authorized.get(`/get-subjects?level_id=${id}`);
  },
};
