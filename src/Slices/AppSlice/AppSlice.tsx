import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialstate = {
  dummy: 0,
};

function switchUnauthorized(state = initialstate, action: any) {
  state.dummy++;
  console.log("action dispatched");
}

export const appSlice = createSlice({
  name: "appSlice",
  initialState: initialstate,
  reducers: {
    switchUnauthorized,
  },
  extraReducers: {},
});
