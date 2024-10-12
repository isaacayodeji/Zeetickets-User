import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Layout } from "../../Models/application/state";
import { AppPayload } from "../../Models/application/payload";
import { Booking, Tickets } from "../../Models/client/response";
import { PurchaseBooking } from "../../Models/client/request";

const initialState: Layout = {
  showModal: false,
  current: 0,
  page: 1,
  size: 100,
  quality: 1,
  request: new PurchaseBooking(),
  record: new Booking(),
  response: new Tickets(),
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setLayoutState: <K extends keyof Layout>(
      state: Layout,
      action: PayloadAction<AppPayload<Layout, K>>
    ) => {
      const { value, key } = action.payload;
      state[key] = value;
    },
    setAllLayoutState: (state, action: PayloadAction<Layout>) => {
      state = action.payload as Layout;
      return state;
    },
  },
});

export const { setAllLayoutState, setLayoutState } = layoutSlice.actions;
export const layoutReducer = layoutSlice.reducer;
