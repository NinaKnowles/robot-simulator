
import { useState } from 'react';

import { Box, Container, ThemeProvider } from '@mui/material'

import RobotCommands from './components/robot-commands'
import RobotTable from './components/robot-table'
import StartingPositionInput from './components/starting-position-input';
import customButtonTheme from './styles/styles';
import { degreesToDirection } from './utils/directions-to-degrees';

import './App.css'

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

  const [isButtonDisabled, setIsButtonDisabled ] = useState((true));

  const handleFormSubmit = (data: PositionValues) => {
    setRobotPosition(() => ({ 
      xCoordinate: Number(data.xCoordinate), 
      yCoordinate: Number(data.yCoordinate),
      direction: data.direction,
    }));

    setIsButtonDisabled(false);

  };

  const moveRobot = () => { 
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

      if ( newXCoordinate > 4){
        console.log('Limit exceeded');
        newXCoordinate -= 1;
        console.log(newXCoordinate);
      } else if (newXCoordinate < 0) {
        console.log('Limit exceeded');
        newXCoordinate += 1;
      } else if (newYCoordinate < 0){
        console.log('Limit exceeded');
        newYCoordinate += 1;
      } else if (newYCoordinate > 4){
        console.log('Limit exceeded');
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
    console.log(robotPosition)
  };


  const rotateLeft = () => {
    setRobotPosition((prevPosition) => {
      let newDirection = prevPosition.direction;


      newDirection = (newDirection + 270) % 360;
      setArrowDirection(newDirection);
        return {
          ...prevPosition,
          direction: newDirection
        };
      });
  };

  const rotateRight = () => {
    setRobotPosition((prevPosition) => {
      let newDirection = prevPosition.direction;


      newDirection = (newDirection + 90) % 360;
      setArrowDirection(newDirection);
        return {
          ...prevPosition,
          direction: newDirection
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
    />
        <Box>
          <RobotTable   
            xCoordinate={robotPosition.xCoordinate}
            yCoordinate={robotPosition.yCoordinate}
            direction = {robotPosition.direction} />  
        </Box>
      </Box>
    </Container>

    </ThemeProvider>
    
    </>
  )
}

export default App;
