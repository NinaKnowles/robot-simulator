import { render, screen } from '@testing-library/react';

import StartingPositionInput from '../../src/components/starting-position-input';

import '@testing-library/jest-dom';

describe('InputForm component', () => {
  it('renders form elements correctly', () => {
    const handleFormSubmit = jest.fn();

    render(<StartingPositionInput onSubmit={handleFormSubmit} />);

    expect(screen.getByText('Direction')).toBeInTheDocument();
    expect(screen.getByText('X Coordinate')).toBeInTheDocument();
    expect(screen.getByText('Y Coordinate')).toBeInTheDocument();
    expect(screen.getByText('Enter')).toBeInTheDocument();
  });

  /*   Test('submits form with valid input', async () => {
         const onSubmit = jest.fn();
         const { getByTestId, getByRole } = render(<StartingPositionInput onSubmit={onSubmit} />);
         const directionSelect = getByTestId('direction-select');
         const xCoordinateInput = getByTestId('x-coordinate-input');
         const yCoordinateInput = getByTestId('y-coordinate-input');
         const enterButton = getByRole('button', { name: /enter/i }); */

  /*     FireEvent.change(directionSelect, { target: { value: '90' } }); // Use target.value
         fireEvent.change(xCoordinateInput, { target: { value: '2' } }); // Use target.value
         fireEvent.change(yCoordinateInput, { target: { value: '3' } });
         fireEvent.click(enterButton); */

  /*     Await waitFor(() =>
             expect(onSubmit).toHaveBeenCalledWith({
             direction: 90,
             xCoordinate: 2,
             yCoordinate: 3,
             })
         );
       }); */

  /* Test('does not submit form with invalid input', async () => {
         const onSubmit = jest.fn();
         const { getByTestId, queryByText } = render(<StartingPositionInput onSubmit={onSubmit} />);
             const directionSelect = getByTestId('direction-select');
         const xCoordinateInput = getByTestId('x-coordinate-input');
         const yCoordinateInput = getByTestId('y-coordinate-input'); */

  /*     FireEvent.change(xCoordinateInput,  { value: '-1' } );
         fireEvent.change(yCoordinateInput,  { value: '5' } );
         fireEvent.click(screen.getByText('Enter')); */

  /*     Await waitFor(() =>
             expect(onSubmit).not.toHaveBeenCalled()
         ); */

  /*     Await waitFor(() =>
             expect(queryByText('Value must be between 0-4')).toBeInTheDocument()
         );
         // Ensure the form does not submit with invalid input4 */

  //     FireEvent.click(screen.getByText('Enter'));

  /*     Await waitFor(() =>
         expect(onSubmit).not.toHaveBeenCalled()
         ); */

  /*   });
     }); */

  /*   It('displays error messages for invalid inputs', async () => {
         // Arrange
         const onSubmit = jest.fn();
         const { screen.getByText, screen.getByText, queryByText } = render(<InputForm onSubmit={onSubmit} />);
         const directionSelect = screen.getByText('Direction');
         const xCoordinateInput = screen.getByText('X Coordinate');
         const yCoordinateInput = screen.getByText('Y Coordinate'); */

  /*     // Act
         fireEvent.change(directionSelect, { target: { value: '90' } });
         fireEvent.change(xCoordinateInput, { target: { value: '-1' } }); // Invalid value
         fireEvent.change(yCoordinateInput, { target: { value: '5' } }); // Invalid value
         fireEvent.click(screen.getByText('Enter')); */

  /*     // Assert
         expect(queryByText('Value must be between 0-4')).toBeInTheDocument();
         expect(onSubmit).not.toHaveBeenCalled(); // Ensure onSubmit is not called for invalid inputs
       }); */
});
