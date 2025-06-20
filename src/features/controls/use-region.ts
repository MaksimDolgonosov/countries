import { useSelector } from "react-redux";

import { selectRegion, setRegion } from "./controls-slice";
import { useAppDispatch } from "../../store";

export const useRegion = () => {
  const dispatch = useAppDispatch();
  const region = useSelector(selectRegion);

  const handleSelect = (reg) => {
    dispatch(setRegion(reg?.value || ""));
  };

  return [region, handleSelect];
};
