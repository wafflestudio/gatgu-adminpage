import requester from './BaseInstance';

export const getAll = () => {
  return requester.get('url이 뭘까');
};

export const getUserById = (id: string) => {
  // return requester.get('얜 또 뭘까');
};
