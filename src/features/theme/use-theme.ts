import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { Theme, setTheme } from "./theme-slice";
import { useAppSelector } from "../../store";

export const useTheme = (): [Theme, () => void] => {
  const dispatch = useDispatch();
  const theme = useAppSelector((state) => state.theme);
  //const theme = useSelector(state => state.theme);

  const toggleTheme = () => dispatch(setTheme(theme === "light" ? "dark" : "light"));

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return [theme, toggleTheme];
};
