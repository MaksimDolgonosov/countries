import { useSelector } from "react-redux";
import { selectSearch, setSearch } from "./controls-slice";
import { useAppDispatch } from "../../store";

//type OnSearch = ChangeEventHandler<HTMLInputElement>;

export const useSearch = (): [string, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
  const dispatch = useAppDispatch();
  const search = useSelector(selectSearch);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  return [search, handleSearch];
};
