import { authorized } from '../../../../common/axios';

export default {
  assignTeacher(form) {
    return authorized.post(`/staff/assign-subject`, form);
  },
  getAll(params = {}) {
    return authorized.get(`/get-teachers`, { params });
  },
};
