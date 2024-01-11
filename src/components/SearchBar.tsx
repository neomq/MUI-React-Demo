import { Box, Stack, Input, IconButton } from '@mui/material';
import { Search, RefreshSharp } from '@mui/icons-material';
import CommonButton from './CommonButton';
import { buttonStyles } from '../styles/styles';

const SearchBar = () => {
  return (
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingX: 3,
        paddingY: 1,
        backgroundColor: "#F9FAFB",
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        borderRadius: "8px 8px 0 0"
    }}>
        <Stack display="flex" direction="row" flexGrow={1}>
            <Search sx={{ color: "#647382", paddingTop: "4px" }}/>
            <Input
                placeholder="Search by email address, phone number, or user UID"
                fullWidth
                sx={{ 
                    minWidth: "40px",
                    '.MuiInputBase-input': { paddingTop: "6px", paddingX: 1, fontSize: "14px" },
                }}
                disableUnderline
            />
        </Stack>
        <Stack display="flex" direction="row">
            <CommonButton 
                size="small"
                variant="contained"
                sx={buttonStyles.priBtn}
            > Add User
            </CommonButton>
            <IconButton sx={{ marginLeft: 1 }}>
                <RefreshSharp sx={{ color: "#647382" }}/>
            </IconButton>
        </Stack>
    </Box>
  )
}

export default SearchBar