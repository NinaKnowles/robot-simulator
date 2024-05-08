import React from "react";

import { render, screen } from '@testing-library/react';

import Robot from "../../src/components/robot";

describe('Robot component', () => {
  it('renders with the correct direction icon', () => {

    const direction = 'EAST'; 

    render(<Robot direction={direction} />);

    const robotIcon = screen.getByTestId('robot-component');
    expect(robotIcon).toBeInTheDocument();
    expect(robotIcon).toHaveClass('EAST'); 
  });
});
