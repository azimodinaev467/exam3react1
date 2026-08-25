import { Box, Container, Typography, Button } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import news1 from '../assets/d1ca9df12845c22e1d87427a6b21ff480f92c8aa.jpg';
import news2 from '../assets/876ac4f8fde38cefa4071c4dec4f8d125e8787a7.jpg';
import news3 from '../assets/454aba1b0c4c7a706d37f20cdabc6d8e7f5ddb80.jpg';
import news4 from '../assets/3f19e205cde0a73f5cc8e427720d16da5c74c9db.jpg';
import news5 from '../assets/acf3f475696a69410e76a293560242aac0bd5bbb.jpg';

const newsItems = [
  {
    image: news1,
    title: 'Интерьерные решения от наших дизайнеров',
    date: '01.06.2023',
  },
  {
    image: news2,
    title: 'Последние несколько предложений в коттеджном посёлке Изумрудный Village',
    date: '26.05.2023',
  },
  {
    image: news3,
    title: 'Таун 150 м² по цене двушки — это реально!',
    date: '21.05.2023',
  },
  {
    image: news4,
    title: 'Карта посёлка Изумрудный Village',
    date: '12.05.2023',
  },
  {
    image: news5,
    title: 'Открытие теннисного корта в коттеджном посёлке Изумрудный Village',
    date: '02.05.2023',
  },
];

function NewsCard({ item, tall = false }) {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
        cursor: 'pointer',
        '&:hover img': { transform: 'scale(1.05)' },
        '&:hover .card-overlay': { opacity: 1 },
      }}
    >
      <Box
        component="img"
        src={item.image}
        alt={item.title}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.45s ease',
        }}
      />
      {/* Gradient */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)',
        }}
      />
      {/* Hover overlay */}
      <Box
        className="card-overlay"
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(232,154,85,0.12)',
          opacity: 0,
          transition: 'opacity 0.3s',
        }}
      />
      {/* Text */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          p: { xs: 1.5, md: 2 },
        }}
      >
        <Typography
          sx={{
            color: '#fff',
            fontWeight: 600,
            fontSize: { xs: '12px', md: '14px' },
            lineHeight: 1.35,
            mb: 0.7,
          }}
        >
          {item.title}
        </Typography>
        <Typography
          sx={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: '11px',
          }}
        >
          {item.date}
        </Typography>
      </Box>
    </Box>
  );
}

export default function SectionTen() {
  return (
    <Box>
      {/* ── НОВОСТИ КОМПАНИИ ── */}
      <Box sx={{ py: { xs: 5, md: 8 }, backgroundColor: '#fff' }}>
        <Container
          maxWidth={false}
          sx={{ maxWidth: '1120px', mx: 'auto', px: { xs: 2, md: 3 } }}
        >
          {/* Header */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: { xs: 3, md: 4 },
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: '26px', md: '30px' },
                fontWeight: 500,
                textTransform: 'uppercase',
                color: '#111',
                m: 0,
              }}
            >
              Новости{' '}
              <Box component="span" sx={{ fontStyle: 'italic', color: '#aaa' }}>
                Компании
              </Box>
            </Typography>

            <Button
              endIcon={<ArrowForwardIcon sx={{ fontSize: '16px !important' }} />}
              sx={{
                color: '#555',
                textTransform: 'none',
                fontSize: '13px',
                fontWeight: 500,
                border: '1px solid #ddd',
                borderRadius: 0,
                px: 2,
                py: 0.7,
                '&:hover': { borderColor: '#E89A55', color: '#E89A55' },
              }}
            >
              Все новости
            </Button>
          </Box>

          {/* ── Desktop mosaic grid ── */}
          <Box
            sx={{
              display: { xs: 'none', md: 'grid' },
              gridTemplateColumns: '1fr 1fr 1fr',
              gridTemplateRows: '260px 260px',
              gap: '6px',
            }}
          >
            {/* Item 0 — big left, spans 2 rows */}
            <Box sx={{ gridColumn: '1', gridRow: '1 / 3' }}>
              <NewsCard item={newsItems[0]} tall />
            </Box>
            {/* Item 1 — top right */}
            <Box sx={{ gridColumn: '2 / 4', gridRow: '1' }}>
              <NewsCard item={newsItems[1]} />
            </Box>
            {/* Items 2,3,4 — bottom row, 3 equal columns */}
            <Box sx={{ gridColumn: '2', gridRow: '2' }}>
              <NewsCard item={newsItems[2]} />
            </Box>
            <Box sx={{ gridColumn: '3', gridRow: '2' }}>
              <NewsCard item={newsItems[3]} />
            </Box>
          </Box>

          {/* ── Mobile: vertical stack ── */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', gap: '6px' }}>
            {newsItems.slice(0, 3).map((item, i) => (
              <Box key={i} sx={{ height: 220 }}>
                <NewsCard item={item} />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── ОФИС ПРОДАЖ ── */}
      <Box sx={{ py: { xs: 5, md: 8 }, backgroundColor: '#f9f9f9' }}>
        <Container
          maxWidth={false}
          sx={{ maxWidth: '1120px', mx: 'auto', px: { xs: 2, md: 3 } }}
        >
          {/* Title */}
          <Typography
            component="h2"
            sx={{
              mb: { xs: 3, md: 4 },
              fontSize: { xs: '26px', md: '30px' },
              fontWeight: 500,
              textTransform: 'uppercase',
              color: '#111',
              m: 0,
              mb: { xs: 3, md: 4 },
            }}
          >
            <Box component="span" sx={{ color: '#E89A55', fontStyle: 'italic' }}>
              Офис
            </Box>{' '}
            продаж
          </Typography>

          {/* Content */}
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
                width: { xs: '100%', md: '320px' },
                p: { xs: 3, md: 4 },
                boxSizing: 'border-box',
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '18px', md: '20px' },
                    color: '#111',
                    mb: 0.5,
                  }}
                >
                  Центральный офис
                </Typography>
                <Typography sx={{ fontSize: '13px', color: '#888' }}>
                  вы можете обратиться к нашим менеджерам по любому вопросу
                </Typography>
              </Box>

              {/* Address */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.2 }}>
                <LocationOnOutlinedIcon sx={{ color: '#E89A55', fontSize: 20, mt: '2px', flexShrink: 0 }} />
                <Typography sx={{ fontSize: '14px', color: '#333', lineHeight: 1.5 }}>
                  г.Казань, ул.Яркая 31 Б
                </Typography>
              </Box>

              {/* Hours */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                <AccessTimeOutlinedIcon sx={{ color: '#E89A55', fontSize: 20, flexShrink: 0 }} />
                <Typography sx={{ fontSize: '14px', color: '#333' }}>
                  Пн-Сб: с 9:00 до 18:00
                </Typography>
              </Box>

              {/* Phone */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                <LocalPhoneOutlinedIcon sx={{ color: '#E89A55', fontSize: 20, flexShrink: 0 }} />
                <Typography sx={{ fontSize: '14px', color: '#333' }}>
                  +7 (962) 555-25-25
                </Typography>
              </Box>

              {/* Route button */}
              <Button
                variant="outlined"
                sx={{
                  alignSelf: 'flex-start',
                  mt: 1,
                  color: '#E89A55',
                  borderColor: '#E89A55',
                  textTransform: 'none',
                  fontSize: '13px',
                  borderRadius: 0,
                  px: 3,
                  py: 1,
                  '&:hover': {
                    backgroundColor: '#E89A55',
                    color: '#fff',
                    borderColor: '#E89A55',
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
                minHeight: { xs: 280, md: 380 },
                overflow: 'hidden',
              }}
            >
              <iframe
                title="Офис продаж WinDom"
                src="https://yandex.ru/map-widget/v1/?ll=49.130399%2C55.756950&z=15&pt=49.130399,55.756950,pm2rdl~&text=г.Казань%2C+ул.Яркая+31+Б&lang=ru_RU"
                width="100%"
                height="100%"
                style={{ border: 'none', display: 'block', minHeight: '320px' }}
                allowFullScreen
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
