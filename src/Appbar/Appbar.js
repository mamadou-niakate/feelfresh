import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MuiButton from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@mui/styles'
import { useAppContext } from '../store/AppContext';
import { Link } from 'react-scroll'

const useStyles = makeStyles(({
  active: {
    borderBottom: '2px solid #61AB43',
  },
}));

const ResponsiveAppBar = () => {
  const classes = useStyles();
  const { state:{ navLinks } } = useAppContext()
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" color='transparent' elevation={0} style={{ backgroundColor: '#FFF7E8'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <img 
              src='https://bkoeat.com/wp-content/uploads/2021/09/IMG-20201203-WA0003-300x300.jpg' 
              alt=''
              style={{ width: '60px', height: '60px', borderRadius: '50%' }}
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {navLinks.map(({id, path, sectionName}) => (
                <MenuItem key={id} onClick={handleCloseNavMenu}
                >
                  <Link to={path} spy={true} smooth={true}>
                    <Typography 
                      activeClass={classes.active}
                      textAlign="center"
                      color={'GrayText'}
                    >
                      { sectionName }
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img 
              src='https://bkoeat.com/wp-content/uploads/2021/09/IMG-20201203-WA0003-300x300.jpg' 
              alt=''
              style={{ width: '60px', height: '60px', borderRadius: '50%' }}
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {navLinks.map(({id, path, sectionName}) => (
                <MuiButton 
                  key={id} 
                  onClick={handleCloseNavMenu}
                  style={{ textTransform: 'none' }} 
                  sx={{ color: 'GrayText', display: 'block', textDecoration: 'none', fontWeight: 'bold' }}
                >
                  <Link to={path} spy={true} smooth={true}>
                    <Typography 
                      activeClass={classes.active}
                      textAlign="center"
                      color={'GrayText'}
                    >
                      { sectionName }
                    </Typography>
                  </Link>
                  <Typography />
                </MuiButton>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
