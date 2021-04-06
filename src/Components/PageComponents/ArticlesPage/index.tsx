import { Particle } from 'assets';
import PageHeader from 'components/Common/PageHeader';
import styles from './ArticlesPage.module.scss';

const ArticlesPage = () => {
  return (
    <>
      <PageHeader icon={<Particle />} content="Articles" />
    </>
  );
};

export default ArticlesPage;
