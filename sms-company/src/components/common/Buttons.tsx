import React from "react";

export function SecondaryButton({ children, onClick, className }) {
  return (
    <div onClick={onClick} className={`secondary_btn ${className} `}>
      {children}
    </div>
  );
}

export function PrimaryButton({ children, onClick, className }) {
  return (
    <div
      onClick={onClick}
      className={`bg-primary-btn focus:outline-none focus:ring focus:bg-white   focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}
