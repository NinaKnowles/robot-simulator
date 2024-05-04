
import { Box, Container,FormControl, FormHelperText, Input, InputLabel } from '@mui/material'

import RobotTable from './components/robot-table'

import './App.css'

function App() {

  return (
    <>
    <Container>
      <Box className="container flex-center">
        <Box>
          <h1>Set the starting position</h1>
          <FormControl>
            <InputLabel htmlFor="input-position">Starting position</InputLabel>
            <Input className="input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">Enter your coordinates in the following format: (X,Y) F </FormHelperText>
          </FormControl>
          <button className="button">Enter</button>
        </Box>
        <RobotTable />
      </Box>
    </Container>
    
    </>
  )
}

export default App
