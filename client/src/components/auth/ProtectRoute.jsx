import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectRoute = ({ children, user, redirectPath = "/login" }) => {
  if (!user) return <Navigate to={redirectPath} />;
  return children ? children : <Outlet />;
};

ProtectRoute.propTypes = {
  children: PropTypes.element,
  user: PropTypes.bool,
  redirectPath: PropTypes.string,
};

export default ProtectRoute;
