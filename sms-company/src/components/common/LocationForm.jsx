import { useEffect, useState } from "react";
import countries from "../../api/country/country";
import { Select, SelectDisabled } from "./fields";

export default function LocationForm({
  register,
  errors,
  watch,
  location,
  setLocation,
}) {
  const [country, province, district, vdc_municipality] = watch([
    "country",
    "province",
    "district",
    "vdc_municipality",
  ]);
  const [arrayCountry, setArrayCountry] = useState([]);
  const [arrayProvince, setArrayProvince] = useState([]);
  const [arrayDistrict, setArrayDistrict] = useState([]);
  const [arrayVdcMunicalipality, setArrayVdcMunicalipality] = useState([]);
  const provinceFunction = async () => {
    try {
      const data = await countries.province(
        location?.country?.filter((curr) => curr.country_name === country)[0].id
      );
      const tempLocation = { ...location, province: data?.data?.data };
      setLocation(tempLocation);
      const temp = data?.data?.data?.map((curr) => curr.province_name);
      setArrayProvince(temp);
      console.log(location);
    } catch (e) {
      console.log(e);
    }
  };
  const districtFunction = async () => {
    try {
      console.log(location);
      const data = await countries.district(
        location?.country?.filter((curr) => curr.country_name === country)[0]
          .id,
        location?.province?.filter((curr) => curr.province_name === province)[0]
          .id
      );
      setLocation({ ...location, district: data?.data?.data });
      const temp = data?.data?.data?.map((curr) => curr.district_name);
      setArrayDistrict(temp);
    } catch (e) {
      console.log(e);
    }
  };
  const vdcFunction = async () => {
    try {
      const data = await countries.municipality(
        location?.country?.filter((curr) => curr.country_name === country)[0]
          .id,
        location?.province?.filter((curr) => curr.province_name === province)[0]
          .id,
        location?.district?.filter((curr) => curr.district_name === district)[0]
          .id
      );
      setLocation({ ...location, vdc_municipality: data?.data?.data });
      const temp = data?.data?.data?.map((curr) => curr.municipality_name);
      setArrayVdcMunicalipality(temp);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log(location);
    console.log(country, province, district, vdc_municipality);

    if (arrayCountry.length === 0) {
      (async () => {
        const data = await countries.country();
        setLocation({ ...location, country: data?.data?.data });

        const temp = data?.data?.data?.map((curr) => curr.country_name);
        //   console.log(countryWithId);
        setArrayCountry(temp);
      })();
    }
    if (country) {
      arrayProvince.length === 0 && provinceFunction();

      if (province) {
        arrayDistrict.length === 0 && districtFunction();

        if (district && arrayVdcMunicalipality.length === 0) {
          vdcFunction();
        }
      }
    }
  }, [country, province, district]);

  useEffect(() => {
    setArrayVdcMunicalipality([]);
    district && vdcFunction();
  }, [district]);
  useEffect(() => {
    setArrayDistrict([]);
    setArrayVdcMunicalipality([]);
    province && districtFunction();
  }, [province]);
  useEffect(() => {
    setArrayProvince([]);
    setArrayDistrict([]);
    setArrayVdcMunicalipality([]);
    country && provinceFunction();
  }, [country]);

  return (
    <>
      <div className="">
        <Select
          label="Country*"
          value={arrayCountry}
          selected="Select"
          register={register}
          name="country"
          required={true}
          errors={errors}
        />
      </div>
      {arrayProvince.length !== 0 ? (
        <div className="">
          <Select
            label="Province*"
            value={arrayProvince}
            selected="Select"
            register={register}
            name="province"
            required={true}
            errors={errors}
          />
        </div>
      ) : (
        <div>
          <SelectDisabled value="Select" label="Province*" />
        </div>
      )}
      {arrayDistrict.length !== 0 ? (
        <div className="">
          <Select
            label="District*"
            value={arrayDistrict}
            selected="Select"
            register={register}
            name="district"
            required={true}
            errors={errors}
          />
        </div>
      ) : (
        <div>
          <SelectDisabled value="Select" label="District*" />
        </div>
      )}
      {arrayVdcMunicalipality.length !== 0 ? (
        <div className="">
          <Select
            label="VDC/Municipality*"
            value={arrayVdcMunicalipality}
            selected="Select"
            register={register}
            name="vdc_municipality"
            errors={errors}
            required={true}
          />
        </div>
      ) : (
        <div>
          <SelectDisabled value="Select" label="VDC/Municipality*" />
        </div>
      )}
    </>
  );
}
