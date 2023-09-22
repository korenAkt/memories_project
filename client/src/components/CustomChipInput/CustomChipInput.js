import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const CustomChipInput = ({ value, onChange, label }) => {
  const [inputValue, setInputValue] = useState('');
  // import CustomChipInput from './CustomChipInput';

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      onChange([...value, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleDeleteChip = (chipToDelete) => {
    const updatedValue = value.filter((item) => item !== chipToDelete);
    onChange(updatedValue);
  };

  return (
    <div>
      <TextField
        label={label}
        variant="outlined"
        fullWidth
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
      />
      <Stack spacing={1}>
        {value.map((item, index) => (
          <Chip
            key={index}
            label={item}
            onDelete={() => handleDeleteChip(item)}
            variant="outlined"
          />
        ))}
      </Stack>
    </div>
  );
};

export default CustomChipInput;
