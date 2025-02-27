"use client";
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Avatar, Button, Collapse, FormControlLabel, Menu, MenuItem, Switch, Tooltip } from '@mui/material';
import Link from 'next/link';
import { Add, ExpandLess, ExpandMore, Flaky } from '@mui/icons-material';
import DarkMode from '@/components/DarkMode';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const pages = [
  {href:"#", name: '품질검사', icon: <Flaky/>,
    children:[{href:"#", name: '품질기준서', icon: ""},{href:"#", name: '품질성적서', icon: ""}]
  },
  {href:"#", name: 'Pricing'},
  {href:"#", name: 'Blog'}];

const subPages = [
  {href:"/pages/products", name: '품번/품명 등록', icon: <Add/>},
  {href:"#", name: '측정장비 등록', icon: <Add/>},
];  

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

interface DrawerBarProps {
  children:React.ReactNode;
  toggleTheme: () => void; // 테마 변경 함수 전달
}

const DrawerBar = ({children, toggleTheme}:DrawerBarProps) => {

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  //메뉴 상태관리
  const [openMenus, setOpenMenus] = React.useState<{ [key: number]: boolean }>({});

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleClick = (index: number) => {
    setOpenMenus((prev) => ({...prev, [index]:!prev[index]}));
  };

  return (
    <div>
      <Box sx={{ display: 'flex'}}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
              <Tooltip  title="사이드바 열기">
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={[
                    {
                      mr: 2,
                    },
                    open && { display: 'none' },
                  ]}
                >
                  <MenuIcon />
                </IconButton>
              </Tooltip >
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
              <Link href='/'>QMS</Link>
            </Typography>
            {/* 다크 모드 토글 버튼 */}
            <DarkMode  toggleTheme={toggleTheme} />
            {/* <Button variant="contained" onClick={toggleTheme}>
              Toggle Dark Mode
            </Button>
            <Switch color="default" onClick={toggleTheme}/> */}
            {/* 로그인 전*/}
            <Button color="inherit">Login</Button>
            {/* 로그인 후 */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="#" />
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
                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
        {/* 사이드 바 */}
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
          // onClose={toggleDrawer(false)}
        >
          <DrawerHeader>
            <Tooltip title="사이드바 닫기">
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </Tooltip>
          </DrawerHeader>
          <Divider />
          <List>
            {/* 메인 메뉴 */}
            {pages.map((page, index) => (
              <Box key={index} >
                <ListItem disablePadding>
                  <ListItemButton onClick={() => handleClick(index)}>
                    {/* <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon> */}
                    {/* <ListItemText primary={page.name} /> */}
                    <ListItemIcon>{page.icon}</ListItemIcon>
                    <Link href={page.href}>{page.name}</Link>
                    {page.children ? (
                      openMenus[index] ? <ExpandLess /> : <ExpandMore />
                    ) : null}
                  </ListItemButton>
                </ListItem>
                
                {/* 서브메뉴 */}
                <Collapse in={openMenus[index]} timeout="auto" unmountOnExit>
                {page.children && page.children.map((child, index) => (
                  <ListItem key={index} sx={{ pl: 10, pt:0, pb:0 }} >
                  <ListItemButton component={Link} href={child.href} sx={{pt:0, pb:0 }}>
                    <ListItemText primary={child.name} />
                  </ListItemButton>
                </ListItem>
                ))}
                </Collapse>
              </Box>
            ))}
          </List>
          <Divider />
          <List>
            {subPages.map((subPage, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton component={Link} href={subPage.href} sx={{pt:0, pb:0 }}>
                    <ListItemText primary={subPage.name} />
                  </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>

        <Main open={open} sx={{}}>
          <DrawerHeader />
          <div style={{}}>
            {children}
          </div>
        </Main>
      </Box>
    </div>
  );
}


export default DrawerBar;