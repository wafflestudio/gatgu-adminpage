import Input from '../Input';
import './ListHeader.scss';

interface Props {
  searchKey: string;
  searchKeyOnChange: any;
}

const ListHeader = ({ searchKey, searchKeyOnChange }: Props) => {
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
