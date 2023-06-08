import { useField } from 'formik';
import React from 'react';
import { TextField } from '@mui/material';
import TextError from './TextError';

const Input = ({ label, externalLabel, placeholder, ...props }) => {
  const [field, meta, helpers] = useField({ ...props });
  return (
    <div className='w-full'>
      {/* {!label && (
        <label className=' text-sm block text-[#141414]'>{externalLabel}</label>
      )} */}
      <TextField
        {...field}
        {...props}
        // InputLabelProps={{
        //   style: { color: '#6d5c42' },
        // }}
        placeholder={placeholder}
        sx={{
          width: '100%',
          // '& .MuiOutlinedInput-root': {
          //   '&.Mui-focused fieldset': {
          //     borderColor: '#6d5c42',
          //   },
          // },
        }}
        label={label}
        variant='outlined'
      />
      {meta.touched && meta.error && <TextError>{meta.error}</TextError>}
    </div>
  );
};

export default Input;
