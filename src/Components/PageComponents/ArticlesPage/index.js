import { Particle } from 'Assets';
import PageHeader from 'Components/Common/PageHeader';
import './ArticlesPage.scss';

const ArticlesPage = () => {
  return (
    <>
      <PageHeader icon={<Particle />} content="Articles" />
    </>
  );
};

export default ArticlesPage;
