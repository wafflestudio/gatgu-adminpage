import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'Store/auth/modules';
import './LoginPage.scss';

const LoginPage = () => {
  const [id, setID] = useState('');
  const [pw, setPW] = useState('');

  const dispatch = useDispatch();

  const loginReq = useCallback(() => {
    dispatch(login(id, pw));
  }, [dispatch, id, pw]);

  return (
    <div className="login-wrapper">
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
