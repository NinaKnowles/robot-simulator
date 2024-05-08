import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import RobotCommands from '../../src/components/robot-commands';


describe('RobotCommands component', () => {
  it('renders with correct buttons and direction', () => {
    const moveRobotMock = jest.fn();
    const rotateLeftMock = jest.fn();
    const rotateRightMock = jest.fn();
    const reportPositionMock = jest.fn();

    render(
      <RobotCommands
        moveRobot={moveRobotMock}
        rotateLeft={rotateLeftMock}
        rotateRight={rotateRightMock}
        reportPosition={reportPositionMock}
        isButtonDisabled={false}
        direction="NORTH"
      />
    );

    expect(screen.getByText('MOVE')).toBeInTheDocument();
    expect(screen.getByText('LEFT')).toBeInTheDocument();
    expect(screen.getByText('RIGHT')).toBeInTheDocument();
    expect(screen.getByText('REPORT')).toBeInTheDocument();
    expect(screen.getByText('Rotate Direction:')).toBeInTheDocument();
    expect(screen.getByTestId('straight-icon')).toBeInTheDocument();
  });

  it('calls correct functions when buttons are clicked', () => {
    const moveRobotMock = jest.fn();
    const rotateLeftMock = jest.fn();
    const rotateRightMock = jest.fn();
    const reportPositionMock = jest.fn();

    render(
      <RobotCommands
        moveRobot={moveRobotMock}
        rotateLeft={rotateLeftMock}
        rotateRight={rotateRightMock}
        reportPosition={reportPositionMock}
        isButtonDisabled={false}
        direction="NORTH"
      />
    );

    fireEvent.click(screen.getByText('MOVE'));
    fireEvent.click(screen.getByText('LEFT'));
    fireEvent.click(screen.getByText('RIGHT'));
    fireEvent.click(screen.getByText('REPORT'));

    expect(moveRobotMock).toHaveBeenCalledTimes(1);
    expect(rotateLeftMock).toHaveBeenCalledTimes(1);
    expect(rotateRightMock).toHaveBeenCalledTimes(1);
    expect(reportPositionMock).toHaveBeenCalledTimes(1);
  });

  it('disables buttons when isButtonDisabled is true', () => {
    render(
      <RobotCommands
        moveRobot={() => {}}
        rotateLeft={() => {}}
        rotateRight={() => {}}
        reportPosition={() => {}}
        isButtonDisabled={true}
        direction="NORTH"
      />
    );

    expect(screen.getByText('MOVE')).toBeDisabled();
    expect(screen.getByText('LEFT')).toBeDisabled();
    expect(screen.getByText('RIGHT')).toBeDisabled();
    expect(screen.getByText('REPORT')).toBeDisabled();
  });

});