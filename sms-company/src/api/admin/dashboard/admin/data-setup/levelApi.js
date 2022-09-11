import { authorized } from "../../../../axios";

export default {
  get(page = 1) {
    return authorized.get(`/levels?page=${page}`);
  },
  delete(id) {
    return authorized.post(`levels/${id}`);
  },
  edit(id, form) {
    return authorized.post(`levels/${id}`, form);
  },
  create(form) {
    return authorized.post(`/levels`, form);
  },
  getAll() {
    return authorized.get(`/get-levels`);
  },
};
