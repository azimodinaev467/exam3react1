import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CropFreeOutlinedIcon from '@mui/icons-material/CropFreeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

import Footer from '../components/Footer';

import heroImg from '../assets/f26f355b462649113030101ac9dd6b682e998ba4.jpg';
import ctaBg from '../assets/3142198591aa88e2d75476d14bcf0111897e675e.jpg';

import h1 from '../assets/a12ddf13978a5743c80b828dffe469e075e1ca69.jpg';
import h2 from '../assets/454aba1b0c4c7a706d37f20cdabc6d8e7f5ddb80 (1).jpg';
import h3 from '../assets/73c6903a897f4616610e5212a7d9d2e96e2eb4c9.jpg';
import h4 from '../assets/e8961916c9fca913dd94d2de13a562dc82b208c6.jpg';
import h5 from '../assets/f49bdf8b4c969216e2fd92686258c37d8db4a4d0.jpg';
import h6 from '../assets/6c50ee169f27a03575d71b9637769b7833a4bb27 (1).jpg';
import h7 from '../assets/d4a4cffbf55a06577e9eaa51a0e09dd0de92d345.jpg';
import h8 from '../assets/e271e441dcc4fd1333f109447e022b1386f29ac4.jpg';

const houseImages = [h1, h2, h3, h4, h5, h6, h7, h8, h1, h2, h3, h4];

const FeatureItem = ({ icon, text }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
    <Box sx={{ color: '#eca668', display: 'flex' }}>
      {React.cloneElement(icon, { sx: { fontSize: 20 } })}
    </Box>
    <Typography sx={{ fontSize: '0.85rem', color: '#222', fontWeight: 500 }}>{text}</Typography>
  </Box>
);

const HouseCard = ({ title, price, image }) => (
  <Paper elevation={0} sx={{ border: '1px solid #f0f0f0', borderRadius: 0, height: '100%', display: 'flex', flexDirection: 'column' }}>
    <Box component="img" src={image} sx={{ width: '100%', height: 220, objectFit: 'cover' }} />
    <Box sx={{ p: { xs: 2, md: 3 }, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography sx={{ fontWeight: 800, fontSize: '1.2rem', color: '#111' }}>{title}</Typography>
        <Typography sx={{ fontWeight: 800, fontSize: '1.1rem', color: '#eca668' }}>{price}</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 4, flexGrow: 1 }}>
        <FeatureItem icon={<HomeOutlinedIcon />} text="Площадь дома - 139,8 м2" />
        <FeatureItem icon={<CropFreeOutlinedIcon />} text="Площадь участка - 5,1 сот." />
        <FeatureItem icon={<ArticleOutlinedIcon />} text="Тип участка - ИЖС" />
        <FeatureItem icon={<DomainOutlinedIcon />} text="Количество этажей - 2" />
        <FeatureItem icon={<MeetingRoomOutlinedIcon />} text="Количество комнат - 5" />
      </Box>
      <Button variant="outlined" fullWidth sx={{ 
        borderColor: '#e0e0e0', 
        color: '#111', 
        borderRadius: 0, 
        textTransform: 'none',
        fontWeight: 600,
        py: 1.2,
        '&:hover': { borderColor: '#eca668', backgroundColor: 'rgba(236,166,104,0.05)' }
      }}>
        Детали проекта
      </Button>
    </Box>
  </Paper>
);

const PopularHouseCard = ({ title, price, image }) => (
  <Paper elevation={0} sx={{ border: '1px solid #f0f0f0', borderRadius: 0 }}>
    <Box component="img" src={image} sx={{ width: '100%', height: { xs: 250, md: 350 }, objectFit: 'cover' }} />
    <Box sx={{ p: { xs: 2, md: 3 } }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography sx={{ fontWeight: 800, fontSize: '1.3rem', textTransform: 'uppercase', color: '#111' }}>{title}</Typography>
        <Typography sx={{ fontWeight: 800, fontSize: '1.2rem', color: '#eca668' }}>{price}</Typography>
      </Box>
      <Button variant="outlined" sx={{ 
        borderColor: '#e0e0e0', 
        color: '#111', 
        borderRadius: 0, 
        textTransform: 'none',
        fontWeight: 600,
        px: 4,
        py: 1.2,
        width: { xs: '100%', md: 'auto' },
        '&:hover': { borderColor: '#eca668', backgroundColor: 'rgba(236,166,104,0.05)' }
      }}>
        Детали проекта
      </Button>
    </Box>
  </Paper>
);

export default function HousesPage() {
  return (
    <Box sx={{ pt: 8 }}>
      {/* Hero Image */}
      <Box sx={{ width: '100%', mb: 6 }}>
        <Box component="img" src={heroImg} sx={{ width: '100%', height: { xs: 300, md: 500 }, objectFit: 'cover' }} />
      </Box>

      <Container maxWidth="lg" sx={{ mb: 6 }}>
        {/* Title */}
        <Typography variant="h3" sx={{ fontWeight: 800, textTransform: 'uppercase', fontSize: { xs: '2rem', md: '3rem' }, mb: 4 }}>
          НАШИ <span style={{ color: '#eca668', fontWeight: 400, fontStyle: 'italic' }}>ПРОЕКТЫ ДОМОВ</span>
        </Typography>

        {/* Filters */}
        <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'center' }, flexWrap: 'wrap', gap: 2, mb: 6 }}>
          {['1-х этажные', '2-х этажные', 'Таунхаусы'].map(t => (
            <Button key={t} variant="outlined" sx={{ 
              borderColor: '#e0e0e0', color: '#444', borderRadius: 0, px: 3, py: 1, textTransform: 'none', fontWeight: 500
            }}>
              {t}
            </Button>
          ))}
          <Button variant="outlined" startIcon={<MapOutlinedIcon sx={{ color: '#444' }}/>} sx={{ 
            borderColor: '#666', color: '#222', borderRadius: 0, px: 3, py: 1, textTransform: 'none', fontWeight: 600
          }}>
            На карте
          </Button>
          <Button variant="contained" sx={{ 
            backgroundColor: '#eca668', color: 'white', borderRadius: 0, px: 4, py: 1, textTransform: 'none', fontWeight: 600, boxShadow: 'none',
            '&:hover': { backgroundColor: '#d16a15', boxShadow: 'none' }
          }}>
            Все дома
          </Button>
        </Box>

        {/* Breadcrumbs */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#666', mb: 4 }}>
          <Typography sx={{ fontWeight: 500 }}>Главная</Typography>
          <Typography sx={{ color: '#ccc' }}>•</Typography>
          <Typography sx={{ fontWeight: 700, color: 'black' }}>Дома</Typography>
        </Box>
        <Box sx={{ width: '100%', height: '1px', backgroundColor: '#eca668', opacity: 0.3, mb: 6 }} />

        {/* First Grid (1-6) */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {[1, 2, 3, 4, 5, 6].map((num, i) => (
            <Grid item xs={12} md={4} key={`win-${num}`}>
              <HouseCard 
                title={`Win-${num}`} 
                price="13 800 000 ₽" 
                image={houseImages[i]} 
              />
            </Grid>
          ))}
        </Grid>

        {/* Popular Projects */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, md: 3 }, mb: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 800, textTransform: 'uppercase', fontSize: { xs: '1.5rem', md: '2rem' }, whiteSpace: 'nowrap' }}>
              ПОПУЛЯРНЫЕ <span style={{ color: '#eca668', fontWeight: 400, fontStyle: 'italic' }}>ПРОЕКТЫ</span>
            </Typography>
            <Box sx={{ flexGrow: 1, height: '1px', backgroundColor: '#eca668', opacity: 0.3 }} />
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <PopularHouseCard title="WIN-1" price="13 800 000 ₽" image={houseImages[0]} />
            </Grid>
            <Grid item xs={12} md={6}>
              <PopularHouseCard title="WIN-6" price="15 500 000 ₽" image={houseImages[5]} />
            </Grid>
          </Grid>
        </Box>

        {/* Second Grid (7-12) */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {[7, 8, 9, 10, 11, 12].map((num, i) => (
            <Grid item xs={12} md={4} key={`win-${num}`}>
              <HouseCard 
                title={`Win-${num}`} 
                price="13 800 000 ₽" 
                image={houseImages[i + 6]} 
              />
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 8, flexWrap: 'wrap' }}>
          <Button sx={{ minWidth: 0, color: '#666', border: '1px solid #f0f0f0', borderRadius: 0, px: { xs: 1.5, md: 2 }, textTransform: 'none' }}>&lt; Пред.</Button>
          <Button sx={{ minWidth: { xs: 35, md: 45 }, border: '1px solid #eca668', color: '#eca668', borderRadius: 0, fontWeight: 700 }}>1</Button>
          {[2, 3, 4].map(n => (
            <Button key={n} sx={{ minWidth: { xs: 35, md: 45 }, color: '#666', border: '1px solid #f0f0f0', borderRadius: 0 }}>{n}</Button>
          ))}
          <Button sx={{ minWidth: 0, color: '#111', border: '1px solid #f0f0f0', borderRadius: 0, px: { xs: 1.5, md: 2 }, textTransform: 'none' }}>След. &gt;</Button>
        </Box>
      </Container>

      {/* CTA Section */}
      <Box sx={{ 
        position: 'relative',
        width: '100%',
        py: { xs: 8, md: 12 },
        backgroundImage: `url("${ctaBg}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
          zIndex: 1
        }
      }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, color: 'white', textAlign: 'center' }}>
          <Typography variant="h2" sx={{ fontWeight: 700, fontSize: { xs: '1.4rem', md: '2.2rem' }, mb: 1, textTransform: 'uppercase', lineHeight: 1.3 }}>
            СПЕШИТЕ ЗАБРОНИРОВАТЬ ДОМ В<br/>
            КОТТЕДЖНОМ ПОСЁЛКЕ <span style={{ color: '#eca668' }}>ИЗУМРУДНЫЙ VILLAGE</span>
          </Typography>
          
          <Box sx={{ width: { xs: '90%', md: '60%' }, height: '1px', backgroundColor: 'rgba(255,255,255,0.3)', mx: 'auto', mt: 3, mb: 4 }} />

          <Typography sx={{ fontSize: '1.2rem', mb: 6, fontWeight: 500 }}>
            Количество свободных участков: <span style={{ color: '#eca668', fontWeight: 700 }}>12</span>
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 2, md: 3 }, flexWrap: 'wrap' }}>
            <Button variant="contained" sx={{ 
              backgroundColor: '#eca668', 
              color: 'white', 
              borderRadius: 0, 
              px: { xs: 3, md: 5 }, 
              py: { xs: 1.5, md: 2 }, 
              textTransform: 'uppercase',
              fontWeight: 700,
              fontSize: '0.85rem',
              boxShadow: 'none',
              '&:hover': { backgroundColor: '#d16a15', boxShadow: 'none' }
            }}>
              СВЯЗАТЬСЯ С МЕНЕДЖЕРОМ
            </Button>
            <Button variant="contained" sx={{ 
              backgroundColor: 'rgba(255,255,255,0.85)', 
              color: 'black', 
              borderRadius: 0, 
              px: { xs: 3, md: 5 }, 
              py: { xs: 1.5, md: 2 }, 
              textTransform: 'uppercase',
              fontWeight: 700,
              fontSize: '0.85rem',
              boxShadow: 'none',
              '&:hover': { backgroundColor: 'white', boxShadow: 'none' }
            }}>
              ОСТАВИТЬ ЗАЯВКУ
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Sales Office Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, mb: 8 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, md: 4 }, mb: { xs: 4, md: 6 } }}>
          <Typography variant="h3" sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: { xs: '1.8rem', md: '2.5rem' }, whiteSpace: 'nowrap' }}>
            <span style={{ color: '#eca668', fontWeight: 400, fontStyle: 'italic' }}>ОФИС</span> ПРОДАЖ
          </Typography>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'flex-start', height: { xs: 20, md: 40 }, mt: { xs: 1, md: 2 } }}>
             <Box sx={{ flexGrow: 1, height: '1px', backgroundColor: '#eca668', opacity: 0.4 }} />
             <Box sx={{ width: '1px', height: '100%', backgroundColor: '#eca668', opacity: 0.4 }} />
          </Box>
        </Box>

        <Box sx={{ position: 'relative', width: '100%', height: { xs: 'auto', md: 550 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
          {/* Map Background */}
          <Box sx={{ width: '100%', height: { xs: 400, md: '100%' }, position: { xs: 'relative', md: 'absolute' }, top: 0, left: 0, zIndex: 1 }}>
            <iframe 
              src="https://yandex.ru/map-widget/v1/?ll=49.192348%2C55.750131&z=11" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              allowFullScreen="true"
              style={{ border: 0 }}
            />
          </Box>

          {/* White Info Box */}
          <Paper elevation={3} sx={{ 
            position: { xs: 'relative', md: 'absolute' },
            top: { xs: 0, md: '50%' },
            transform: { xs: 'none', md: 'translateY(-50%)' },
            left: { xs: 0, md: 40 },
            width: { xs: '100%', md: 450 },
            p: { xs: 4, md: 5 },
            zIndex: 2,
            borderRadius: 0,
            backgroundColor: 'white'
          }}>
            <Typography sx={{ fontWeight: 700, fontSize: '2rem', mb: 1, textAlign: 'center' }}>
              Центральный офис
            </Typography>
            <Typography sx={{ fontSize: '1rem', textAlign: 'center', mb: 4, px: { xs: 0, sm: 2 }, lineHeight: 1.4 }}>
              вы можете обратиться к нашим менеджерам по любому вопросу
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LocationOnOutlinedIcon sx={{ color: '#eca668', fontSize: 32 }} />
                <Typography sx={{ fontSize: '1.2rem', fontWeight: 500 }}>г.Казань, ул.Яркая 31 Б</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <AccessTimeIcon sx={{ color: '#eca668', fontSize: 32 }} />
                <Typography sx={{ fontSize: '1.2rem', fontWeight: 500 }}>Пн-Сб: с 9:00 до 18:00</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <PhoneOutlinedIcon sx={{ color: '#eca668', fontSize: 32 }} />
                <Typography sx={{ fontSize: '1.2rem', fontWeight: 500 }}>+7 (962) 555-25-25</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant="contained" sx={{ 
                backgroundColor: '#eca668', 
                color: 'white', 
                borderRadius: 0, 
                px: 4, py: 1.5, 
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                boxShadow: 'none',
                '&:hover': { backgroundColor: '#d16a15', boxShadow: 'none' }
              }}>
                Проложить маршрут
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}
