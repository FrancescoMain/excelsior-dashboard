import { PayloadAction, createSlice } from "@reduxjs/toolkit";



const TabActive = {
  actived: 0
};

export const NavigationSlice = createSlice({
  name: "tabactive",
  initialState: TabActive,
  reducers: {
    setTab: (state, action: PayloadAction<number>) => {
      state.actived = action.payload
    }
  },
});

export const { setTab } = NavigationSlice.actions;
