import styles from './Header.module.scss';
import { HDRlogo, HDRuser } from 'assets';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <HDRlogo className={styles.logo} />
      <HDRuser className={styles.user} />
    </div>
  );
};

export default Header;
