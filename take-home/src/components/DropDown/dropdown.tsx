import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { SearchType } from "../../modules/model";
import "./dropdown.css";
import { useDispatch } from "react-redux";
import {
  updateSerchCriteriaRarity,
  updateSerchCriteriaSet,
  updateSerchCriteriaType,
} from "../../modules/redux-store/action";
type DropDownProp = {
  type: SearchType;
  list: Array<string>;
};
export const DropDown = ({ type, list }: DropDownProp) => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");
  const Capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: "max-content",
      },
    },
  };
  const updateSerchCriteriaFor = (value: string) => {
    if (type === SearchType.rarities) {
      dispatch(updateSerchCriteriaRarity(value));
    } else if (type === SearchType.types) {
      dispatch(updateSerchCriteriaType(value));
    } else {
      dispatch(updateSerchCriteriaSet(value));
    }
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} className="dropdown">
      <InputLabel>{Capitalize(SearchType[type])}</InputLabel>
      <Select
        label={SearchType[type]}
        value={value}
        name={SearchType[type]}
        className="dropdown-select"
        onChange={(e) => {
          setValue(e.target.value);
          updateSerchCriteriaFor(e.target.value);
        }}
        MenuProps={MenuProps}
      >
        {list.map((each) => (
          <MenuItem key={each} className="dropdown-option" value={each}>
            {each}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
