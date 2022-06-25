/**
 * MUI: Responsive App bar with Drawer
 * https://mui.com/material-ui/react-app-bar/#responsive-app-bar-with-drawer
 */

// Initial import
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Props from './Props.interface';

/**
 * Los elementos `Link` deben renderizarse dentro de un `Router`
 */
import { Link } from "react-router-dom";

const drawerWidth = 240;
/**
 * Arreglo de tuplas [title,url] para navegación
 */
const navItems: [string, string][] = [["Home", "/"], ["Sign in", "/signin"]]

export default function DrawerAppBar(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    /**
     * Botones de navegación para barra superior para Desktop
     */
    const buttons = (
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        {navItems.map(([item, url]) => (
            <Link to={url}>
                <Button key={item} sx={{ color: '#fff' }}>
                    {item}
                </Button>
            </Link>
        ))}
        </Box>
    )

    /**
     * Botones de navegación para el menu lateral para Mobile
     */
    const list = (
        <List>
            {navItems.map(([item, url]) => (
                <ListItem key={item} component={Link} to={url} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary={item} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )

    /**
     * Menu lateral en modo *responsive* para Mobile
     */
    const drawerContent = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            {list}
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI
                    </Typography>
                    {buttons}                    
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawerContent}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                {props.children}
            </Box>
        </Box>
    );
}
