import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Stack from '@mui/material/Stack';

export default function IconAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      
      <Alert
        iconMapping={{
          success: <CheckCircleOutlineIcon fontSize="inherit" />,
        }}
      >
        This is a success alert — check it out!
      </Alert>
    </Stack>
  );
}
