import { useSelector } from "react-redux";
import { useEffect } from "react";

import { clearDetails, loadCountryByName, selectDetails } from "./details-slice";
import { useAppDispatch } from "../../store";

export const useDetails = (name: string) => {
  const dispatch = useAppDispatch();
  const details = useSelector(selectDetails);

  useEffect(() => {
    dispatch(loadCountryByName(name));

    return () => {
      dispatch(clearDetails());
    };
  }, [name, dispatch]);

  return details;
};
