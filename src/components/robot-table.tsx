import { Box, Grid, Paper, styled } from '@mui/material';
import Robot from './robot';
import { useState } from 'react';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    height: 90,
    width:90, 
}));

const RobotTable = () => {

    const rows = [0, 1, 2, 3, 4];
    const columns = [0, 1, 2, 3, 4];

    const [robotVerticalPosition, setRobotVerticalPosition] = useState(0);
    const [robotHorizontalPosition, setRobotHorizontalPosition] = useState(1);


    return (
    <Box>
        <Grid container id="table">
        {columns.map((column) => (
          <Grid key={column} item >
                {rows.map((row) => (
            <Grid key={row} item  style={{ border: '1px solid #F7F7F7' }} id="cell">
                 <Item>{robotVerticalPosition === column && robotHorizontalPosition === row ? <Robot/> : ''}</Item>
            </Grid>
            ))}
          </Grid>
          ))}
        </Grid>
    </Box> 

    )
};


export default RobotTable;