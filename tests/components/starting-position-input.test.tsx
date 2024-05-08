import React from "react";

import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import StartingPositionInput  from "../../src/components/starting-position-input";

import '@testing-library/jest-dom';

describe('InputForm component', () => {
  it('renders form elements correctly', () => {
    const handleFormSubmit = jest.fn();

    render(<StartingPositionInput onSubmit={handleFormSubmit} />)


    expect(screen.getByText('Direction')).toBeInTheDocument();
    expect(screen.getByText('X Coordinate')).toBeInTheDocument();
    expect(screen.getByText('Y Coordinate')).toBeInTheDocument();
    expect(screen.getByText('Enter')).toBeInTheDocument();
  });

//   it('handles form submission correctly', async () => {

//     const handleFormSubmit = jest.fn();
//     // Arrange
//     const onSubmit = jest.fn();
//     render(<StartingPositionInput onSubmit={handleFormSubmit} />)

//     const directionSelect = screen.getByText('Direction');
//     const xCoordinateInput = screen.getByText('X Coordinate');
//     const yCoordinateInput = screen.getByText('Y Coordinate');

//     // Act
//     fireEvent.change(directionSelect, { target: { value: '90' } });
//     fireEvent.change(xCoordinateInput, { target: { value: '2' } });
//     fireEvent.change(yCoordinateInput, { target: { value: '3' } });
//     fireEvent.click(screen.getByText('Enter'));

//     // Assert
//     await waitFor(() => expect(onSubmit).toHaveBeenCalledWith({
//       direction: '90',
//       xCoordinate: '2',
//       yCoordinate: '3',
//     }));
//   });

//   it('displays error messages for invalid inputs', async () => {
//     // Arrange
//     const onSubmit = jest.fn();
//     const { screen.getByText, screen.getByText, queryByText } = render(<InputForm onSubmit={onSubmit} />);
//     const directionSelect = screen.getByText('Direction');
//     const xCoordinateInput = screen.getByText('X Coordinate');
//     const yCoordinateInput = screen.getByText('Y Coordinate');

//     // Act
//     fireEvent.change(directionSelect, { target: { value: '90' } });
//     fireEvent.change(xCoordinateInput, { target: { value: '-1' } }); // Invalid value
//     fireEvent.change(yCoordinateInput, { target: { value: '5' } }); // Invalid value
//     fireEvent.click(screen.getByText('Enter'));

//     // Assert
//     expect(queryByText('Value must be between 0-4')).toBeInTheDocument();
//     expect(onSubmit).not.toHaveBeenCalled(); // Ensure onSubmit is not called for invalid inputs
//   });
});
