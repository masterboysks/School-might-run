import { authorized } from "../../../../common/axios";

export default {
  get(page = 1) {
    return authorized.get(`/universities`);
  },
  delete(id) {
    return authorized.delete(`universities/${id}`);
  },
  edit(id, form) {
    return authorized.put(`universities/${id}`, form);
  },
  create(form) {
    return authorized.post(`/universities`, form);
  },
  getAll(form) {
    return authorized.post(`/get-universities`, form);
  },
};
