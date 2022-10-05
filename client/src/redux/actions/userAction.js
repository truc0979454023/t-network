import { getDataAPI } from "../../utils/fetchData";
import { GLOBALTYPES } from "./globalType";

export const searchUser = (search, token) => async (dispatch) => {
  try {
    if (search) {
      getDataAPI(`search?username=${search}`, token).then((res) =>
        dispatch({ type: GLOBALTYPES.SEARCH, payload: res.data.users })
      );
    } else {
      dispatch({ type: GLOBALTYPES.SEARCH, payload: [] });
    }
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: error.response.data.msg },
    });
  }
};
