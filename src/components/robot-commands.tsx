import { Box} from "@mui/material";


interface RobotCommandProps {
    moveRobot: () => void;
    rotateRight: () => void;
    rotateLeft: () => void;
    reportPosition: () => void;
}
  

const RobotCommands = ({moveRobot, rotateLeft, rotateRight, reportPosition}:RobotCommandProps) => {
    return (
        <Box className="flex-column">
            <button onClick={moveRobot} className="button">MOVE</button>
            <Box className="flex-row">
            <button onClick={rotateLeft}className="button">LEFT</button>
             <button onClick={rotateRight} className="button">RIGHT</button>
            </Box>
            <button onClick={reportPosition} className="button">REPORT</button>
        </Box>
       
    )
};

export default RobotCommands;