import { authorized } from "../../../../common/axios";

export default {
  get(page = 1) {
    return authorized.get(`/subjects?page=${page}`);
  },
  delete(id) {
    return authorized.post(`subjects/${id}`);
  },
  edit(id, form) {
    return authorized.post(`subjects/${id}`, form);
  },
  create(form) {
    return authorized.post(`/subjects`, form);
  },
  getAll() {
    return authorized.get(`/get-subjects`);
  },
};
