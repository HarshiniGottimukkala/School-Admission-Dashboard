import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import './Navbar.scss'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const navbar = ({dashboardName}) => {
  return (
    <div className="navbar-head">
      <Typography className='dashboard-name'
        variant="h6"
        noWrap
        component="div"
        // sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', color : '#2F4362'} }}
      >
        {dashboardName}
      </Typography>

      <div className="search-content">
        <Search className='search-bar'>

          <SearchIconWrapper className='search-wrapper'>
            <SearchIcon className='search-icon' />
          </SearchIconWrapper>

          <StyledInputBase
            className='style-input'
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </div>
    </div>
  )
}

export default navbar