import React from "react";

const Filter = ({ selectedYear, onChangeFilter }) => {
  const years = ["All", "2023", "2022", "2021", "2020"];
  return (
    <select value={selectedYear} onChange={(e) => onChangeFilter(e.target.value)}>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

export default Filter;
