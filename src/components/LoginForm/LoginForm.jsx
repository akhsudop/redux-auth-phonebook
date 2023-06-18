import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleRegister = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(logIn({ email, password }));

    form.reset();
  };
  return (
    <div>
      <p>Enter your username and password to log in, please</p>
      <form onSubmit={handleRegister}>
        <TextField
          id="filled-search"
          label="Email"
          name="email"
          type="email"
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <button type="submit">Log Me!</button>
      </form>
    </div>
  );
};
