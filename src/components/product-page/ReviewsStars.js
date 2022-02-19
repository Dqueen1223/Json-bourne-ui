import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function BasicRating(rating, isEdit, value, setValue) {
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 }
      }}
    >
      {isEdit && (
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      )}

      {!isEdit && (
      <Rating
        name="simple-controlled"
        readOnly
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      )}
    </Box>
  );
}
