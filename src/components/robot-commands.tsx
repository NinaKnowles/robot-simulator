import React from 'react';

import StraightIcon from '@mui/icons-material/Straight';
import { Box, Button} from "@mui/material";

interface RobotCommandProps {
    moveRobot: () => void;
    rotateRight: () => void;
    rotateLeft: () => void;
    reportPosition: () => void;
    isButtonDisabled: boolean;
    direction:string;
    statusMessage: React.JSX.Element;
}

const RobotCommands = ({moveRobot, rotateLeft, rotateRight, reportPosition, isButtonDisabled, direction, statusMessage }:RobotCommandProps) => {
    return (
        <Box  className="flex-column flex-end">
            <Button onClick={moveRobot} variant="contained" disabled={isButtonDisabled} >MOVE</Button>
            <Box className="flex-row-center">
                <StraightIcon  className={direction? direction: "north"} data-testid="straight-icon" />
            </Box>
            <h3 id="rotate-label">Rotate Direction:</h3>
            <Box className="flex-row">
            <Button onClick={rotateLeft}   variant="contained" disabled={isButtonDisabled} >LEFT</Button>
            <Button onClick={rotateRight}    variant="contained" disabled={isButtonDisabled} className="rotate-button">RIGHT</Button>
            </Box>
            <Button onClick={reportPosition}  variant="contained" disabled={isButtonDisabled}  className="special-button">REPORT</Button>
            {statusMessage}
        </Box>
       
    )
};

export default RobotCommands;