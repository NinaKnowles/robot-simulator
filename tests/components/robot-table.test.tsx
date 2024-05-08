import React from 'react';

import { render, screen } from '@testing-library/react';

import RobotTable from '../../src/components/robot-table';

import '@testing-library/jest-dom';

it('renders the correct number of rows and columns', () => {
  render(<RobotTable direction={0} xCoordinate={0} yCoordinate={0} />);

  const cells = screen.getAllByTestId(/^cell:/);
  expect(cells.length).toEqual(25);
});

it('renders the Robot component in the selected cell', () => {
  const selectedXCoordinate = 0;
  const selectedYCoordinate = 0;

  render(
    <RobotTable
      direction={0}
      xCoordinate={selectedXCoordinate}
      yCoordinate={selectedYCoordinate}
    />
  );

  const cell = screen.getByTestId(
    `cell:(${selectedXCoordinate},${selectedYCoordinate})`
  );

  expect(
    cell.querySelector('[data-testid="robot-component"]')
  ).toBeInTheDocument();
});

it('does not render the Robot component outside the table boundaries and with negative coordinates', () => {
  const edgeCases = [
    { x: -1, y: 0 },
    { x: 5, y: 0 },
    { x: 0, y: -1 },
    { x: 0, y: 5 },
  ];

  edgeCases.forEach(({ x, y }) => {
    render(<RobotTable direction={0} xCoordinate={x} yCoordinate={y} />);

    const cell = screen.queryByTestId(`cell:(${x},${y})`);
    expect(cell).toBeNull();
  });
});

it('renders the Robot component at the maximum boundary of the table', () => {
  const maxCoordinate = 4;

  render(
    <RobotTable
      direction={0}
      xCoordinate={maxCoordinate}
      yCoordinate={maxCoordinate}
    />
  );

  const cell = screen.getByTestId(`cell:(${maxCoordinate},${maxCoordinate})`);
  expect(cell).toBeInTheDocument();
});
