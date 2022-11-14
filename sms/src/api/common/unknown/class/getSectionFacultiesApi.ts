import { authorized } from '../../../common/axios';

export default {
  get(page = 1) {
    return authorized.get(`/fee-assign?page=${page}`);
  },
  delete(id) {
    return authorized.delete(`/fee-assign/${id}`);
  },
  edit(id, form) {
    return authorized.put(`/fee-assign/${id}`, form);
  },
  create(form) {
    return authorized.post(`/fee-assign`, form);
  },
  getSectionFaculties(id) {
    return authorized.get(`/get-sec-faculties`, { params: { class_id: id } });
  },
};
