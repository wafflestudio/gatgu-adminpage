import { useHistory } from 'react-router';
import styles from './Page.module.scss';

interface Props {
  icon: JSX.Element;
  content: string;
  link: string;
}

const Page = ({ icon, content, link }: Props) => {
  const history = useHistory();

  const goToPage = () => {
    history.push(link);
  };

  return (
    <>
      <button className={styles.wrapper} onClick={goToPage}>
        {icon}
        <h1>{content}</h1>
      </button>
      <hr className={styles.line} />
    </>
  );
};

export default Page;
