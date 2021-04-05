import requester from './BaseInstance';

export const login = (id: string, pw: string) => {
  console.log(id);
  console.log(pw);
  return requester.post('login/?next=/admin/', { username: id, password: pw });
};

export const logout = () => {
  // url 이거 아닐거임
  return requester.post('logout', {});
};
