import { useSelector } from "react-redux";
import { useEffect } from "react";
import { loadNeighborsByBorder, selectNeighbors } from "./details-slice";
import { useAppDispatch } from "../../store";

export const useNeighbors = (borders: string[] = []) => {
  const dispatch = useAppDispatch();
  const neighbors = useSelector(selectNeighbors);

  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighborsByBorder(borders));
    }
  }, [borders, dispatch]);

  return neighbors;
};
