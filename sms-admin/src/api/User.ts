import { authorized, axiosPrivate } from "./axios";

export default {
  login(form) {
    return axiosPrivate.post("/superadmin-login", form);
  },

  profile() {
    return authorized.get("/profile");
  },

  refresh(token) {
    return axiosPrivate.post("/refresh-token", { refresh_token: token });
  },
};
