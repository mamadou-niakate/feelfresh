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
import { Grid } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import * as Icons from 'react-icons/fa';
import { restaurant } from '../jsonfile';
import MuiLink from '@mui/material/Link';

const useStyles = makeStyles(({
  link: {},
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
              {navLinks?.map(({id, path, sectionName}) => (
                <MenuItem key={id}
                >
                  <Link to={path} spy={true} smooth={true}  onClick={handleCloseNavMenu}>
                    <Typography 
                      activeClass='active'
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
            {navLinks?.map(({id, path, sectionName}) => (
                <MuiButton 
                  key={id} 
                  style={{ textTransform: 'none' }} 
                  sx={{ color: 'GrayText', display: 'block', textDecoration: 'none', fontWeight: 'bold' }}
                >
                  <Link to={path} spy={true} smooth={true} activeClass='active' onClick={handleCloseNavMenu} >
                    <Typography 
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
          <Box sx={{ flexGrow: 0.2 }}>
            <Grid container justifyContent={'space-evenly'} alignItems='center'>
              {restaurant.socialNetwork.map(({ icon, url}, index) => {
                return (
                  <Grid item>
                    <MuiLink href={url} target='_blank' rel='noopener noreferrer' key={index} className={classes.link}>
                        <IconButton sx={{  color: "GrayText" }}>
                            {React.createElement(Icons[icon], {className: classes.socialNetworkIcon})}
                        </IconButton>
                    </MuiLink>
                  </Grid>
                )
              })}   
              <Grid item>
                <MuiLink href={`tel:${restaurant.phone}`} target='_blank' rel='noopener noreferrer'>
                  <IconButton sx={{  color: "GrayText" }}>
                    <CallIcon />
                  </IconButton>
                </MuiLink>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
