import { authorized } from '../../../common/axios';

export default {
  get(page = 1) {
    return authorized.get(`/fee-type?page=${page}`);
  },
  delete(id) {
    return authorized.delete(`/fee-type/${id}`);
  },
  edit(id, form) {
    return authorized.put(`/fee-type/${id}`, form);
  },
  create(form) {
    return authorized.post(`/fee-type`, form);
  },
  // getByLevelId(id) {
  //   return authorized.get(`/get-fee-type-level?level_id=${id}`);
  // },
};
