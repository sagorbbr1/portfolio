import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import { useLocation } from "react-router-dom";
import { logedInUserContext } from "../../App";

const PrivateRoute = ({ children }) => {
  const userContext = useContext(logedInUserContext);
  const [user, setUser] = userContext;
  const location = useLocation();

  return user?.email ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: "/login",
      }}
      state={{ from: location }}
      replace
    />
  );
};

export default PrivateRoute;
