import {configureStore} from "@reduxjs/toolkit";
import FetchStatusSlice from "./FetchStatusSlice";
import ItemSlice from "./ItemSlice";
import bagSlice from "./bagSlice";

const myntraStore = configureStore({
  reducer: {
    items: ItemSlice.reducer,
    fetchStatus: FetchStatusSlice.reducer,
    bag: bagSlice.reducer,
  }
});

export default myntraStore;