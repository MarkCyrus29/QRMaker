import React from "react";
import { HexColorPicker } from "react-colorful";

const ColorSelectorModal = ({ customColor, setCustomColor }) => {
  return <HexColorPicker color={customColor} onChange={setCustomColor} />;
};

export default ColorSelectorModal;
