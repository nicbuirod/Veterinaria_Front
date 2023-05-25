import { configureStore } from "@reduxjs/toolkit";
//reducers
import ownerModal from "./slices/owners";
import photo from "./slices/register";
import loginReducer from "../store/slices/login/loginSlice";
import personReducer from "../store/slices/person/personSlice";

export default configureStore({
  reducer: {
    ownerModal,
    photo,
    login: loginReducer,
    person: personReducer,
  },
});
