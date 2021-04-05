import Input from '../Input';
import './ListHeader.scss';

const ListHeader = ({ searchKey, searchKeyOnChange }) => {
  return (
    <div className="list-header-wrapper">
      <header className="list-header">
        <div className="list-header-input-wrapper">
          <Input
            value={searchKey}
            onChange={searchKeyOnChange}
            placeholder="Search Users"
          />
        </div>
      </header>
    </div>
  );
};

export default ListHeader;
