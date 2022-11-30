import { authorized } from '../../../common/axios';

export default {
  //   get(page = 1) {
  //     return authorized.get(`/fee-assign?page=${page}`);
  //   },
  //   delete(id) {
  //     return authorized.delete(`/fee-assign/${id}`);
  //   },
  //   edit(id, form) {
  //     return authorized.put(`/fee-assign/${id}`, form);
  //   },
  createLogsheet(id, form) {
    return authorized.post(`/student-logsheet/${id}`, form);
  },
  getStudent(params) {
    return authorized.get(`/student`, { params });
  },
  getOneStudent(id) {
    return authorized.get(`/student/${id}`);
  },
  getLogsheet(id) {
    return authorized.get(`/student-logsheet/${id}`);
  },
  getInvoiceDetails(id) {
    return authorized.get(`/inv-det-get-student/${id}`);
  },
};
