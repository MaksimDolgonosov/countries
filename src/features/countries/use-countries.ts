import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
// import { selectControls } from "../controls/controls-slice";
import { loadCountries, selectVisibleCountries } from "./countries-slice";
import { Country } from "../../types";

export type Options = {
  status: string;
  error: string | null;
  qty: number;
};

export const useCountries = (): [Country[], Options] => {
  const dispatch = useAppDispatch();

  const controls = useAppSelector((state) => state.controls);

  const countries = useAppSelector((state) => selectVisibleCountries(state, controls));

  const { status, error, qty } = useAppSelector((state) => ({
    status: state.countries.status,
    error: state.countries.error,
    qty: state.countries.list.length,
  }));

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [qty, dispatch]);

  return [countries, { status, error, qty }];
};
