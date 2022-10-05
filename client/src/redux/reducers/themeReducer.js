import { GLOBALTYPES } from "../actions/globalType";

const initialState = localStorage.getItem("theme") === "false" ? false : true;

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBALTYPES.THEME:
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;
