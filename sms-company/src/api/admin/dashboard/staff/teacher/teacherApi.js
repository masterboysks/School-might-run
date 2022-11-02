import { authorized } from "../../../../common/axios";
export default {
    //   get(page = 1) {
    //     return authorized.get(`/classes?page=${page}`);
    //   },
    //   delete(id) {
    //     return authorized.post(`classes/${id}`);
    //   },
    //   edit(id, form) {
    //     return authorized.post(`classes/${id}`, form);
    //   },
    //   create(form) {
    //     return authorized.post(`/classes`, form);
    //   },
    getAll() {
        return authorized.get(`/get-teachers`);
    },
};
