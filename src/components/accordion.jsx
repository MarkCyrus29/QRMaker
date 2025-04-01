import React from "react";
import DropdownToggle from "./dropdownicon";

const Accordion = ({ title, handleClick }) => {
  return (
    <button className="btn " onClick={handleClick}>
      <p>{title}</p>
      {<DropdownToggle />}
    </button>
  );
};

export default Accordion;
