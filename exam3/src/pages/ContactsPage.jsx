import { Box, Container, Typography, TextField, Button, Link } from '@mui/material';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import Footer from '../components/Footer';

// VK icon SVG
function VkIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604.976.987 1.367 1.84 2.369 1.84h2.181c.649 0 .959-.337.759-.998-.2-.657-.973-1.476-2.037-2.481-1.563-1.469-1.349-1.232.529-3.783 1.181-1.652 1.653-2.662 1.505-3.090-.142-.406-.993-.3-1.342-.3h-2.181c-.536 0-.784.287-.944.716-.44 1.14-1.434 2.953-2.091 3.383-.337.219-.661.073-.661-.401v-3.268c0-.525-.132-.721-.66-.721h-3.427c-.385 0-.66.278-.66.628 0 .565.882.696.972 2.286v3.456c0 .666-.122.785-.387.785-.66 0-2.263-2.268-3.215-4.865-.187-.535-.375-.752-.914-.752H3.459c-.6 0-.721.278-.721.585 0 .614 1.893 5.9 5.559 8.236 2.908 1.854 5.865 1.734 7.865 1.463z" />
    </svg>
  );
}

// LinkedIn icon
function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socialLinks = [
  { icon: <YouTubeIcon sx={{ fontSize: 20 }} />, label: 'YouTube' },
  { icon: <VkIcon />, label: 'VK' },
  { icon: <LinkedInIcon />, label: 'LinkedIn' },
  { icon: <WhatsAppIcon sx={{ fontSize: 20 }} />, label: 'WhatsApp' },
];

export default function ContactsPage() {
  return (
    <>
      <Box sx={{ backgroundColor: '#f5f5f5', pt: { xs: 8, md: 12 }, pb: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              gap: { xs: 6, md: 4 },
            }}
          >
            {/* Left Side: Info */}
            <Box sx={{ flex: 1, maxWidth: { md: '60%' } }}>
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: '32px', md: '48px' },
                  fontWeight: 500,
                  color: '#111',
                  lineHeight: 1.1,
                  mb: 4,
                  textTransform: 'uppercase',
                }}
              >
                ЦЕНТРАЛЬНЫЙ ОФИС ПРОДАЖ <Box component="span" sx={{ color: '#E89A55', fontStyle: 'italic' }}>WIN DOM</Box>
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: '18px', md: '20px' },
                  color: '#222',
                  mb: 5,
                  fontWeight: 400,
                }}
              >
                Республика Татарстан, г. Казань ул. Яркая, д.31Б
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 2, sm: 6 }, mb: 5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <PhoneOutlinedIcon sx={{ color: '#E89A55', fontSize: 24 }} />
                  <Typography sx={{ fontSize: '18px', fontWeight: 500, color: '#111' }}>
                    +7 (962) 555-25-25
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <PhoneOutlinedIcon sx={{ color: '#E89A55', fontSize: 24 }} />
                  <Typography sx={{ fontSize: '18px', fontWeight: 500, color: '#111' }}>
                    +7 (962) 591-79-60
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 2, mb: 5 }}>
                {socialLinks.map((s) => (
                  <Box
                    key={s.label}
                    aria-label={s.label}
                    sx={{
                      width: 44,
                      height: 44,
                      border: '1px solid #ccc',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#555',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      borderRadius: '2px',
                      '&:hover': {
                        borderColor: '#E89A55',
                        color: '#E89A55',
                      },
                    }}
                  >
                    {s.icon}
                  </Box>
                ))}
              </Box>

              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.5,
                  border: '1px solid #E89A55',
                  px: 3,
                  py: 1.5,
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  '&:hover': { backgroundColor: 'rgba(232,154,85,0.05)' },
                }}
              >
                <EmailOutlinedIcon sx={{ color: '#E89A55', fontSize: 22 }} />
                <Typography sx={{ fontSize: '16px', color: '#111', fontWeight: 500 }}>
                  windom.kazan@gmail.com
                </Typography>
              </Box>
            </Box>

            {/* Right Side: Form Card */}
            <Box sx={{ flex: '0 0 auto', width: { xs: '100%', md: '380px' } }}>
              <Box
                sx={{
                  backgroundColor: '#fff',
                  p: { xs: 4, md: 5 },
                  boxShadow: '0px 10px 40px rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2.5,
                }}
              >
                <Typography
                  sx={{
                    textAlign: 'center',
                    fontSize: '24px',
                    fontWeight: 600,
                    color: '#111',
                    mb: 0.5,
                  }}
                >
                  Консультация
                </Typography>
                <Typography
                  sx={{
                    textAlign: 'center',
                    fontSize: '14px',
                    color: '#222',
                    mb: 1.5,
                  }}
                >
                  Наш менеджер свяжется с вами
                  <br />в ближайшее время
                </Typography>

                <TextField
                  fullWidth
                  placeholder="Ваше имя"
                  variant="outlined"
                  size="small"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#f9f9f9',
                      borderRadius: 0,
                      '& fieldset': { border: 'none' },
                    },
                    '& .MuiInputBase-input': { py: 1.5, px: 2, fontSize: '14px' },
                  }}
                />

                <TextField
                  fullWidth
                  placeholder="Телефон"
                  variant="outlined"
                  size="small"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#f9f9f9',
                      borderRadius: 0,
                      '& fieldset': { border: 'none' },
                    },
                    '& .MuiInputBase-input': { py: 1.5, px: 2, fontSize: '14px' },
                  }}
                />

                <Button
                  fullWidth
                  sx={{
                    backgroundColor: '#E89A55',
                    color: '#fff',
                    borderRadius: 0,
                    textTransform: 'none',
                    fontSize: '15px',
                    fontWeight: 500,
                    py: 1.5,
                    mt: 1,
                    transition: 'all 0.25s',
                    '&:hover': {
                      backgroundColor: '#d68742',
                    },
                  }}
                >
                  Получить консультацию
                </Button>

                <Typography sx={{ fontSize: '10px', color: '#888', textAlign: 'center', mt: 1, lineHeight: 1.4 }}>
                  Нажимая кнопку «Получить консультацию», вы подтверждаете
                  свое <Link href="#" underline="always" sx={{ color: '#E89A55' }}>согласие на обработку персональных данных</Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── КАРТА (ОФИС ПРОДАЖ) ── */}
      <Box sx={{ py: { xs: 5, md: 8 }, backgroundColor: '#fff' }}>
        <Container
          maxWidth={false}
          sx={{ maxWidth: '1120px', mx: 'auto', px: { xs: 2, md: 3 } }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 4, md: 0 },
              border: '1px solid #e0e0e0',
              overflow: 'hidden',
            }}
          >
            {/* Left info */}
            <Box
              sx={{
                flex: '0 0 auto',
                width: { xs: '100%', md: '360px' },
                p: { xs: 3, md: 5 },
                boxSizing: 'border-box',
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
                gap: 2.5,
              }}
            >
              <Box>
                <Typography sx={{ fontSize: '16px', color: '#111', fontWeight: 500, lineHeight: 1.4, mb: 1 }}>
                  Вы можете обратиться к нашим менеджерам по любому вопросу
                </Typography>
              </Box>

              {/* Address */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <LocationOnOutlinedIcon sx={{ color: '#E89A55', fontSize: 24, mt: '2px', flexShrink: 0 }} />
                <Typography sx={{ fontSize: '18px', color: '#111' }}>
                  г.Казань, ул.Яркая 31 Б
                </Typography>
              </Box>

              {/* Hours */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <AccessTimeOutlinedIcon sx={{ color: '#E89A55', fontSize: 24, flexShrink: 0 }} />
                <Typography sx={{ fontSize: '18px', color: '#111' }}>
                  Пн-Сб: с 9:00 до 18:00
                </Typography>
              </Box>

              {/* Phone */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <LocalPhoneOutlinedIcon sx={{ color: '#E89A55', fontSize: 24, flexShrink: 0 }} />
                <Typography sx={{ fontSize: '18px', color: '#111' }}>
                  +7 (962) 555-25-25
                </Typography>
              </Box>

              {/* Route button */}
              <Button
                sx={{
                  alignSelf: 'flex-start',
                  mt: 2,
                  backgroundColor: '#E89A55',
                  color: '#fff',
                  textTransform: 'none',
                  fontSize: '15px',
                  fontWeight: 500,
                  borderRadius: 0,
                  px: 4,
                  py: 1.2,
                  '&:hover': {
                    backgroundColor: '#d68742',
                  },
                }}
              >
                Проложить маршрут
              </Button>
            </Box>

            {/* Right map */}
            <Box
              sx={{
                flex: 1,
                minHeight: { xs: 320, md: 400 },
                overflow: 'hidden',
              }}
            >
              <iframe
                title="Офис продаж WinDom"
                src="https://yandex.ru/map-widget/v1/?ll=49.130399%2C55.756950&z=15&pt=49.130399,55.756950,pm2rdl~&text=г.Казань%2C+ул.Яркая+31+Б&lang=ru_RU"
                width="100%"
                height="100%"
                style={{ border: 'none', display: 'block', minHeight: '100%' }}
                allowFullScreen
              />
            </Box>
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
