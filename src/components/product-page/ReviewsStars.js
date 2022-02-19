import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function BasicRating(isEdit, value, setValue, currRating) {
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
            defaultValue={currRating}
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <span className="starRating">{value}</span>
        </>
      )}

      {!isEdit && (
        <>
          <Rating
            name="simple-controlled"
            readOnly
            value={value}
          />
          <span className="starRating">{value}</span>
        </>
      )}
    </Box>
  );
}
