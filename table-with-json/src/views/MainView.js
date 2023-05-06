import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import PrettyJson from '../components/jsonContainer/PrettyJson';
import DataSet from '../components/table/DataSet';
import API from '../utils/API';
import PropTypes from 'prop-types';

MainView.propTypes = {
    query: PropTypes.string
};


export default function MainView(props) {
    const { query } = props;

    const [ds, setDataSet] = React.useState(API.emptyDs);
    const [details, setDetails] = React.useState(API.emptyDs);
    const [rawJson, setRawJson] = React.useState({});

    React.useEffect(() => {
        async function fetchData() {
            const ds = await API.fetchDataSet(query)
            setDataSet(ds)
            const details = await API.fetchDetails(query)
            setDetails(details)
            const rawJson = await API.fetchJson(query)
            setRawJson(rawJson)
        }
        fetchData();
    }, [query]);

    return (

        <Box sx={{ width: '100%' }}>
            <Stack spacing={3}>
                <div />
                <DataSet ds={ds} details={details} />
                <PrettyJson json={rawJson} />
            </Stack>
        </Box>
    );
}