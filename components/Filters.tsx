"use client";

import { useState } from "react";

const Filters = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);

  const handleFiltersOpen = () => setFiltersOpen((prev) => !prev);

  return (
    <div className="space-y-2 text-sm sm:text-base">
      {/* Filter button */}
      <div
        className="flex items-center justify-center space-x-2 cursor-pointer select-none"
        onClick={handleFiltersOpen}
      >
        <i className="ri-filter-line cursor-pointer"></i>
        <p className="underline">Filter</p>
      </div>

      {/* Filters */}
      {filtersOpen ? (
        <div className="grid grid-cols-3">
          {/* Tag(s) filter */}
          <div className="max-w-full border border-neutral-200">
            <p className="font-bold bg-neutral-100 px-4 py-2">Tags</p>
            <ul className="text-left px-4 py-2">
              <li>Tag 1</li>
              <li>Tag 2</li>
              <li>Tag 3</li>
              <li>Tag 4</li>
              <li>Tag 5</li>
            </ul>
          </div>

          {/* Date filter */}
          <div className="max-w-full border-y border-neutral-200">
            <p className="font-bold bg-neutral-100 px-4 py-2">Date</p>
            <ul className="text-left px-4 py-2">
              <li>Newest first</li>
              <li>Oldest first</li>
            </ul>
          </div>

          {/* Likes filter */}
          <div className="max-w-full border border-neutral-200">
            <p className="font-bold bg-neutral-100 px-4 py-2">Likes</p>
            <ul className="text-left px-4 py-2">
              <li>Most liked first</li>
              <li>Least liked first</li>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Filters;
