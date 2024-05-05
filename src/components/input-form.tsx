import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { FormControl, TextField } from '@mui/material';

import { PositionValues } from '../App';

interface InputFormProps {
  onSubmit: (data: PositionValues) => void;
}

export interface ErrorValues {
  xCoordinate: string;
  yCoordinate: string;
  // direction: string;
} 


export default function InputForm({ onSubmit }: InputFormProps) {
  const [errors, setErrors] = useState<Partial<ErrorValues>>({});
  const { control, handleSubmit } = useForm<PositionValues>();

  const handleFormSubmit = (data: PositionValues) => {
    const { xCoordinate, yCoordinate } = data;

    if (xCoordinate < 0 || xCoordinate > 4) {
      setErrors({xCoordinate:'Value must be between 0-4'});
    } else if (yCoordinate < 0 || yCoordinate > 4){
      setErrors({yCoordinate:'Value must be between 0-4'});
    }
    else{
      setErrors({});
      onSubmit(data); 
    }
  };

  return (
    <form className="flex-column" onSubmit={handleSubmit(handleFormSubmit)}>
      <h1>Set the starting position</h1>
      {/* <FormControl>
        <InputLabel>Direction</InputLabel>
        <Select
          name="direction"
          label="Direction"
          required
          control={control}
          defaultValue=""
        >
          <MenuItem value="NORTH">NORTH</MenuItem>
          <MenuItem value="EAST">EAST</MenuItem>
          <MenuItem value="SOUTH">SOUTH</MenuItem>
          <MenuItem value="WEST">WEST</MenuItem>
        </Select>
      </FormControl> */}
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
      <FormControl>
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
      </FormControl>
      <button type="submit" className="button">Enter</button>
    </form>
  );
}
