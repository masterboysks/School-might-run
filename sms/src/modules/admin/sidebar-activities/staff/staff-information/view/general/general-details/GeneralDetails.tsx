import React from "react";
import AddressDetails from "./AddressDetails";
import OfficeDetails from "./OfficeDetails";
import PersonalDetails from "./PersonalDetails";

export default function GeneralDetails() {
  return (
    <div>
      <PersonalDetails />
      <OfficeDetails />
      <AddressDetails />
    </div>
  );
}
