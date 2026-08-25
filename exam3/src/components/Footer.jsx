import { Box, Container, Typography, Link, Divider } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import logo from '../assets/Layer_x0020_1.png';

const navColumns = [
  {
    title: 'О КОМПАНИИ',
    links: ['Главная', 'Наша команда', 'СМИ о нас', 'Отзывы', 'Новости', 'Контакты'],
  },
  {
    title: 'ПРОЕКТЫ',
    links: ['Изумрудный Village', 'Зимняя горка', 'Константиновка', 'Усады Village', 'IQ-CLUB'],
  },
  {
    title: 'ИПОТЕКА',
    links: ['Ипотечный кредит', 'Для семей с детьми', 'Военная ипотека', 'Господдержка 2023'],
  },
];

// VK icon SVG
function VkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604.976.987 1.367 1.84 2.369 1.84h2.181c.649 0 .959-.337.759-.998-.2-.657-.973-1.476-2.037-2.481-1.563-1.469-1.349-1.232.529-3.783 1.181-1.652 1.653-2.662 1.505-3.090-.142-.406-.993-.3-1.342-.3h-2.181c-.536 0-.784.287-.944.716-.44 1.14-1.434 2.953-2.091 3.383-.337.219-.661.073-.661-.401v-3.268c0-.525-.132-.721-.66-.721h-3.427c-.385 0-.66.278-.66.628 0 .565.882.696.972 2.286v3.456c0 .666-.122.785-.387.785-.66 0-2.263-2.268-3.215-4.865-.187-.535-.375-.752-.914-.752H3.459c-.6 0-.721.278-.721.585 0 .614 1.893 5.9 5.559 8.236 2.908 1.854 5.865 1.734 7.865 1.463z" />
    </svg>
  );
}

// LinkedIn icon
function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// Tumblr icon
function TumblrIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.207 2.371h.09c.631-.02 1.486-.205 1.936-.419l1.156 3.425c-.436.636-2.4 1.374-4.304 1.406z" />
    </svg>
  );
}

const socialLinks = [
  { icon: <YouTubeIcon sx={{ fontSize: 18 }} />, href: '#', label: 'YouTube' },
  { icon: <VkIcon />, href: '#', label: 'VK' },
  { icon: <LinkedInIcon />, href: '#', label: 'LinkedIn' },
  { icon: <TumblrIcon />, href: '#', label: 'Tumblr' },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#333333',
        color: '#fff',
        pt: { xs: 5, md: 7 },
        pb: { xs: 5, md: 7 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{ maxWidth: '1120px', mx: 'auto', px: { xs: 2, md: 3 } }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 5, md: 4 },
            justifyContent: 'space-between',
          }}
        >
          {/* Nav columns */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 4, sm: 6, md: 8 },
              flex: 1,
            }}
          >
            {navColumns.map((col, idx) => (
              <Box key={col.title} sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: '14px',
                      color: '#fff',
                      textTransform: 'uppercase',
                      display: 'inline-block',
                      pb: 1,
                      borderBottom: '1px solid #C48C56',
                      width: '100%',
                      maxWidth: '150px'
                    }}
                  >
                    {col.title}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, flexGrow: 1 }}>
                  {col.links.map((link) => (
                    <Box
                      key={link}
                      component="span"
                      onClick={(e) => e.preventDefault()}
                      sx={{
                        color: 'rgba(255,255,255,0.85)',
                        fontSize: '14px',
                        transition: 'color 0.2s',
                        cursor: 'pointer',
                        '&:hover': { color: '#C48C56' },
                      }}
                    >
                      {link}
                    </Box>
                  ))}
                </Box>
                {/* Add Privacy Policy under the first column */}
                {idx === 0 && (
                  <Link
                    href="#"
                    underline="none"
                    sx={{
                      fontSize: '11px',
                      color: 'rgba(255,255,255,0.5)',
                      '&:hover': { color: '#C48C56' },
                      mt: { xs: 4, md: 8 }
                    }}
                  >
                    Политика конфиденциальности
                  </Link>
                )}
              </Box>
            ))}
          </Box>

          {/* Right: logo + social + email */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'flex-start', md: 'center' },
              gap: 3,
              flexShrink: 0,
            }}
          >
            {/* Logo */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box
                component="img"
                src={logo}
                alt="WinDom logo"
                sx={{ height: { xs: 80, md: 100 }, width: 'auto', objectFit: 'contain' }}
              />
            </Box>

            {/* Social icons */}
            <Box sx={{ display: 'flex', gap: 1.5, width: '100%', justifyContent: { xs: 'flex-start', md: 'center' } }}>
              {socialLinks.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  sx={{
                    width: 40,
                    height: 40,
                    border: '1px solid rgba(255,255,255,0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    transition: 'all 0.2s',
                    '&:hover': {
                      borderColor: '#C48C56',
                      color: '#C48C56',
                    },
                  }}
                >
                  {s.icon}
                </Link>
              ))}
            </Box>

            {/* Email */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                border: '1px solid rgba(255,255,255,0.5)',
                px: 2,
                py: 1,
                cursor: 'pointer',
                transition: 'border-color 0.2s',
                width: '100%',
                justifyContent: 'center',
                '&:hover': { borderColor: '#C48C56' },
              }}
            >
              <EmailOutlinedIcon sx={{ color: 'rgba(255,255,255,0.7)', fontSize: 18 }} />
              <Typography sx={{ fontSize: '13px', color: 'rgba(255,255,255,0.9)' }}>
                windom.kazan@gmail.com
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
