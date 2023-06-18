import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ redirectTo = '/', component }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} replace /> : component;
};
export default PrivateRoute;
