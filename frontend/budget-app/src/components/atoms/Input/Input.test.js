import React from 'react';
import { render, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import Input from 'components/atoms/Input/Input';

const setup = () => {
  const utils = render(<Input aria-label="email-input" />);
  const input = utils.getByLabelText('email-input');
  return {
    input,
    ...utils,
  };
};

describe('Testin Input Components', () => {
  it('It should be email field', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: 'black@johny.com' } });
    expect(input.value).toBe('black@johny.com');
  });
});
