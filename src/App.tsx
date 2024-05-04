
import { Box, Button, Container,FormControl } from '@mui/material'

import { FormHelperText, Input, InputLabel } from '../node_modules/@mui/material/index';

import RobotTable from './components/robot-table'

import './App.css'

function App() {

  return (
    <>
    <Container>
      <Box className="container">
        <Box>
          <h1>Input your command here!</h1>
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">never share your email.</FormHelperText>
          </FormControl>
          <Button variant="contained">Submit</Button>
        </Box>
        <RobotTable />
      </Box>
    </Container>
    
    </>
  )
}

export default App
