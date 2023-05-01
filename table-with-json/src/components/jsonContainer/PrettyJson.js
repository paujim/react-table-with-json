import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const json = {
    "name": "John Doe",
    "age": 32,
    "email": "johndoe@example.com"
};

export default function PrettyJson() {
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