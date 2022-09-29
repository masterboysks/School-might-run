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
  search(page, form) {
    return authorized.get(`/staff?page=${page}`, { params: form });
  },
  personalGet(id) {
    return authorized.get(`/staff/view-personal/${id}`);
  },
  officialGet(id) {
    return authorized.get(`/staff/view-official/${id}`);
  },
  addressGet(id) {
    return authorized.get(`/staff/view-address/${id}`);
  },
  attendence(form) {
    return authorized.post(`/staff-attendence`, form);
  },
};
