// UI
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Routing
import { useNavigate } from 'react-router-dom';

interface Props {
    title:string;
}

function SimpleToolbar(props: Props) {
    /**
     * The useNavigate hook returns a function that lets you navigate programmatically
     * https://reactrouter.com/docs/en/v6/hooks/use-navigate
     */
    const navigate = useNavigate();
    return (
        <Toolbar>
            <IconButton onClick={() => navigate(-1)} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                {props.title}
            </Typography>
        </Toolbar>
    );
}
export default SimpleToolbar;