import { authorized } from "../../../../common/axios";

export default {
  get() {
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
  getAll() {
    return authorized.get(`/universities`);
  },
};
