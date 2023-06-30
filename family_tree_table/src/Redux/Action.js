import { toast } from "react-toastify";
import {
  MAKE_REQUEST,
  FAIL_REQUEST,
  GET_FAMILTY_LIST,
  ADD_USER,
} from "./Actiontype";
import axios from "axios";

export const makerequest = () => {
  return {
    type: MAKE_REQUEST,
  };
};

export const failrequest = (err) => {
  return {
    type: FAIL_REQUEST,
    payload: err,
  };
};
export const getfamilylist = (data) => {
  return {
    type: GET_FAMILTY_LIST,
    payload: data,
  };
};

export const adduser = () => {
  return {
    type: ADD_USER,
  };
};

// export const rowtreeview = () => {
//   return {
//     type: ROW_TREE,
//   };
// };

export const fetchfamilylist = () => {
  return (dispatch) => {
    dispatch(makerequest());
    axios
      .get("http://localhost:8000/Families")
      .then((res) => {
        const familylist = res.data;
        dispatch(getfamilylist(familylist));
      })
      .catch((err) => {
        dispatch(failrequest(err.message));
      });
  };
};

export const functionAdduser = (data) => {
  return (dispatch) => {
    dispatch(makerequest());
    axios
      .post("http://localhost:8000/Families", data)
      .then((res) => {
        dispatch(adduser());
        toast.success("family added successfully");
      })
      .catch((err) => {
        dispatch(failrequest(err.message));
      });
  };
};
