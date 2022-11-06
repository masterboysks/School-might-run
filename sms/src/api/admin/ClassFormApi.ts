/* eslint-disable import /no-anonymous-default-export */
import { countryAPI } from '../common/axios';
const countries = {
  country() {
    return countryAPI.get(`/get-countries`);
  },
  province(country) {
    return countryAPI.get(`/get-provinces?country_id=${country}`);
  },
  district(country, province) {
    return countryAPI.get(
      `/get-districts?country_id=${country}&province_id=${province}`
    );
  },
  municipality(country, province, district) {
    return countryAPI.get(
      `/get-municipalities?country_id=${country}&province_id=${province}&district_id=${district}`
    );
  },
};
export default countries;
