import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleRegister = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.username.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(register({ name, email, password }));
    form.reset();
  };

  return (
    <div>
      <p>IT IS NICE TO MEET YOU!</p>
      <form onSubmit={handleRegister}>
        <TextField
          id="filled-search"
          label="Username"
          name="username"
          type="search"
          variant="filled"
        />
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
        <button type="submit">Register Me!</button>
      </form>
    </div>
  );
};
