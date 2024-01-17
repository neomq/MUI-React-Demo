import { Fragment, useState } from 'react'
import { Tooltip, Fab, Box, Modal, styled, Typography, Avatar, TextField } from "@mui/material"
import { Add } from '@mui/icons-material';

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px"
})

const CreatePost = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Fragment>
      <Tooltip
        title="create"
        sx={{
          position: "fixed",
          bottom: 20,
          left: {
            xs: "calc(50% - 25px)",
            md: 30
          }
        }}>
        <Fab color="primary" aria-label="add" onClick={handleOpen}>
          <Add />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} p={3} borderRadius={5} bgcolor="background.default" color="text.primary">
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar alt="Cindy Baker" sx={{ width: "30px", height: "30px" }} src="https://mui.com/static/images/avatar/3.jpg" />
            <Typography fontWeight={500} variant="body1">Cindy</Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder='Whats on your mind?'
            variant="standard"
          />
        </Box>
      </StyledModal>
    </Fragment>
  )
}

export default CreatePost