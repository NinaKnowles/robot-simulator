
import { useState } from 'react';

import { Box, Container } from '@mui/material'

import RobotCommands from './components/robot-commands'
import RobotTable from './components/robot-table'
import StartingPositionInput from './components/starting-position-input';

import './App.css'

export interface PositionValues {
  xCoordinate: number;
  yCoordinate: number;
  direction: string;
}


function App() {

  const [robotPosition, setRobotPosition] = useState<PositionValues>({
    xCoordinate: 0,
    yCoordinate: 0,
    direction: 'NORTH',
  });

  const handleFormSubmit = (data: PositionValues) => {
    setRobotPosition(() => ({ 
      xCoordinate: Number(data.xCoordinate), 
      yCoordinate: Number(data.yCoordinate),
      direction: data.direction,
    }));

    setUserInputOptions(
      <RobotCommands
      moveRobot={() => moveRobot(data.direction)}
      robotPosition={robotPosition}
      rotateLeft={rotateLeft}
      rotateRight={rotateRight}
      reportPosition={console.log(rotateLeft)}
    />
    );
  };

  const moveRobot = (direction:string) => { 
    setRobotPosition((prevPosition) => {
    let newXCoordinate = prevPosition.xCoordinate;
    let newYCoordinate = prevPosition.yCoordinate;

    switch (direction) {
      case "NORTH":
        newYCoordinate -= 1;
        break;
      case "SOUTH":
        newYCoordinate += 1;
        break;
      case "EAST":
        newXCoordinate += 1;
        break;
      case "WEST":
        newXCoordinate -= 1;
        break;
      default:
        break;
    }
  
      return {
        xCoordinate: newXCoordinate,
        yCoordinate: newYCoordinate,
        direction: direction,
      };
    });
  };

  const [userInputOptions, setUserInputOptions ] = useState(() => (
    <StartingPositionInput onSubmit={handleFormSubmit} />
  ));

  return (
    <>
    <Container>
      <Box className="container flex-center">
        {userInputOptions}
        <Box>
          <RobotTable   
            xCoordinate={robotPosition.xCoordinate}
            yCoordinate={robotPosition.yCoordinate}
            direction = {robotPosition.direction} />  
        </Box>
      </Box>
    </Container>
    
    </>
  )
}

export default App;

function rotateLeft(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
  throw new Error('Function not implemented.');
}

function rotateRight(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
  throw new Error('Function not implemented.');
}

