import { useId, useState } from 'react';
import s from './Form.module.css';
import SeachBar from './SeachBar';

const Form = ({ onLogin }) => {
  const loginId = useId();
  const passwordId = useId();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeLogin = e => {
    setLogin(e.target.value);
  };
  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const { login, password } = form.elements;
    console.log(login, password);
    console.log(login.value, password.value);

    onLogin({
      login: login.value,
      password: password.value,
    });

    form.reset();
  };

  return (
    <form className={s.formWrap} onSubmit={handleSubmit}>
      <label htmlFor={loginId}>Login</label>
      <input
        className={s.input}
        type="text"
        name="login"
        id={loginId}
        value={login}
        onChange={handleChangeLogin}
      />
      <label htmlFor={passwordId}>Password</label>
      <input
        className={s.input}
        type="pasword"
        name="password"
        id={passwordId}
        value={password}
        onChange={handleChangePassword}
      />
      <button className={s.btn} type="submit">
        Log in
      </button>
      <SeachBar value={login} />
    </form>
  );
};

export default Form;
