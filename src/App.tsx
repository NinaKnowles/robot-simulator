
import { useState } from 'react';

import { Box, Container } from '@mui/material'

import RobotCommands from './components/robot-commands'
import RobotTable from './components/robot-table'
import StartingPositionInput from './components/starting-position-input';
import { directionToDegrees} from './utils/directions-to-degrees'

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

  const handleFormSubmit = (data: PositionValues) => {
    setRobotPosition(() => ({ 
      xCoordinate: Number(data.xCoordinate), 
      yCoordinate: Number(data.yCoordinate),
      direction: data.direction,
    }));

    setUserInputOptions(
      <RobotCommands
      moveRobot={() => moveRobot(data.direction)}
      // robotPosition={robotPosition}
      rotateLeft={rotateLeft}
      rotateRight={rotateRight}
      reportPosition={reportPosition}
    />
    );
  };

  const moveRobot = (direction:number) => { 
    setRobotPosition((prevPosition) => {
    let newXCoordinate = prevPosition.xCoordinate;
    let newYCoordinate = prevPosition.yCoordinate;

    switch (direction) {
      case 0:
        newYCoordinate -= 1;
        break;
      case 180:
        newYCoordinate += 1;
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
        direction,
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
      console.log(newDirection)
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
      console.log(newDirection)
        return {
          ...prevPosition,
          direction: newDirection
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
