import { authorized } from '../../../common/axios';

export default {
  getIdByName(params) {
    return authorized.get(`/get-id-byname`, { params });
  },
};
