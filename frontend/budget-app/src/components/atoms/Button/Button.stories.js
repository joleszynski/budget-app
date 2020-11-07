// Button.stories.js

import React from 'react';
import Button from 'components/atoms/Button/Button';

export default {
  title: 'TestButton',
  component: Button,
};

export const Primary = () => <Button />;
export const Secondary = () => <Button secondary />;
