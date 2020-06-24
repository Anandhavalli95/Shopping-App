import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

function Header() {
  return (
    <div>
      <NavBar>
        Walmart
      </NavBar>
    </div>
  );
}

export default Header;
