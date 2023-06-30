import {
  ADD_USER,
  FAIL_REQUEST,
  GET_FAMILTY_LIST,
  MAKE_REQUEST,
  ROW_TREE,
} from "./Actiontype";

const initialstate = {
  loading: true,
  familylist: [],
  familyobj: {},
  errmessage: "",
};
export const Reducer = (state = initialstate, action) => {
  switch (action.type) {
    case MAKE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FAIL_REQUEST:
      return {
        ...state,
        loading: false,
        errmessage: action.payload,
      };
    case GET_FAMILTY_LIST:
      return {
        ...state,
        loading: false,
        errmessage: "",
        familylist: action.payload,
        familyobj: {},
      };
    case ADD_USER:
      return {
        ...state,
        loading: false,
      };
    //   case ROW_TREE:
    //     return{
    default:
      return state;
  }
};
