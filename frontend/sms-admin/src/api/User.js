import { Cookies } from "react-cookie";
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
  profile(token) {
    return authorized.get("/profile", {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    });
  },
  auth() {
    return Api().get("/user");
  },
};
