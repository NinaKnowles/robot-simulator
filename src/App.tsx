
import { Box, Container,FormControl, FormGroup, FormHelperText, Input, InputLabel, MenuItem, Select } from '@mui/material'

import RobotTable from './components/robot-table'

import './App.css'

function App() {

  function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <>
    <Container>
      <Box className="container flex-center">
        <form className="flex-column" onSubmit={handleSubmit}>
            <h1>Set the starting position</h1>
            <FormControl>
              <InputLabel>Direction</InputLabel>
              <Select
                // value={direction}
                label="Direction"
                // onChange={handleChange}
              >
                <MenuItem value={1}>NORTH</MenuItem>
                <MenuItem value={2}>EAST</MenuItem>
                <MenuItem value={3}>SOUTH</MenuItem>
                <MenuItem value={4}>WEST</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="input-position">X Coordinate</InputLabel>
              <Input className="input" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">Enter a value between 0-4 </FormHelperText>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="input-position">Y Coordinate</InputLabel>
              <Input className="input" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">Enter a value between 0-4 </FormHelperText>
            </FormControl>

            <button type="submit" className="button">Enter</button>
        </form >
        <Box>
          <RobotTable />  
        </Box>
      </Box>
    </Container>
    
    </>
  )
}

export default App
