import { render } from '@testing-library/react';

import {
  positionMessage,
} from '../../src/components/status-messages';

import '@testing-library/jest-dom';

describe('Message Components', () => {
  test('renders Position message correctly', () => {
    const mockRobotPosition = {
      xCoordinate: 2,
      yCoordinate: 3,
      direction: 90,
    };
    const { getByText } = render(positionMessage(mockRobotPosition));
    const messageElement = getByText('2, 3, EAST'); // Assuming EAST for 90 degrees
    expect(messageElement).toBeInTheDocument();
  });
});
