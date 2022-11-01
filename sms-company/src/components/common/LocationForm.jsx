import { useEffect, useState } from "react";
import countries from "../../api/common/country/country";
import { Select, SelectDisabled } from "./fields";

export default function LocationForm({ register, errors, watch, prefix = "" }) {
  let country, province, district, vdc_municipality;
  prefix
    ? ([country, province, district, vdc_municipality] = watch([
        prefix + "_country",
        prefix + "_province",
        prefix + "_district",
        prefix + "_vdc_municipality",
      ]))
    : ([country, province, district, vdc_municipality] = watch([
        "country",
        "province",
        "district",
        "vdc_municipality",
      ]));
  const [arrayCountry, setArrayCountry] = useState([]);
  const [arrayProvince, setArrayProvince] = useState([]);
  const [arrayDistrict, setArrayDistrict] = useState([]);
  const [arrayVdcMunicalipality, setArrayVdcMunicalipality] = useState([]);
  const provinceFunction = async () => {
    try {
      const data = await countries.province(country);
      setArrayProvince(data?.data?.data);
    } catch (e) {
      console.log(e);
    }
  };
  const districtFunction = async () => {
    try {
      const data = await countries.district(country, province);
      setArrayDistrict(data?.data?.data);
    } catch (e) {
      console.log(e);
    }
  };
  const vdcFunction = async () => {
    try {
      const data = await countries.municipality(country, province, district);
      setArrayVdcMunicalipality(data?.data?.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (arrayCountry.length === 0) {
      (async () => {
        const data = await countries.country();
        setArrayCountry(data?.data?.data);
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
        {arrayCountry.length !== 0 ? (
          <Select
            label="Country*"
            value={arrayCountry}
            register={register}
            name={prefix ? prefix + "_country" : "country"}
            required={true}
            errors={errors}
          />
        ) : (
          <SelectDisabled value="Select" label="Country*" />
        )}
      </div>
      {arrayProvince.length !== 0 ? (
        <div className="">
          <Select
            label="Province*"
            value={arrayProvince}
            register={register}
            name={prefix ? prefix + "_province" : "province"}
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
            register={register}
            name={prefix ? prefix + "_district" : "district"}
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
            register={register}
            name={prefix ? prefix + "_vdc_municipality" : "vdc_municipality"}
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
