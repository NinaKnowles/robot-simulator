import React from "react";

import { render, screen } from '@testing-library/react';

import RobotTable from "../../src/components/robot-table";

it('renders the correct number of rows and columns', () => {
    render(
        <RobotTable
            direction={0}
            xCoordinate={0}
            yCoordinate={0}
        />
    );
    // Assuming you have set test ids for your cells
    const cells = screen.getAllByTestId(/^cell:/);
    expect(cells.length).toEqual(25);
});


it('renders the Robot component in the selected cell', () => {
    const selectedXCoordinate = 2;
    const selectedYCoordinate = 3;

    render(
        <RobotTable
            direction={0}
            xCoordinate={selectedXCoordinate}
            yCoordinate={selectedYCoordinate}
        />
    );


    const cell = screen.getByTestId(`cell:(${selectedXCoordinate},${selectedYCoordinate})`);

    console.log(cell.outerHTML);
    expect(cell.querySelector('[data-testid="robot-component"]')).toBeInTheDocument();
});