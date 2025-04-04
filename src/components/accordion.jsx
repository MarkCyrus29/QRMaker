import React from "react";
import DropdownToggle from "./dropdownicon";

const Accordion = ({ title, handleClick, Selected }) => {
  return (
    <button className="btn peer" onClick={handleClick}>
      <p className="my-1">{title}</p>
      {Selected ? (
        <DropdownToggle
          Open={true}
          Style={"-rotate-180 transition-all duration-400"}
        />
      ) : (
        <DropdownToggle Open={false} Style={"transition-all duration-500"} />
      )}
    </button>
  );
};

export default Accordion;
