import React from 'react';

import { PositionValues } from '../App';
import { degreesToDirection } from '../utils/directions-to-degrees';

export const readyMessage = () => {
  return <p className="text-centre">Ready!</p>;
};

export const defaultMessage = () => {
  return <p className="text-centre">Robot Simulator</p>;
};

export const limitExceededMessage = () => {
  return <p className="text-centre warning-message">Limit Exceeded</p>;
};

export const positionMessage = (robotPosition: PositionValues) => {
  return (
    <p className="text-centre">
      {robotPosition.xCoordinate}, {robotPosition.yCoordinate},{' '}
      {degreesToDirection(robotPosition.direction).toUpperCase()}{' '}
    </p>
  );
};
