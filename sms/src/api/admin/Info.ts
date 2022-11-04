/* eslint-disable import /no-anonymous-default-export */
import { authorized } from "../common/axios";
export default {
  get() {
    return authorized.get(`/get-tenant-webdata`);
  },
};
