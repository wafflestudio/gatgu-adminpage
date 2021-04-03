import { Puser } from 'assets';
import ListDisplay from 'components/Common/ListDisplay';
import PageAbstract from 'components/Common/PageAbstract';
import PageHeader from 'components/Common/PageHeader';
import './UsersPage.scss';

const UsersPage = () => {
  const dummyList = [
    { title: 'articles', content: '89' },
    { title: 'new articles today', content: '5' },
    { title: 'new articles in 7 days', content: '24' },
  ];
  return (
    <>
      <PageHeader icon={<Puser />} content="Users" />
      <section className="users-dashboard">
        <div className="users-page-abstract-wrapper">
          <PageAbstract list={dummyList} />
        </div>
      </section>
      <ListDisplay />
    </>
  );
};

export default UsersPage;
