
import { useState } from 'react';

import { Box, Container } from '@mui/material'

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
    setRobotPosition({ 
      xCoordinate: Number(data.xCoordinate), 
      yCoordinate: Number(data.yCoordinate),
      direction: data.direction,
    });

    setUserInputOptions(
      <h1>hello</h1>
    )
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

export default App
