import { authorized } from '../../../common/axios';

export default {
  getLocalGurdain(mobile) {
    return authorized.get(`/get-parent?mobile_number=${mobile}`);
  },
  delete(id) {
    return authorized.delete(`classes/${id}`);
  },
  edit(id, form) {
    return authorized.put(`classes/${id}`, form);
  },
  create(form) {
    return authorized.post(`/classes`, form);
  },
  getAll(id = '') {
    return authorized.get(`/get-classes?level_id=${id}`);
  },
};
