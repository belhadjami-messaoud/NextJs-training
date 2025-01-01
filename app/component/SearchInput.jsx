"use client";
import React, { useState } from "react";

const SearchInput = () => {
  const [searchVal, SetSearchVal] = useState("");
  const handlForm = (e) => {
    e.preventDefault();
    console.log({ searchVal });
  };

  return (
    <div>
      <form onSubmit={handlForm}>
        <input
          type="text"
          id="search"
          name="search"
          value={searchVal}
          onChange={(e) => SetSearchVal(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchInput;
