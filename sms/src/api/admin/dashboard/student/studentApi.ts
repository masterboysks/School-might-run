import { authorized } from '../../../common/axios';

export default {
  getLocalGurdain(mobile) {
    return authorized.get(`/get-parent?mobile_number=${mobile}`);
  },
  getFeeDetails(params: {
    level_id: string;
    batch_id: string;
    class_id: string;
    faculty_id?: string;
    sub_faculty_id?: string;
  }) {
    return authorized.get(
      `/get-fee-type-rate?level_id=10&batch_id=2&class_id=20&faculty_id=1&sub_faculty_id=`
      // ,  { params }
    );
    // ?level_id=10&batch_id=2&class_id=21&faculty_id=1&sub_faculty_id=1
  },
  // edit(id, form) {
  //   return authorized.put(`classes/${id}`, form);
  // },
  create(form) {
    return authorized.post(`/student`, form);
  },
  getStudents(page = 1) {
    return authorized.get(`/student?page=${page}`);
  },
};
