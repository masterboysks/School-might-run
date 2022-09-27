import { authorized } from "../../../../common/axios";

export default {
  get(page = 1) {
    return authorized.get(`/designations?page=${page}`);
  },
  delete(id) {
    return authorized.post(`designations/${id}`);
  },
  edit(id, form) {
    return authorized.post(`designations/${id}`, form);
  },
  create(form) {
    return authorized.post(`/designations`, form);
  },
  getAll(id) {
    return authorized.get(`/get-designations?department_id=${id}`);
  },
};
