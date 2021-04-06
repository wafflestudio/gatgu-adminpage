import styles from './PageHeader.module.scss';

interface Props {
  icon: JSX.Element;
  content: string;
}

const PageHeader = ({ icon, content }: Props) => {
  return (
    <header className={styles.wrapper}>
      {icon}
      <h1>{content}</h1>
    </header>
  );
};

export default PageHeader;
