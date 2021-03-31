import { Puser } from 'Assets';
import ListDisplay from 'Components/Common/ListDisplay';
import PageHeader from 'Components/Common/PageHeader';
import './UsersPage.scss';

const UsersPage = () => {
  return (
    <>
      <PageHeader icon={<Puser />} content="Users" />
      <ListDisplay />
    </>
  );
};

export default UsersPage;
