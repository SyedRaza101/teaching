// import { useSelector } from 'react-redux'
import { Navigate } from "react-router-dom";

const PublicRoute = ({ Component, ...rest }) => {
  //   const authState = useSelector((state) => state.auth)
  const auth = false;
  if (auth) {
    return <Navigate to={`/`} replace />;
  }

  return <Component {...rest} />;
};

export default PublicRoute;
