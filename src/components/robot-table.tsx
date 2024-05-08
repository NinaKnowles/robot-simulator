import { Box, Grid, Paper, styled } from '@mui/material';

import { PositionValues } from '../App';
import { degreesToDirection } from '../utils/directions-to-degrees';

import Robot from './robot';
import React from 'react';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    height: 90,
    width:90, 
}));


const RobotTable = ({
    direction,
    xCoordinate,
    yCoordinate,
  }: PositionValues) => {

    const rows = [4,3,2,1,0];
    const columns = [0, 1, 2, 3, 4];

    return (
    <Box>
        <Grid container id="table">
        {columns.map((column) => (
          <Grid key={column} item >
                {rows.map((row) => (
            <Grid key={row} item  style={{ border: '1px solid #F7F7F7' }}  >
                 <Item className="cell flex-row-center flex-column-center" data-testid={`cell:(${column},${row})`}>{yCoordinate === row  && xCoordinate === column ? <Robot direction={degreesToDirection(direction)}/> : ''}</Item>
            </Grid>
            ))}
          </Grid>
          ))}
        </Grid>
    </Box> 
    )
};


export default RobotTable;