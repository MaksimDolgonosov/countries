import { useEffect } from "react";

import { Theme, setTheme } from "./theme-slice";
import { useAppDispatch, useAppSelector } from "../../store";

export const useTheme = (): [Theme, () => void] => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme);
  //const theme = useSelector(state => state.theme);
  const toggleTheme = () => dispatch(setTheme(theme === "light" ? "dark" : "light"));

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return [theme, toggleTheme];
};
