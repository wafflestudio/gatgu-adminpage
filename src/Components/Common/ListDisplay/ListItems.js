import { UserItem } from './ListItem';

const ListItems = ({ itemList, type }) => {
  return (
    <div>
      {itemList.map((item, i) => (
        <div key={i}>{type === 'user' ? <UserItem item={item} /> : null}</div>
      ))}
    </div>
  );
};

export default ListItems;
