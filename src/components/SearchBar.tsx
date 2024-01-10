import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import RefreshSharpIcon from '@mui/icons-material/RefreshSharp';
import Button from '@mui/material/Button';

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
            <SearchIcon sx={{ color: "#647382", paddingTop: "4px" }}/>
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
            <Button
            size="small"
            variant="contained"
            sx={{
                '&.MuiButton-contained': {
                width: '90px',
                height: '36px',
                fontSize: '13px',
                fontWeight: 'normal',
                textTransform: 'none',
                letterSpacing: 1,
                borderRadius: '8px',
                backgroundColor: '#6B54FF',
                px: 1,
                },
                '&.MuiButton-contained:hover': {
                backgroundColor: '#5c46ec',
                },
            }}
            >
            Add user
            </Button>
            <IconButton sx={{ marginLeft: 1 }}>
                <RefreshSharpIcon sx={{ color: "#647382" }}/>
            </IconButton>
        </Stack>
    </Box>
  )
}

export default SearchBar