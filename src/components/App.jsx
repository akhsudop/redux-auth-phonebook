import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { refreshUser } from 'redux/auth/operations';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Phonebook = lazy(() => import('pages/Phonebook'));
const PrivateRoute = lazy(() => import('./PrivateRoute'));
const RestrictedRoute = lazy(() => import('./RestrictedRoute'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/phonebook" component={<Login />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/phonebook" component={<Register />} />
          }
        />
        <Route
          path="/phonebook"
          element={
            <PrivateRoute redirectTo="/login" component={<Phonebook />} />
          }
        />
      </Route>
    </Routes>
  );
};
