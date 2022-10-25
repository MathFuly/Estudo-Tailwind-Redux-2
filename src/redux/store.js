import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./slicers/cardSlicer";
import kartReducer from "./slicers/kartSlice";

export const store = configureStore({
  reducer: {
    card: cardReducer,
    kart: kartReducer,
  },
});
