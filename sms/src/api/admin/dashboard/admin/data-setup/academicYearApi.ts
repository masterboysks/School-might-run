import { authorized } from "../../../../common/axios";

export default {
  get(page = 1) {
    return authorized.get(`/academic-years?page=${page}`);
  },
  delete(id) {
    return authorized.delete(`academic-years/${id}`);
  },
  edit(id, form) {
    return authorized.put(`academic-years/${id}`, form);
  },
  create(form) {
    return authorized.post(`/academic-years`, form);
  },
  getAll() {
    return authorized.get(`/get-academic-years`);
  },
};
