import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating(isEditMode, rating, setStarRating) {
  const [value, setValue] = React.useState(rating);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 }
      }}
    >
      <Typography component="legend">Rating</Typography>
      {!isEditMode && (
      <Rating
        name="read-only"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        readOnly
      />
      )}
      {isEditMode && (
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          setStarRating(newValue);
        }}
      />
      )}
    </Box>
  );
}
