import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import Toast from "./Toast";
import { GLOBALTYPES } from "../../redux/actions/globalType";

const ALert = () => {
  const dispatch = useDispatch();
  const { alert } = useSelector((state) => state);

  return (
    <div>
      {alert.loading && <Loading />}
      {alert.error && (
        <Toast
          msg={alert.error}
          handleShow={() => dispatch({ type: GLOBALTYPES.ALERT, payload: {} })}
          color={{ bg: "red-200", text: "red-500" }}
        />
      )}
      {alert.success && (
        <Toast
          msg={alert.success}
          handleShow={() => dispatch({ type: GLOBALTYPES.ALERT, payload: {} })}
          color={{ bg: "green-200", text: "green-500" }}
        />
      )}
    </div>
  );
};

export default ALert;
