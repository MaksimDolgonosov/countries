import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { Region } from "../../types";

interface ControlSlice {
  search: string;
  region: Region | "";
}

const initialState: ControlSlice = {
  search: "",
  region: "",
};

const controlsSlice = createSlice({
  name: "@@controls",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setRegion: (state, action: PayloadAction<Region | "">) => {
      state.region = action.payload;
    },
    clearControls: () => initialState,
  },
});

export const { setRegion, setSearch, clearControls } = controlsSlice.actions;
export const controlsReducer = controlsSlice.reducer;

export const selectSearch = (state: RootState) => state.controls.search;
export const selectRegion = (state: RootState) => state.controls.region;
export const selectControls = (state: RootState) => state.controls;
