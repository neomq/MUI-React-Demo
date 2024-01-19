import { styled } from '@mui/material/styles';
import { InputBase } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material';

const Search = styled('div')(({ theme }) => ({
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "4px 0 4px 12px", // tlbr
    borderRadius: "12px",
    backgroundColor: "#F5F6FA",
    margin: "auto 0",
    height: "40px",
    [theme.breakpoints.down('sm')]: {
        width: '100%'
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "#3C445B",
    fontSize: "14px",
    width: '100%',
    '& .MuiInputBase-input': {
        paddingLeft: '12px',
        paddingRight: '16px',
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '32ch',
        },
    },
    ".MuiInputBase-input::placeholder": {
        opacity: .6,
        color: "#3C4A71"
    }
}))

const SearchIconWrapper = styled('div')({
    pointerEvents: 'none',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const SearchBar = () => {
    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon sx={{ color: "#4D8AFF" }} fontSize="small" />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search friends, groups, or pages" />
        </Search>
    )
}

export default SearchBar