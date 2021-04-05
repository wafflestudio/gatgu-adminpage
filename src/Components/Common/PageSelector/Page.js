import { useHistory } from 'react-router';
import './Page.scss';

const Page = ({ icon, content, link }) => {
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
