import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MainTable from '../components/table/Table';
import PrettyJson from '../components/jsonContainer/PrettyJson';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const rawJson = {
    "name": "John Doe",
    "age": 32,
    "email": "johndoe@example.com"
};

export default function MainView() {
    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={3}>
                <div />
                <MainTable rows={rows} />
                <PrettyJson json={rawJson}/>
            </Stack>
        </Box>
    );
}