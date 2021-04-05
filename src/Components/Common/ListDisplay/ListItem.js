import './ListItem.scss';

export const UserItem = ({ item }) => {
  return (
    <div className="useritem-wrapper">
      <img src={item.picture} />
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
