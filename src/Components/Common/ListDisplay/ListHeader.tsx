import Input from '../Input';
import styles from './ListHeader.module.scss';

interface Props {
  searchKey: string;
  searchKeyOnChange: any;
}

const ListHeader = ({ searchKey, searchKeyOnChange }: Props) => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.inputWrapper}>
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
