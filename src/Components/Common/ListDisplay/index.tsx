import { useState } from 'react';
import './ListDisplay.scss';
import ListHeader from './ListHeader';
import ListItems from './ListItems';

// Usage
//  type 빼고는 다 정해져 있음
//  새로운 타입을 추가하려면 ListItem.js 를 수정해야 합니다

interface Props {
  list: Array<any>;
  fetchItems: (key: string) => void;
  type: string;
}

const ListDisplay = ({ list, fetchItems, type }: Props) => {
  const [searchKey, setSearchKey] = useState('');

  const searchKeyOnChange = (e: any) => {
    setSearchKey(e.target.value);
    fetchItems(e.target.value);
  };

  return (
    <div className="list-display-wrapper">
      <ListHeader searchKey={searchKey} searchKeyOnChange={searchKeyOnChange} />
      <ListItems itemList={list} fetchItems={fetchItems} type={type} />
    </div>
  );
};

export default ListDisplay;
