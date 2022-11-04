import Search from "@mui/icons-material/SearchOutlined";
import React from "react";

export default function SearchIcon({ className = "", onClick }) {
  return (
    <div
      onClick={onClick}
      className={`w-fit h-fit bg-primary-btn box-border px-2 py-2 text-center text-white rounded cursor-pointer ${className}`}
    >
      <Search className="w-4 ml-auto" />
    </div>
  );
}
