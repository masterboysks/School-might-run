import { authorized } from "../../../../common/axios";

export default {
  get(page = 1) {
    return authorized.get(`/departments?page=${page}`);
  },
  delete(id) {
    return authorized.post(`departments/${id}`);
  },
  edit(id, form) {
    return authorized.post(`departments/${id}`, form);
  },
  create(form) {
    return authorized.post(`/departments`, form);
  },
  getAll() {
    return authorized.get(`/get-departments`);
  },
};
