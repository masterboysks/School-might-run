import { authorized } from "../../../../common/axios";

export default {
  get(page = 1) {
    return authorized.get(`/sections?page=${page}`);
  },
  delete(id) {
    return authorized.post(`sections/${id}`);
  },
  edit(id, form) {
    return authorized.post(`sections/${id}`, form);
  },
  create(form) {
    return authorized.post(`/sections`, form);
  },
  getAll() {
    return authorized.get(`/get-sections`);
  },
};
