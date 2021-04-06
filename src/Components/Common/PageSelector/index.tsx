import Page from './Page';
import styles from './PageSelector.module.scss';
import { Puser, Particle, Preport } from 'assets';
import { routes } from 'libraries';

const PageSelector = () => {
  return (
    <div className={styles.wrapper}>
      <Page icon={<Puser />} content="Users" link={routes.Users.path} />
      <Page
        icon={<Particle />}
        content="Articles"
        link={routes.Articles.path}
      />
      <Page icon={<Preport />} content="Reports" link={routes.Reports.path} />
    </div>
  );
};

export default PageSelector;
