import { appSlice } from "./AppSlice";

export const { switchUnauthorized } = appSlice.actions;

const appReducer = appSlice.reducer;

export default appReducer;
