import { useHistory } from 'react-router';
import './Page.scss';

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
      <button className="page-wrapper" onClick={goToPage}>
        {icon}
        <h1>{content}</h1>
      </button>
      <hr className="page-line" />
    </>
  );
};

export default Page;
