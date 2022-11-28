import { authorized } from '../../../common/axios';

export default {
  generate(data) {
    return authorized.post(`/generate-fee`, data);
  },
  getClasses(params) {
    return authorized.get(`generate-fee`, { params });
  },
  edit(id, form) {
    return authorized.put(`/fee-type/${id}`, form);
  },
  create(form) {
    return authorized.post(`/fee-type`, form);
  },
  getClass(params) {
    return authorized.get(`/inv-get-student`, { params });
  },

  // getByLevelId(id) {
  //   return authorized.get(`/get-fee-type-level?level_id=${id}`);
  // },
};
