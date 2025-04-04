import React from "react";
import ColorSelector from "react-color-selector";

const ColorSelectorModal = ({ setCustomColor }) => {
  const picker_data = {
    width: 200,
    height: 200,
    view: "sphere",
    theme: "light",
    title: "COLORS",
  };

  return (
    <div className="absolute right-0 bottom-0 z-10 ">
      <ColorSelector pallet={picker_data} selectedColor={setCustomColor} />
    </div>
  );
};

export default ColorSelectorModal;
