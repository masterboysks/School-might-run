import { authorized } from "../../../common/axios";
export default {
    get(page = 1) {
        return authorized.get(`/schedules?page=${page}`);
    },
    delete(id) {
        return authorized.delete(`schedules/${id}`);
    },
    edit(id, form) {
        return authorized.put(`schedules/${id}`, form);
    },
    create(form) {
        return authorized.post(`/schedules`, form);
    },
    getAll() {
        return authorized.get(`/get-schedules`);
    },
};
