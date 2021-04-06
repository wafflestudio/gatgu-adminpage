import styles from './PageAbstract.module.scss';

interface Props {
  list: Array<{
    content: string | number;
    title: string;
  }>;
}

const PageAbstract = ({ list }: Props) => {
  return (
    <div className={styles.wrapper}>
      {list.map((item, i) => (
        <div key={i} className={styles.elemWrapper}>
          <h1>{item.content}</h1>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default PageAbstract;
