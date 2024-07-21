import React from 'react';
import AppFunctional from "./AppFunctional"
import { render } from '@testing-library/react';

test('AppFunctional renders without crashing', () => {
  render(<AppFunctional />);
});
