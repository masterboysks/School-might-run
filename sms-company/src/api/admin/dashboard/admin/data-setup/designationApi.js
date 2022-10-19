import { authorized } from "../../../../common/axios";

export default {
  get(page = 1) {
    return authorized.get(`/designations?page=${page}`);
  },
  delete(id) {
    return authorized.delete(`designations/${id}`);
  },
  edit(id, form) {
    return authorized.put(`designations/${id}`, form);
  },
  create(form) {
    return authorized.post(`/designations`, form);
  },
  getAll(id) {
    return authorized.get(`/get-designations?department_id=${id}`);
  },
};
