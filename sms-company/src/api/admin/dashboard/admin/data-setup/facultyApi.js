import { authorized } from "../../../../common/axios";

export default {
  get(page = 1) {
    return authorized.get(`/faculties?page=${page}`);
  },
  delete(id) {
    return authorized.post(`faculties/${id}`);
  },
  edit(id, form) {
    return authorized.post(`faculties/${id}`, form);
  },
  create(form) {
    return authorized.post(`/faculties`, form);
  },
  getAll() {
    return authorized.get(`/get-faculties`);
  },
};