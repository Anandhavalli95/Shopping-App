import React from 'react';
import { render } from 'react-testing-library';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';

import { PrimarySearchAppBar } from '../index';

describe('<App Bar />', () => {
  it('should render a App Bar', () => {
    const { container, queryByPlaceholderText } = render(
      <PrimarySearchAppBar />,
    );
    expect(container.getElementsByTagName(AppBar)).not.toBeNull();
    expect(container.getElementsByTagName(MenuIcon)).not.toBeNull();
    expect(queryByPlaceholderText('Search…')).not.toBeNull();
  });
});
