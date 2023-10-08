import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels({label, onCheck, checked = false}) {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox checked={checked} onClick={onCheck} />} label={label} />
    </FormGroup>
  );
}