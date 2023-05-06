import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

Menu.propTypes = {
  onSubmit: PropTypes.func,
};

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


export default function Menu(props) {
    const {onSubmit } = props;
    const [query, setQuery] = React.useState('');

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Search>
                        <TextField
                            onChange={(event) => {
                                setQuery(event.target.value);
                              }}
                            sx={{ minWidth: 600 }}
                            id="search-required"
                            type="search"
                            placeholder="Search"
                            inputProps={{
                                'aria-label': 'description',
                                'color': 'inherit',
                            }}
                        />
                    </Search>
                    <IconButton
                        size="large"
                        color="inherit"
                        onClick={ ()=>onSubmit(query)}
                    >
                        <SearchIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
