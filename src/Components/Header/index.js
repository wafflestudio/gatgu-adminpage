import './Header.scss';
import { ReactComponent as HDRlogo } from 'Assets/hdrLogo.svg';
import { ReactComponent as HDRuser } from 'Assets/hdrUser.svg';

const Header = () => {
  return (
    <div className="header-wrapper">
      <HDRlogo className="header-logo" />
      <HDRuser className="header-user" />
    </div>
  );
};

export default Header;
