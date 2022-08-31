import { authorized, axiosPrivate } from "./axios";

export default {
  register(form) {
    return axiosPrivate.post("/register", form);
  },

  login(form) {
    return axiosPrivate.post("/superadmin-login", form);
  },

  logout() {
    return axiosPrivate().post("/logout");
  },
  profile() {
    return authorized.get("/profile");
  },
  refresh(token) {
    return axiosPrivate.post("/refresh-token", { refresh_token: token });
  },
};
