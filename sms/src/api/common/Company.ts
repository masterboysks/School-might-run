/* eslint-disable import /no-anonymous-default-export */
import { authorized } from "./axios";
export default {
  create(form) {
    return authorized.post("/companies", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  get(page) {
    return authorized.get(`/companies?page=${page}`);
  },
  edit({ id, form }) {
    return authorized.put(`/companies/${id}`, form);
  },
  delete(id) {
    return authorized.delete(`/companies/${id}`);
  },
  plans() {
    return authorized.get("/get-all-plans");
  },
  updatePlan({ companyId, form }) {
    return authorized.put(`/companies/${companyId}/update-plan`, form);
  },
};
