import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { HashLink as Link } from 'react-router-hash-link';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(({
  active: {
    borderBottom: '2px solid #61AB43',
  },
}));


const pages = [
  {
    pathName: 'About',
    hash: '#about',
    title: 'À Propos',
  },
  {
    pathName: 'Menu',
    hash: '#menu',
    title: 'Menu',
  },
  {
    pathName: 'Location',
    hash: '#location',
    title: 'Emplacement',
  },
];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const classes = useStyles();
  const [activeLink, setActiveLink] = React.useState(0);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  const handleActiveLink = (index) => {
    setActiveLink(index);
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
              {pages.map(({id, pathName,hash,title}) => (
                <MenuItem key={id} onClick={handleCloseNavMenu}>
                  <Link 
                    onClick={() => handleActiveLink(title)}
                    className={activeLink === title ? classes.active : ''}
                    to={`${pathName}${hash}`} 
                    style={{ my: 2, color: 'GrayText', display: 'block', textDecoration: 'none' }}
                  >
                    <Typography textAlign="center" color={'GrayText'}>{ title }</Typography>
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
            {pages.map(({id, pathName,hash,title}) => (
              <Link 
                onClick={() => handleActiveLink(title)}
                className={activeLink === title ? classes.active : ''}
                to={`${pathName}${hash}`} 
                style={{ my: 2, textDecoration: 'none' }}
              >
                <Button 
                  key={id} 
                  onClick={handleCloseNavMenu} 
                  style={{ textTransform: 'none' }} 
                  sx={{ color: 'GrayText', display: 'block', textDecoration: 'none', fontWeight: 'bold' }}
                >
                  {title}
                </Button>
              </Link>
            ))}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
