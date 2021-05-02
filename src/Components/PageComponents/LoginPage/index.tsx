import { useState } from 'react';
import styles from './LoginPage.module.scss';
import { login } from '../../../apis/AuthAPI';

const LoginPage = () => {
  const [id, setID] = useState('');
  const [pw, setPW] = useState('');

  const loginReq = () => {
    login(id, pw)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.wrapper}>
      <input type="text" value={id} onChange={(e) => setID(e.target.value)} />
      <input
        type="password"
        value={pw}
        onChange={(e) => setPW(e.target.value)}
      />
      <button type="submit" onClick={loginReq}>
        로그인
      </button>
    </div>
  );
};

export default LoginPage;
