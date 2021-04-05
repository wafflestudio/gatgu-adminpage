import './PageAbstract.scss';

interface Props {
  list: Array<{
    content: string | number;
    title: string;
  }>;
}

const PageAbstract = ({ list }: Props) => {
  return (
    <div className="pageAbstract-wrapper">
      {list.map((item, i) => (
        <div key={i} className="pageAbstractElement-wrapper">
          <h1>{item.content}</h1>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default PageAbstract;
