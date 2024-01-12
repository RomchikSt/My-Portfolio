import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type MapState = {
  zoom: number;
  filter: boolean;
  changeLanguage: string;
};

const initialState: MapState = {
  zoom: 10,
  filter: false,
  changeLanguage: "UA",
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
    setChangeLanguage: (state, action: PayloadAction<string>) => {
      state.changeLanguage = action.payload;
    },
  },
});

export const { setZoom, setFilter, setChangeLanguage } = mapSlice.actions;
