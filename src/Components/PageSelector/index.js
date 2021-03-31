import Page from './Page';
import './PageSelector.scss';
import { ReactComponent as Puser } from 'Assets/pUser.svg';
import { ReactComponent as Particle } from 'Assets/pArticle.svg';
import { ReactComponent as Preport } from 'Assets/pReport.svg';

const PageSelector = () => {
  return (
    <div className="pageselector-wrapper">
      <Page icon={<Puser />} content="Users" />
      <Page icon={<Particle />} content="Articles" />
      <Page icon={<Preport />} content="Reports" />
    </div>
  );
};

export default PageSelector;
