import { authorized } from '../../../common/axios';

export default {
  get(params) {
    return authorized.get(`/schedules`, { params });
  },
  delete(id) {
    return authorized.delete(`schedules/${id}`);
  },
  edit(id, form) {
    return authorized.put(`schedules/${id}`, form);
  },
  create(form) {
    return authorized.post(`/schedules`, form);
  },
  getAll() {
    return authorized.get(`/get-schedules`);
  },
};
