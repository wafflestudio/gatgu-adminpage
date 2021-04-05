import './ListItem.scss';

interface UserItem {
  picture: string;
  username: string;
  participated_count: number;
  hosted_count: number;
}

export const UserItem = ({ item }: { item: UserItem }) => {
  return (
    <div className="useritem-wrapper">
      <img src={item.picture} alt="" />
      <p>{item.username}</p>
      <div>
        <p>모집내역</p>
        <p>{item.participated_count}</p>
      </div>
      <div>
        <p>참여내역</p>
        <p>{item.hosted_count}</p>
      </div>
    </div>
  );
};
