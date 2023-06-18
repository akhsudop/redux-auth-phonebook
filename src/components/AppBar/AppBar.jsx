import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn, user } = useAuth();
  return isLoggedIn ? (
    <div>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/phonebook'}>Phonebook</NavLink>
      <p>Welcome, {user}</p>
      <button>Log Out</button>
    </div>
  ) : (
    <div>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/login'}>Log In</NavLink>
      <NavLink to={'/register'}>Register</NavLink>
    </div>
  );
};
