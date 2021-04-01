import requester from './BaseInstance';

export const login = (id, pw) => {
  console.log(id);
  console.log(pw);
  return requester.post('login/?next=/admin/', { username: id, password: pw });
};

export const logout = () => {};
