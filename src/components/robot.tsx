import SmartToyTwoToneIcon from '@mui/icons-material/SmartToyTwoTone';

interface RobotProps {
    direction: string;
};

const Robot = ({direction}: RobotProps) => {
    return (
        <SmartToyTwoToneIcon id="robot" className={direction? direction: "NORTH"}/>
    )
};

export default Robot;