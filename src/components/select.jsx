import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectOptions({ title, options, handleSelect, value }) {
  return (
    <div>
      <FormControl sx={{ mt: 1, minWidth: 80 }}>
        <InputLabel
          sx={{ textAlign: "center" }}
          id="demo-simple-select-autowidth-label"
        >
          {title}
        </InputLabel>
        <Select
          sx={{
            height: "100%",
            alignSelf: "center",
            width: "100%",
          }}
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={value}
          onChange={handleSelect}
          autoWidth
          label={title}
        >
          {options.map((option, index) => {
            return (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
