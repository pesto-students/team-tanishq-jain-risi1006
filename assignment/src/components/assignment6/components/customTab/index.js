import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function CustomToggleButton({onSelect}) {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
        onSelect(newAlignment)
        setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Task"
    >
      <ToggleButton value="ongoing">Ongoing</ToggleButton>
      <ToggleButton value="completed">Completed</ToggleButton>
    </ToggleButtonGroup>
  );
}