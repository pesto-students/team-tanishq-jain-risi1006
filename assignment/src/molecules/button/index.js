import * as React from 'react';
import Button from '@mui/material/Button';

export default function CustomButton({label, onClick, customStyle}) {
  return (
      <Button variant="contained" onClick={onClick} style={customStyle}>{label}</Button>
  );
}