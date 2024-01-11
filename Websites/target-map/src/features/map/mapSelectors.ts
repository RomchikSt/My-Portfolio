import { RootState } from "../../store/store";

export const selectZoom = (state: RootState) => state.map.zoom;

export const selectFilter = (state: RootState) => state.map.filter;
