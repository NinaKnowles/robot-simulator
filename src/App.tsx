
import { Box, Container } from '@mui/material'
import InputForm from './components/input-form'

import RobotTable from './components/robot-table'

import './App.css'
import { useState } from 'react';

export interface PositionValues {
  xCoordinate: number;
  yCoordinate: number;
  // direction: string;
}

function App() {

  const [robotPosition, setRobotPosition] = useState<PositionValues>({
    xCoordinate: 0,
    yCoordinate: 0,
    // direction: '',
  });

  const handleFormSubmit = (data: PositionValues) => {
    setRobotPosition({ 
      xCoordinate: Number(data.xCoordinate), 
      yCoordinate: Number(data.yCoordinate),
    });
  };

  return (
    <>
    <Container>
      <Box className="container flex-center">
        <InputForm onSubmit={handleFormSubmit}/>
        <Box>
          <RobotTable   
            xCoordinate={robotPosition.xCoordinate}
            yCoordinate={robotPosition.yCoordinate} />  
        </Box>
      </Box>
    </Container>
    
    </>
  )
}

export default App
