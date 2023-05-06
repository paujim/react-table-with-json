import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Menu from './components/menu/Menu';
import MainView from './views/MainView';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  const [query, setQuery] = React.useState('');

  const onSubmit= (event)=> {
    setQuery(event)
  };
  return (
    <Container >
      <Menu onSubmit={onSubmit}/>
      <MainView query={query}/>
      <Copyright/>
    </Container>
  );
}