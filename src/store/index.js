import { configureStore } from "@reduxjs/toolkit";
//reducers
import ownerModal from "./slices/owners";

export default configureStore({
  reducer: {
    ownerModal,
  },
});
