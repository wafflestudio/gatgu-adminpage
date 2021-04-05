import requester from './BaseInstance';

export const getAll = () => {
  return requester.get('url이 뭘까');
};

export const getUserById = (id) => {
  // return requester.get('얜 또 뭘까');
  return new Promise((resolve) => {
    const wait = async () => setTimeout(1000);
    wait().then(() => {
      resolve('asdf');
    });
  });
};
