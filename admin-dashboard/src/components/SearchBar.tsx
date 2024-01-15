import { Box, Stack, Input, IconButton } from '@mui/material';
import { Search, RefreshSharp } from '@mui/icons-material';
import CommonButton from './CommonButton';

const SearchBar = () => {
  return (
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingX: 3,
        paddingY: 1,
        backgroundColor: "grayscale.paper",
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        borderRadius: "8px 8px 0 0"
    }}>
        <Stack display="flex" direction="row" flexGrow={1}>
            <Search sx={{ color: "grayscale.metal", paddingTop: "4px" }}/>
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
        <Stack display="flex" direction="row" alignItems="center">
            <CommonButton size="small" variant="contained" style="primaryBtn"> 
                Add User
            </CommonButton>
            <IconButton sx={{ marginLeft: 1 }}>
                <RefreshSharp sx={{ color: "grayscale.metal" }}/>
            </IconButton>
        </Stack>
    </Box>
  )
}

export default SearchBar