import { useSelector } from "react-redux";
import { selectSearch, setSearch } from "./controls-slice";
import { useAppDispatch } from "../../store";
import { ChangeEventHandler } from "react";

type OnSearch = ChangeEventHandler<HTMLInputElement>;

export const useSearch = (): [string, OnSearch] => {
  const dispatch = useAppDispatch();
  const search = useSelector(selectSearch);

  const handleSearch: OnSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return [search, handleSearch];
};
