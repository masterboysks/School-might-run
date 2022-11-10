import { authorized } from '../../../../common/axios';

export default {
  get(page = 1) {
    return authorized.get(`/sub-faculties?page=${page}`);
  },
  delete(id) {
    return authorized.delete(`sub-faculties/${id}`);
  },
  edit(id, form) {
    return authorized.put(`sub-faculties/${id}`, form);
  },
  create(form) {
    return authorized.post(`/sub-faculties`, form);
  },
  getAll(id = '') {
    return authorized.get(`/get-subfaculties?faculty_id=${id}`);
  },
};
