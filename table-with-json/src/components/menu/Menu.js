import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TextField from '@mui/material/TextField';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: 'auto',

}));


export default function PrimarySearchAppBar() {
    // const [searchData, setSearchData] = React.useState('');
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        color="inherit"
                    >
                        <SearchIcon />
                    </IconButton>
                    <Search>
                        <TextField
                            id="search-required"
                            type="search"
                            placeholder="Search"
                            inputProps={{
                                'aria-label': 'description',
                                'color': 'inherit',
                                'width': 'auto'
                            }}
                        />
                    </Search>
                    <IconButton
                        size="large"
                        color="inherit"
                    >
                        <ChevronRightIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
