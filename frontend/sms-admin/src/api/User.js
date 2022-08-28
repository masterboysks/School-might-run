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
    return (token) =>
      authorized.get("/profile", {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      });
  },
  auth() {
    return Api().get("/user");
  },
};
