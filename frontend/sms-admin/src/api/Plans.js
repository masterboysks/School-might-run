import { authorized } from "./axios";
export default {
  createPlan(form) {
    return authorized.post("/plans", form);
  },
  getPlans(page) {
    return authorized.get(`/plans?page=${page}`);
  },
  editPlans({ id, form }) {
    return authorized.put(`/plans/${id}`, form);
  },
  deletePlans(id) {
    return authorized.delete(`/plans/${id}`);
  },
};
