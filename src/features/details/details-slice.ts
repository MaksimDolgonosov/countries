import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Country, Extra } from "../../types";
import { CountrySlice } from "../countries/countries-slice";
import { RootState } from "../../store";

export const loadCountryByName = createAsyncThunk<{ data: Country[] }, string, { extra: Extra }>(
  "@@details/load-country-by-name",
  (name, { extra: { client, api } }) => {
    return client.get(api.searchByCountry(name));
  }
);
export const loadNeighborsByBorder = createAsyncThunk<{ data: Country[] }, string[], { extra: Extra }>(
  "@@details/load-neighbors",
  (borders, { extra: { client, api } }) => {
    return client.get(api.filterByCode(borders));
  }
);

export interface DetailSlice extends Pick<CountrySlice, "status" | "error"> {
  currentCountry: Country | null;
  neighbors: string[];
}

const initialState: DetailSlice = {
  currentCountry: null,
  neighbors: [],
  status: "idle",
  error: null,
};

const detailsSlice = createSlice({
  name: "@@details",
  initialState,
  reducers: {
    clearDetails: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCountryByName.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadCountryByName.rejected, (state) => {
        state.status = "rejected";
        state.error = "Cannot get country";
      })
      .addCase(loadCountryByName.fulfilled, (state, action) => {
        console.log(action.payload);
        state.status = "idle";
        state.currentCountry = action.payload.data[0];
      })
      .addCase(loadNeighborsByBorder.fulfilled, (state, action) => {
        state.neighbors = action.payload.data.map((country) => country.name);
      });
  },
});

export const { clearDetails } = detailsSlice.actions;
export const detailsReducer = detailsSlice.reducer;

// selectors
export const selectCurrentCountry = (state: RootState) => state.details.currentCountry;
export const selectDetails = (state: RootState) => state.details;
export const selectNeighbors = (state: RootState) => state.details.neighbors;
