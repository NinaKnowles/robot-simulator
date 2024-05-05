import { Box, Grid, Paper, styled } from '@mui/material';

import { PositionValues } from '../App';

import Robot from './robot';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    height: 90,
    width:90, 
}));

const RobotTable = ({
    // direction,
    xCoordinate,
    yCoordinate,
  }: PositionValues) => {

    const rows = [0, 1, 2, 3, 4];
    const columns = [0, 1, 2, 3, 4];

    return (
    <Box>
        <Grid container id="table">
        {columns.map((column) => (
          <Grid key={column} item >
                {rows.map((row) => (
            <Grid key={row} item  style={{ border: '1px solid #F7F7F7' }} id="cell">
                 <Item>{yCoordinate === row  && xCoordinate === column ? <Robot/> : ''}</Item>
            </Grid>
            ))}
          </Grid>
          ))}
        </Grid>
    </Box> 

    )
};


export default RobotTable;