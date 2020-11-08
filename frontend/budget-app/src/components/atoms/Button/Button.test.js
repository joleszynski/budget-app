import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from 'components/atoms/Button/Button';

describe('Is the button rendered', () => {
  it('Render Button', () => {
    const { getByText } = render(<Button>Submit</Button>);
    getByText('Submit');
  });
});
