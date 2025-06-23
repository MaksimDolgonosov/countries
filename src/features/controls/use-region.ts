import { useSelector } from "react-redux";

import { selectRegion, setRegion } from "./controls-slice";
import { useAppDispatch } from "../../store";
import { CountryRegionProps } from "./CustomSelect";
import { Region } from "../../types";
import { SingleValue } from "react-select";

type onSelect = (reg: SingleValue<CountryRegionProps>) => void;

export const useRegion = (): [Region | "", onSelect] => {
  const dispatch = useAppDispatch();
  const region = useSelector(selectRegion);

  const handleSelect: onSelect = (reg) => {
    if (reg) {
      dispatch(setRegion(reg.value || ""));
    } else {
      dispatch(setRegion(""));
    }
  };

  return [region, handleSelect];
};
