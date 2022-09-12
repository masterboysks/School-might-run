import { authorized } from "../../../../common/axios";

export default {
  get(page = 1) {
    return authorized.get(`/sub-faculties?page=${page}`);
  },
  delete(id) {
    return authorized.post(`sub-faculties/${id}`);
  },
  edit(id, form) {
    return authorized.post(`sub-faculties/${id}`, form);
  },
  create(form) {
    return authorized.post(`/sub-faculties`, form);
  },
  getAll() {
    return authorized.get(`/get-subfaculties`);
  },
};
