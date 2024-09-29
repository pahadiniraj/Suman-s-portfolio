import React from "react";

export default function FilterComponent({ filterText, onFilter, onClear }) {
  return (
    <div className="flex gap-1">
      <input
        className="w-40 md:w-72 outline-none ps-2 pe-5 p-2 rounded-s-md focus:ring-2 focus:ring-gray-300 text-sm border border-gray-300"
        id="search"
        type="text"
        placeholder="Search..."
        aria-label="Search Input"
        value={filterText}
        onChange={onFilter}
      />
      <button
        className="border border-gray-300 px-2 rounded-e-md bg-theme-blue text-white hover:text-gray-500"
        type="button"
        onClick={onClear}
      >
        <i className="fa-solid fa-xmark "></i>
      </button>
    </div>
  );
}
