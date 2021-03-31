import { Puser } from 'Assets';
import PageHeader from 'Components/Common/PageHeader';
import './UsersPage.scss';

const UsersPage = () => {
  return (
    <>
      <PageHeader icon={<Puser />} content="Users" />
    </>
  );
};

export default UsersPage;
