import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MainTable from './MainTable';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import PropTypes from 'prop-types';


DataSet.propTypes = {
    ds: PropTypes.object,
    details: PropTypes.object,
  };

export default function DataSet(props) {
    const {ds, details} = props;

    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ width: '100%' }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="DataSet" icon={<FolderOpenOutlinedIcon />} />
                <BottomNavigationAction label="Details" icon={<FolderOutlinedIcon />} />
            </BottomNavigation>
            <MainTable headers={value === 0 ? ds.headers: details.headers} rows={ value === 0 ? ds.data: details.data} />
        </Box>
    );
}