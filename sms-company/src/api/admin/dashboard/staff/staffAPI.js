import { authorized } from "../../../common/axios";

export default {
  create(form) {
    return authorized.post(`/staff`, form);
  },
  getAll() {
    return authorized.get(`/get-teachers`);
  },
};
