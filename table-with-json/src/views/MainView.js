import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MainTable from '../components/table/Table';
import PrettyJson from '../components/jsonContainer/PrettyJson';

export default function MainView() {
    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={3}>
                <div />
                <MainTable />
                <PrettyJson />
            </Stack>
        </Box>
    );
}