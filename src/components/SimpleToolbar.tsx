// UI
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import Stack from '@mui/material/Stack';

// Routing
import { useNavigate, Link } from 'react-router-dom';

interface Props {
    /**
     * Título de la barra
     */
    title: string;
}

function SimpleToolbar(props: Props) {
    /**
     * The useNavigate hook returns a function that lets you navigate programmatically
     * https://reactrouter.com/docs/en/v6/hooks/use-navigate
     */
    const navigate = useNavigate();
    return (
        <Toolbar>
        <Grid container spacing={2} justifyContent="flex-start" alignItems="flex-end">
          <Grid item>
            <IconButton onClick={() => navigate(-1)} edge="start" color="inherit" aria-label="menu">
              <ArrowBackIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton href="/">
              <HomeIcon fontSize="small"/>
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h6" noWrap component="div" sx={{ ml: 2}}>
              {props.title}
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    );
}
export default SimpleToolbar;