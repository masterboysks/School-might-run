import { authorized } from "./axios";
export default {
  create(form) {
    return authorized.post("/companies", form);
  },
  get(page) {
    return authorized.get(`/companies?page=${page}`);
  },
  edit({ id, form }) {
    return authorized.put(`/companies/${id}`, form);
  },
  delete(id) {
    return authorized.delete(`/companies/${id}`);
  },
};
