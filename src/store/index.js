import { configureStore } from "@reduxjs/toolkit";
//reducers
import ownerModal from "./slices/owners";
import photo from "./slices/register";

export default configureStore({
  reducer: {
    ownerModal,
    photo,
  },
});
