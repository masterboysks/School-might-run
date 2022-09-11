import { authorized } from "../../../../axios";

export default {
  get(page = 1) {
    return authorized.get(`/universities`);
  },
  delete(id) {
    return authorized.post(`universities/${id}`);
  },
  edit(id, form) {
    return authorized.post(`universities/${id}`, form);
  },
  create(form) {
    return authorized.post(`/universities`, form);
  },
};
