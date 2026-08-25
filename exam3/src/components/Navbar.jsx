import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import CallModal from './CallModal';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  useMediaQuery,
  useTheme,
  Typography,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PhoneIcon from '@mui/icons-material/Phone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from '../assets/Лого (1).png';

const navItems = [
  { label: 'Главная', path: '/' },
  {
    label: 'Наши проекты',
    path: '/projects',
    children: [
      { label: 'Изумрудный Village', path: '/projects/izumrudny' },
      { label: 'IQ CLUB', path: '/projects/iq-club' },
      { label: 'Усады', path: '/projects/usady' },
      { label: 'Зимняя горка', path: '/projects/zimnyaya-gorka' },
      { label: 'Константиновка', path: '/projects/konstantinovka' },
      { label: 'Все проекты', path: '/projects' },
      { label: 'Страница дома', path: '/house-details' },
    ],
  },
  {
    label: 'Дома',
    path: '/houses',
    children: [
      { label: 'Одноэтажные', path: '/houses/one-floor' },
      { label: 'Двухэтажные', path: '/houses/two-floor' },
      { label: 'Таунхаусы', path: '/houses/townhouses' },
      { label: 'Все дома', path: '/houses/all' },
    ],
  },
  { label: 'Ипотека', path: '/mortgage' },
  {
    label: 'О компании',
    path: '/about',
    children: [
      { label: 'Команда', path: '/about/team' },
      { label: 'СМИ о нас', path: '/about/media' },
      { label: 'Новости', path: '/about/news' },
    ],
  },
  { label: 'Контакты', path: '/contacts' },
];

function DesktopNavItem({ item }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  if (!item.children) {
    return (
      <Button
        component={RouterLink}
        to={item.path}
        sx={{
          color: '#222',
          fontWeight: 500,
          fontSize: '0.9rem',
          textTransform: 'none',
          px: 1.5,
          '&:hover': { color: '#E87A1E' },
        }}
      >
        {item.label}
      </Button>
    );
  }

  return (
    <>
      <Button
        onClick={handleOpen}
        endIcon={<KeyboardArrowDownIcon sx={{ fontSize: '1rem !important', transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none' }} />}
        sx={{
          color: '#222',
          fontWeight: 500,
          fontSize: '0.9rem',
          textTransform: 'none',
          px: 1.5,
          '&:hover': { color: '#E87A1E' },
        }}
      >
        {item.label}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        elevation={3}
        PaperProps={{
          sx: {
            mt: 0.5,
            borderRadius: 1,
            minWidth: 200,
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          },
        }}
      >
        {item.children.map((child) => (
          <MenuItem
            key={child.path}
            onClick={() => { navigate(child.path); handleClose(); }}
            sx={{
              fontSize: '0.88rem',
              py: 1,
              '&:hover': { color: '#E87A1E', backgroundColor: 'rgba(232,122,30,0.06)' },
            }}
          >
            {child.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

function MobileDrawer({ open, onClose, onOpenModal }) {
  const [expanded, setExpanded] = useState({});
  const navigate = useNavigate();

  const toggle = (label) => setExpanded((p) => ({ ...p, [label]: !p[label] }));

  const goTo = (path) => { navigate(path); onClose(); };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { width: 280, pt: 2 } }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, pb: 1 }}>
        <Box component="img" src={logo} alt="WinDom" sx={{ height: 36 }} />
        <IconButton onClick={onClose}><CloseIcon /></IconButton>
      </Box>
      <Divider />
      <Box sx={{ px: 1, py: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 1, py: 1.5 }}>
          <PhoneIcon sx={{ color: '#E87A1E', fontSize: '1.1rem' }} />
          <Typography sx={{ fontSize: '0.9rem', fontWeight: 600 }}>+7 (962) 555-25-25</Typography>
        </Box>
        <Button
          fullWidth
          variant="outlined"
          sx={{ mb: 2, borderColor: '#E87A1E', color: '#E87A1E', borderRadius: 1, textTransform: 'none', '&:hover': { backgroundColor: '#E87A1E', color: '#fff' } }}
          onClick={() => { onClose(); onOpenModal(); }}
        >
          Заказать звонок
        </Button>
      </Box>
      <Divider />
      <List disablePadding>
        {navItems.map((item) => (
          <Box key={item.label}>
            <ListItemButton
              onClick={() => item.children ? toggle(item.label) : goTo(item.path)}
              sx={{ py: 1.5, px: 2 }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontWeight: 500, fontSize: '0.95rem' }}
              />
              {item.children ? (expanded[item.label] ? <ExpandLess /> : <ExpandMore />) : null}
            </ListItemButton>
            {item.children && (
              <Collapse in={expanded[item.label]} timeout="auto" unmountOnExit>
                <List disablePadding>
                  {item.children.map((child) => (
                    <ListItemButton
                      key={child.path}
                      onClick={() => goTo(child.path)}
                      sx={{ pl: 4, py: 1 }}
                    >
                      <ListItemText
                        primary={child.label}
                        primaryTypographyProps={{ fontSize: '0.875rem', color: '#555' }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </Box>
        ))}
      </List>
    </Drawer>
  );
}

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: '#fff',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          zIndex: theme.zIndex.appBar,
        }}
      >
        <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto', px: { xs: 2, md: 3 }, minHeight: { xs: 60, md: 70 } }}>
          {/* Logo */}
          <Box
            component={RouterLink}
            to="/"
            sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', mr: { xs: 'auto', md: 4 } }}
          >
            <Box component="img" src={logo} alt="WinDom" sx={{ height: { xs: 36, md: 44 } }} />
          </Box>

          {/* Desktop Nav */}
          {!isMobile && (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flex: 1 }}>
                {navItems.map((item) => (
                  <DesktopNavItem key={item.label} item={item} />
                ))}
              </Box>

              {/* Phone */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mr: 2 }}>
                <PhoneIcon sx={{ color: '#E87A1E', fontSize: '1.1rem' }} />
                <Typography sx={{ fontSize: '0.9rem', fontWeight: 600, color: '#222', whiteSpace: 'nowrap' }}>
                  +7 (962) 555-25-25
                </Typography>
              </Box>

              {/* CTA Button */}
              <Button
                variant="outlined"
                onClick={() => setModalOpen(true)}
                sx={{
                  borderColor: '#E87A1E',
                  color: '#E87A1E',
                  borderRadius: 1,
                  textTransform: 'none',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  px: 2.5,
                  py: 1,
                  '&:hover': { backgroundColor: '#E87A1E', color: '#fff', borderColor: '#E87A1E' },
                  transition: 'all 0.25s ease',
                }}
              >
                Заказать звонок
              </Button>
            </>
          )}

          {/* Mobile: phone icon + burger */}
          {isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton
                onClick={() => setModalOpen(true)}
                sx={{ color: '#E87A1E' }}
              >
                <PhoneIcon />
              </IconButton>
              <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: '#222' }}>
                <MenuIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} onOpenModal={() => setModalOpen(true)} />

      <CallModal open={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Toolbar spacer */}
      <Toolbar sx={{ minHeight: { xs: 60, md: 70 } }} />
    </>
  );
}
