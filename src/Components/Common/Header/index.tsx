import './Header.scss';
import { HDRlogo, HDRuser } from 'assets';
import React from 'react';

const Header = () => {
  return (
    <div className="header-wrapper">
      <HDRlogo className="header-logo" />
      <HDRuser className="header-user" />
    </div>
  );
};

export default Header;
