import SmartToyTwoToneIcon from '@mui/icons-material/SmartToyTwoTone';
import React from 'react';

interface RobotProps {
    direction: string;
};

const Robot = ({direction}: RobotProps) => {
    return (
        <SmartToyTwoToneIcon id="robot" className={direction? direction: "NORTH"} data-testid="robot-component"/>
    )
};

export default Robot;