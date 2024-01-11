import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type MapState = {
  zoom: number;
  filter: boolean;
};

const initialState: MapState = {
  zoom: 10,
  filter: false,
};

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setZoom: (state, action: PayloadAction<number>) => {
      state.zoom = action.payload;
    },
    setFilter: (state, action: PayloadAction<boolean>) => {
      state.filter = action.payload;
    },
  },
});

export const { setZoom, setFilter } = mapSlice.actions;
