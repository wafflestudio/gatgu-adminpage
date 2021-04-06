import { Puser } from 'assets';
import ListDisplay from 'components/Common/ListDisplay';
import PageAbstract from 'components/Common/PageAbstract';
import PageHeader from 'components/Common/PageHeader';
import styles from './UsersPage.module.scss';
import debounce from 'lodash/debounce';

const fetchItems = debounce((key) => {
  // TODO: @woohm402
  //    fetch items by key & fix to pagination
  //    when server API is done
  console.log(`${key}로 검색`);
}, 1000);

const UsersPage = () => {
  const dummyList = [
    { title: 'articles', content: '89' },
    { title: 'new articles\ntoday', content: '5' },
    { title: 'new articles\nin 7 days', content: '24' },
  ];
  const dummyUsers = [
    {
      id: 0,
      picture: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
      username: 'dummy1',
      participated_count: 3,
      hosted_count: 4,
    },
    {
      id: 0,
      picture: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
      username: 'dummy2',
      participated_count: 3,
      hosted_count: 4,
    },
    {
      id: 0,
      picture: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
      username: 'dummy3',
      participated_count: 3,
      hosted_count: 4,
    },
    {
      id: 0,
      picture: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
      username: 'dummy4',
      participated_count: 3,
      hosted_count: 4,
    },
    {
      id: 0,
      picture: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
      username: 'dummy5',
      participated_count: 3,
      hosted_count: 4,
    },
    {
      id: 0,
      picture: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
      username: 'dummy6',
      participated_count: 2,
      hosted_count: 5,
    },
    {
      id: 0,
      picture: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
      username: 'dummy7',
      participated_count: 1,
      hosted_count: 40,
    },
    {
      id: 0,
      picture: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
      username: 'dummy8',
      participated_count: 3000,
      hosted_count: 400001234,
    },
    {
      id: 0,
      picture: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
      username: 'dummy9',
      participated_count: 13,
      hosted_count: 4,
    },
  ];
  return (
    <>
      <PageHeader icon={<Puser />} content="Users" />
      <section className={styles.dashboard}>
        <div className={styles.abstractWrapper}>
          <PageAbstract list={dummyList} />
        </div>
      </section>
      <ListDisplay list={dummyUsers} fetchItems={fetchItems} type="user" />
    </>
  );
};

export default UsersPage;
