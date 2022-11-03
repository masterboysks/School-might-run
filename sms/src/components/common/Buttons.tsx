import React from "react";

export function SecondaryButton(props) {
  const children = props?.children;
  return (
    <button {...props} className={`secondary_btn ${props.className} `}>
      {children}
    </button>
  );
}

export function PrimaryButton(props) {
  const children = props?.children;
  return (
    <button {...props} className={`primary_btn ${props.className}`}>
      {children}
    </button>
  );
}
