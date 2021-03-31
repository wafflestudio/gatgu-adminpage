import './Page.scss';

const Page = ({ icon, content }) => {
  return (
    <div className="page-wrapper">
      {icon}
      <h1>{content}</h1>
    </div>
  );
};

export default Page;
