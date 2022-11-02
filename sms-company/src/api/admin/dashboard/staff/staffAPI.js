import { authorized } from "../../../common/axios";
export default {
    create(form) {
        return authorized.post(`/staff`, form);
    },
    getAll() {
        return authorized.get(`/get-teachers`);
    },
    list(page) {
        return authorized.get(`/staff?page=${page}`);
    },
    search(page, form) {
        return authorized.get(`/staff?page=${page}`, { params: form });
    },
    personalGet(id) {
        return authorized.get(`/staff/view-personal/${id}`);
    },
    officialGet(id) {
        return authorized.get(`/staff/view-official/${id}`);
    },
    addressGet(id) {
        return authorized.get(`/staff/view-address/${id}`);
    },
    attendance(form) {
        return authorized.post(`/staff-attendance`, form);
    },
    getAcademic(id, page) {
        return authorized.get(`/academic-details/staff/${id}?page=${page}`);
    },
    createAcademic(id, form) {
        return authorized.post(`/academic-details/staff/${id}`, form);
    },
    getDocument(id, page) {
        return authorized.get(`/documents/staff/${id}?page=${page}`);
    },
    createDocument(id, form) {
        return authorized.post(`/documents/staff/${id}`, form);
    },
};
