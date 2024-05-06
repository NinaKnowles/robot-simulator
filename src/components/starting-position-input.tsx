import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { InputLabel, MenuItem, Select, TextField } from '@mui/material';

import { PositionValues } from '../App';

interface InputFormProps {
  onSubmit: (data: PositionValues) => void;
}

export interface ErrorValues {
  xCoordinate: string;
  yCoordinate: string;
} 


export default function InputForm({ onSubmit }: InputFormProps) {
  const [errors, setErrors] = useState<Partial<ErrorValues>>({});
  const { control, handleSubmit } = useForm<PositionValues>();

  const handleFormSubmit = (positionValues: PositionValues) => {
    const { xCoordinate, yCoordinate} = positionValues;

    if (xCoordinate < 0 || xCoordinate > 4) {
      setErrors({xCoordinate:'Value must be between 0-4'});
    } else if (yCoordinate < 0 || yCoordinate > 4){
      setErrors({yCoordinate:'Value must be between 0-4'});
    }
    else{
      setErrors({});
      onSubmit(positionValues); 
    }
  };

  return (
    <form className="flex-column" onSubmit={handleSubmit(handleFormSubmit)}>
      <h1>Set the starting position</h1>
      <Controller
        name="direction"
        control={control}
        defaultValue={0}
        render={({field}) => (
          <>
          <InputLabel>Direction</InputLabel>
          <Select
            required
            {...field}
          >
            <MenuItem value={0}>NORTH</MenuItem>
            <MenuItem value={90}>EAST</MenuItem>
            <MenuItem value={180}>SOUTH</MenuItem>
            <MenuItem value={270}>WEST</MenuItem>
          </Select>
          </>
        )}
      />
      <Controller
        name="xCoordinate"
        control={control}
        defaultValue={0}
        render={({ field }) => (
          <TextField
            {...field}
            label="X Coordinate"
            type="number"
            required
            error={!!errors.xCoordinate}
            helperText={errors.xCoordinate || 'Enter a value between 0-4'}
          />
        )}
      />
        <Controller
          name="yCoordinate"
          control={control}
          defaultValue={0}
          render={({ field }) => (
            <TextField
              {...field}
              label="Y Coordinate"
              type="number"
              required
              error={!!errors.yCoordinate}
              helperText={errors.yCoordinate || 'Enter a value between 0-4'}
            />
          )}
        />
      <button type="submit" className="button">Enter</button>
    </form>
  );
}
