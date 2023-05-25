import axios from "axios";
import { setOwnerState } from "../store/slices/ownersControl";
export const loadOwners = (page) => async (dispatch) => {
  const token = sessionStorage.getItem("token");
  await axios
    .get(`http://localhost:4000/person?page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((data) => {
      dispatch(setOwnerState(data.data.data));
      console.log(data.data);
    });
};
