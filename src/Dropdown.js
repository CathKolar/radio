import React from "react";

const Dropdown = ({ options }) => {
  return (
    <div>
      <select>
        {options.map((item, idx) => (
          <option key={idx} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
