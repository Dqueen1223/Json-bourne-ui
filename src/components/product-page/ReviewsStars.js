import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function BasicRating(isEdit, value, setValue, defaultValue) {
  console.log(defaultValue);
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 }
      }}
    >
      {isEdit && (
        <>
          <Rating
            name="simple-controlled"
            value={value || defaultValue}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </>
      )}

      {!isEdit && (
        <>
          <Rating
            name="simple-controlled"
            readOnly
            value={value || defaultValue}
          />
        </>
      )}
    </Box>
  );
}
