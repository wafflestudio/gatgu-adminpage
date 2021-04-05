import { useState } from 'react';
import './ListDisplay.scss';
import ListHeader from './ListHeader';
import ListItems from './ListItems';
import debounce from 'lodash/debounce';

const fetchItems = debounce((key) => {
  // TODO: @woohm402
  //    fetch items by key
  //    when server API is done
  console.log(`${key}로 검색`);
}, 1000);

const ListDisplay = () => {
  const [searchKey, setSearchKey] = useState('');

  const searchKeyOnChange = (e) => {
    setSearchKey(e.target.value);
    fetchItems(e.target.value);
  };

  return (
    <div className="list-display-wrapper">
      <ListHeader searchKey={searchKey} searchKeyOnChange={searchKeyOnChange} />
      <ListItems />
    </div>
  );
};

export default ListDisplay;
