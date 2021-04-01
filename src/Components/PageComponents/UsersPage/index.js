import { Puser } from 'assets';
import ListDisplay from 'components/Common/ListDisplay';
import PageHeader from 'components/Common/PageHeader';
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
