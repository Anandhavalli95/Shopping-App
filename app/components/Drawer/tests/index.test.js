import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Drawer from '@material-ui/core/Drawer';

import TemporaryDrawer from '../index';

describe('<TemporaryDrawer />', () => {
  it('should render a Drawer', () => {
    const { container } = render(<TemporaryDrawer anchor="left" />);
    expect(container.getElementsByTagName(Drawer)).not.toBeNull();
  });
  it('should call the onFilter on click on filter option', () => {
    const onFilter = jest.fn();
    const { queryAllByRole } = render(
      <TemporaryDrawer
        anchor="left"
        onFilter={onFilter}
        setShowDrawer={() => {}}
      />,
    );
    fireEvent.click(queryAllByRole('button')[0]);
    expect(onFilter).toHaveBeenCalled();
  });
});
