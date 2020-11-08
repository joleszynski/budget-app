import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Heading from 'components/atoms/MainHeading/MainHeading';

describe('Is the heading rendered', () => {
  it('Render Heading', () => {
    const { getByText } = render(<Heading>Heading</Heading>);
    getByText('Heading');
  });
});
