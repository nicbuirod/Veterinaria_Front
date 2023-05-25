import { configureStore } from "@reduxjs/toolkit";
//reducers
import ownerModal from "./slices/owners";
import photo from "./slices/register";
import loginReducer from "../store/slices/login/loginSlice";

export default configureStore({
  reducer: {
    ownerModal,
    photo,
    login: loginReducer,
  },
});
