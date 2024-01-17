import { Fragment } from 'react'
import { Typography } from '@mui/material'
import { Face } from '@mui/icons-material';

const AppIcon = () => {
  return (
    <Fragment>
        <Face sx={{ color: "#4D8AFF" }} />
        <Typography
            variant="h6"
            fontWeight="bold"
            color="#4D8AFF"
            >
            friendbook
        </Typography>
    </Fragment>
  )
}

export default AppIcon