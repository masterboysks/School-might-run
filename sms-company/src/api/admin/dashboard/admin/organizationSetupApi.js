import { authorized } from "../../../common/axios";
export default {
    get() {
        return authorized.get(`/general-settings`);
    },
    edit(form) {
        return authorized.post(`/general-settings?_method=PUT`, form);
    },
};
