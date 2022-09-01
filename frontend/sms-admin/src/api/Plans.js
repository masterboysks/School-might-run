import { authorized } from "./axios";
export default {
  createPlan(form) {
    return authorized.post("/plans", form);
  },
};
