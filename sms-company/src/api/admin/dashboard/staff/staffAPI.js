import { authorized } from "../../../common/axios";

export default {
  create(form) {
    return authorized.post(`/staff`, form);
  },
  getAll() {
    return authorized.get(`/get-teachers`);
  },
  list(page) {
    return authorized.get(`/staff?page=${page}`);
  },
  personalGet(id) {
    return authorized.get(`/staff/view-personal/${id}`);
  },
};
