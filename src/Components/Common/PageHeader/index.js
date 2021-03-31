import './PageHeader.scss';

const PageHeader = ({ icon, content }) => {
  return (
    <header className="userspage-wrapper">
      {icon}
      <h1>{content}</h1>
    </header>
  );
};

export default PageHeader;
