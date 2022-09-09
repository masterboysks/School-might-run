import { authorized } from "../../../axios";

export default {
  get() {
    return authorized.get(`/general-settings`);
  },
};
