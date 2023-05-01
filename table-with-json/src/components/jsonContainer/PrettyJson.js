import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import PropTypes from 'prop-types';

PrettyJson.propTypes = {
  json: PropTypes.object
};

export default function PrettyJson(props) {

    const {json} = props

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    json:
                </Typography>
                <pre>{JSON.stringify(json, null, 2)}</pre>
            </CardContent>
            <CardActions>
                <Button size="small">See Events</Button>
            </CardActions>
        </Card>
    );
}