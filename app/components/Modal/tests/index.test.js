import React from 'react';
import { render } from 'react-testing-library';

import Modal from '../index';

describe('<Modal />', () => {
  it('should render a Modal', () => {
    const onClose = jest.fn();
    const { container } = render(
      <Modal open onClose={onClose}>
        <div>Edit Modal</div>
      </Modal>,
    );
    expect(container.getElementsByClassName('Modal')).toBeTruthy();
  });
});
