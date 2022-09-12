import { useEffect, useState } from "react";

export default function ClassForm({ register, errors, watch }) {
  //   const [country, province, district, vdc_municipality] = watch([
  //     "country",
  //     "province",
  //     "district",
  //     "vdc_municipality",
  //   ]);
  //   const [arrayCountry, setArrayCountry] = useState([]);
  //   const [arrayProvince, setArrayProvince] = useState([]);
  //   const [arrayDistrict, setArrayDistrict] = useState([]);
  //   const [arrayVdcMunicalipality, setArrayVdcMunicalipality] = useState([]);
  //   const provinceFunction = async () => {
  //     try {
  //       const data = await countries.province(country);
  //       setArrayProvince(data?.data?.data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   const districtFunction = async () => {
  //     try {
  //       const data = await countries.district(country, province);
  //       setArrayDistrict(data?.data?.data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   const vdcFunction = async () => {
  //     try {
  //       const data = await countries.municipality(country, province, district);
  //       setArrayVdcMunicalipality(data?.data?.data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  //   useEffect(() => {
  //     console.log(country, province, district, vdc_municipality);

  //     if (arrayCountry.length === 0) {
  //       (async () => {
  //         const data = await countries.country();
  //         console.log(data?.data?.data);
  //         setArrayCountry(data?.data?.data);
  //       })();
  //     }
  //     if (country) {
  //       arrayProvince.length === 0 && provinceFunction();

  //       if (province) {
  //         arrayDistrict.length === 0 && districtFunction();

  //         if (district && arrayVdcMunicalipality.length === 0) {
  //           vdcFunction();
  //         }
  //       }
  //     }
  //   }, [country, province, district]);

  //   useEffect(() => {
  //     setArrayVdcMunicalipality([]);
  //     district && vdcFunction();
  //   }, [district]);
  //   useEffect(() => {
  //     setArrayDistrict([]);
  //     setArrayVdcMunicalipality([]);
  //     province && districtFunction();
  //   }, [province]);
  //   useEffect(() => {
  //     setArrayProvince([]);
  //     setArrayDistrict([]);
  //     setArrayVdcMunicalipality([]);
  //     country && provinceFunction();
  //   }, [country]);

  return (
    <></>
    // <>
    //   <div className="">
    //     <Select
    //       label="Country*"
    //       value={arrayCountry}
    //       selected="Select"
    //       register={register}
    //       name="country"
    //       required={true}
    //       errors={errors}
    //     />
    //   </div>
    //   {arrayProvince.length !== 0 ? (
    //     <div className="">
    //       <Select
    //         label="Province*"
    //         value={arrayProvince}
    //         selected="Select"
    //         register={register}
    //         name="province"
    //         required={true}
    //         errors={errors}
    //       />
    //     </div>
    //   ) : (
    //     <div>
    //       <SelectDisabled value="Select" label="Province*" />
    //     </div>
    //   )}
    //   {arrayDistrict.length !== 0 ? (
    //     <div className="">
    //       <Select
    //         label="District*"
    //         value={arrayDistrict}
    //         selected="Select"
    //         register={register}
    //         name="district"
    //         required={true}
    //         errors={errors}
    //       />
    //     </div>
    //   ) : (
    //     <div>
    //       <SelectDisabled value="Select" label="District*" />
    //     </div>
    //   )}
    //   {arrayVdcMunicalipality.length !== 0 ? (
    //     <div className="">
    //       <Select
    //         label="VDC/Municipality*"
    //         value={arrayVdcMunicalipality}
    //         selected="Select"
    //         register={register}
    //         name="vdc_municipality"
    //         errors={errors}
    //         required={true}
    //       />
    //     </div>
    //   ) : (
    //     <div>
    //       <SelectDisabled value="Select" label="VDC/Municipality*" />
    //     </div>
    //   )}
    // </>
  );
}
