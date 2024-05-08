import { useState } from 'react';

import { Box, Container, ThemeProvider } from '@mui/material';

import RobotCommands from './components/robot-commands';
import RobotTable from './components/robot-table';
import StartingPositionInput from './components/starting-position-input';
import {
  defaultMessage,
  limitExceededMessage,
  positionMessage,
  readyMessage,
} from './components/status-messages';
import customButtonTheme from './styles/styles';
import { degreesToDirection } from './utils/directions-to-degrees';

import './App.css';

export interface PositionValues {
  xCoordinate: number;
  yCoordinate: number;
  direction: number;
}

function App() {
  const [robotPosition, setRobotPosition] = useState<PositionValues>({
    xCoordinate: 0,
    yCoordinate: 0,
    direction: 0,
  });

  const [arrowDirection, setArrowDirection] = useState(0);

  const [statusMessage, setStatusMessage] = useState(defaultMessage());

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleFormSubmit = (data: PositionValues) => {
    setRobotPosition(() => ({
      xCoordinate: Number(data.xCoordinate),
      yCoordinate: Number(data.yCoordinate),
      direction: data.direction,
    }));

    setIsButtonDisabled(false);

    setStatusMessage(readyMessage);
  };

  const moveRobot = () => {
    setStatusMessage(readyMessage);
    setRobotPosition((prevPosition) => {
      let newXCoordinate = prevPosition.xCoordinate;
      let newYCoordinate = prevPosition.yCoordinate;
      const newDirection = prevPosition.direction;

      switch (newDirection) {
        case 0:
          newYCoordinate += 1;
          break;
        case 180:
          newYCoordinate -= 1;
          break;
        case 90:
          newXCoordinate += 1;
          break;
        case 270:
          newXCoordinate -= 1;
          break;
        default:
          break;
      }

      if (newXCoordinate > 4) {
        setStatusMessage(limitExceededMessage);
        newXCoordinate -= 1;
      } else if (newXCoordinate < 0) {
        setStatusMessage(limitExceededMessage);
        newXCoordinate += 1;
      } else if (newYCoordinate < 0) {
        setStatusMessage(limitExceededMessage);
        newYCoordinate += 1;
      } else if (newYCoordinate > 4) {
        setStatusMessage(limitExceededMessage);
        newYCoordinate -= 1;
      }

      return {
        xCoordinate: newXCoordinate,
        yCoordinate: newYCoordinate,
        direction: newDirection,
      };
    });
  };

  const reportPosition = () => {
    setStatusMessage(positionMessage(robotPosition));
  };

  const rotateLeft = () => {
    setRobotPosition((prevPosition) => {
      let newDirection = prevPosition.direction;

      setStatusMessage(readyMessage);

      newDirection = (newDirection + 270) % 360;
      setArrowDirection(newDirection);
      return {
        ...prevPosition,
        direction: newDirection,
      };
    });
  };

  const rotateRight = () => {
    setRobotPosition((prevPosition) => {
      let newDirection = prevPosition.direction;

      setStatusMessage(readyMessage);

      newDirection = (newDirection + 90) % 360;
      setArrowDirection(newDirection);
      return {
        ...prevPosition,
        direction: newDirection,
      };
    });
  };

  return (
    <>
      <ThemeProvider theme={customButtonTheme}>
        <Container>
          <Box className="container flex-column-center">
            <StartingPositionInput onSubmit={handleFormSubmit} />
            <RobotCommands
              moveRobot={moveRobot}
              rotateLeft={rotateLeft}
              rotateRight={rotateRight}
              reportPosition={reportPosition}
              isButtonDisabled={isButtonDisabled}
              direction={degreesToDirection(arrowDirection)}
              statusMessage={statusMessage}
            />
            <RobotTable
              xCoordinate={robotPosition.xCoordinate}
              yCoordinate={robotPosition.yCoordinate}
              direction={robotPosition.direction}
            />
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
