import { Puser } from 'Assets';
import PageHeader from 'Components/PageHeader';
import './UsersPage.scss';

const UsersPage = () => {
  return (
    <>
      <PageHeader icon={<Puser />} content="Users" />
    </>
  );
};

export default UsersPage;
