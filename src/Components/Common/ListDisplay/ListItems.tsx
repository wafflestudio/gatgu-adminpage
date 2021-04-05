import { UserItem } from './ListItem';

interface Props {
  itemList: Array<any>;
  fetchItems: (key: string) => void;
  type: string;
}

const ListItems = ({ itemList, fetchItems, type }: Props) => {
  return (
    <div>
      {itemList.map((item, i) => (
        <div key={i}>{type === 'user' ? <UserItem item={item} /> : null}</div>
      ))}
    </div>
  );
};

export default ListItems;
