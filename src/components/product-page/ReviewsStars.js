// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';

// export default function BasicRating(reviewsRating) {
//   const [value, setValue] = React.useState(reviewsRating);

//   return (
//     <Box
//       sx={{
//         '& > legend': { mt: 3 }
//       }}
//     >
//       <Typography component="legend">Rating</Typography>
//       <Rating
//         name="simple-controlled"
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//       />
//     </Box>
//   );
// }

import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function BasicRating(reviewsRating) {
  const [setValue] = React.useState(reviewsRating);
  return (
    <Stack spacing={2}>
      <Rating name="half-rating-read" defaultValue={setValue} precision={setValue} />
    </Stack>
  );
}
