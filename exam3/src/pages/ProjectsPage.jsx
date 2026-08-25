import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import Footer from '../components/Footer';

import theNewImg from '../assets/e271e441dcc4fd1333f109447e022b1386f29ac4.jpg';
import iqclubImg from '../assets/454aba1b0c4c7a706d37f20cdabc6d8e7f5ddb80 (1).jpg';
import zimnyayaImg from '../assets/e8961916c9fca913dd94d2de13a562dc82b208c6.jpg';
import usadyImg from '../assets/f49bdf8b4c969216e2fd92686258c37d8db4a4d0.jpg';
import konstantinovkaImg from '../assets/a12ddf13978a5743c80b828dffe469e075e1ca69.jpg';
import ctaBg from '../assets/3142198591aa88e2d75476d14bcf0111897e675e.jpg';

const LargeProjectCard = ({ image, titleFirst, titleSecond, locationText, statusText, description }) => (
  <Box sx={{ position: 'relative', mb: { xs: 20, md: 25 }, width: '100%' }}>
    <Box component="img" src={image} sx={{ width: '100%', height: { xs: 350, md: 550 }, objectFit: 'cover' }} />
    <Paper elevation={3} sx={{ 
      position: 'absolute', 
      bottom: 0, 
      left: { xs: 15, md: 40 }, 
      right: { xs: 15, md: 40 }, 
      transform: 'translateY(50%)',
      p: { xs: 3, md: 4 }, 
      borderRadius: 0,
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      justifyContent: 'space-between',
      alignItems: { xs: 'flex-start', md: 'center' },
      gap: 3,
      backgroundColor: 'white',
      zIndex: 2
    }}>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, textTransform: 'uppercase', mb: 2, fontSize: { xs: '1.5rem', md: '2.2rem' } }}>
          <span style={{ color: '#eca668' }}>{titleFirst}</span> {titleSecond}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LocationOnOutlinedIcon sx={{ color: '#eca668', fontSize: 20 }} />
          <Typography sx={{ fontSize: '1rem', fontWeight: 500 }}>
            {locationText} <span style={{ color: '#eca668' }}>{statusText}</span>
          </Typography>
        </Box>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.5, fontWeight: 500 }}>
          {description}
        </Typography>
      </Box>
    </Paper>
  </Box>
);

const SmallProjectCard = ({ image, title, statusText, locationText }) => (
  <Box sx={{ position: 'relative', width: '100%', mb: { xs: 10, md: 15 } }}>
    <Box component="img" src={image} sx={{ width: '100%', height: { xs: 250, md: 300 }, objectFit: 'cover' }} />
    <Paper elevation={3} sx={{ 
      position: 'absolute', 
      bottom: 0, 
      left: 15, 
      right: 15, 
      transform: 'translateY(50%)',
      p: 2, 
      borderRadius: 0,
      backgroundColor: 'white',
      zIndex: 2
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Typography sx={{ fontWeight: 700, fontSize: '1.1rem' }}>{title}</Typography>
        <Typography sx={{ fontSize: '0.8rem', color: '#eca668', fontWeight: 500 }}>{statusText}</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <LocationOnOutlinedIcon sx={{ color: '#eca668', fontSize: 18 }} />
        <Typography sx={{ fontSize: '0.85rem' }}>{locationText}</Typography>
      </Box>
    </Paper>
  </Box>
);

export default function ProjectsPage() {
  return (
    <Box sx={{ pt: 12 }}>
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Typography variant="h3" sx={{ fontWeight: 800, textTransform: 'uppercase', fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 2 }}>
          НАШИ <span style={{ color: '#eca668', fontWeight: 400, fontStyle: 'italic' }}>ПРОЕКТЫ</span>
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#666', mb: 6 }}>
          <Typography sx={{ fontWeight: 500 }}>Главная</Typography>
          <Typography sx={{ color: '#ccc' }}>•</Typography>
          <Typography sx={{ fontWeight: 700, color: 'black' }}>Все проекты</Typography>
        </Box>

        <Box sx={{ width: '100%', height: '1px', backgroundColor: '#eca668', opacity: 0.3, mb: 6 }} />

        <LargeProjectCard 
          image={theNewImg} 
          titleFirst="ИЗУМРУДНЫЙ" titleSecond="VILLAGE"
          locationText="8 минут от метро Дубравная." statusText="Дома сдаются"
          description="Коттеджный посёлок категории Бизнес. Обособленная охраняемая территория на 40 частных домовладений и 25 таунхаусов в 25 минутах от центра Казани"
        />
        
        <LargeProjectCard 
          image={iqclubImg} 
          titleFirst="IQ" titleSecond="CLUB"
          locationText="Начало строительства -" statusText="I квартал 2024 года"
          description="Таунхаус-клуб IQ CLUB - это инновационный жилой комплекс, где все жилые здания представляют собой комфортные таунхаусы"
        />
        
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
            <SmallProjectCard image={zimnyayaImg} title="Зимняя Горка" statusText="Все дома сданы" locationText="10 минут от Казанского аэропорта" />
          </Grid>
          <Grid item xs={12} md={4}>
            <SmallProjectCard image={usadyImg} title="Усады Village" statusText="Все дома сданы" locationText="Поселок в черте города" />
          </Grid>
          
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ 
        position: 'relative',
        width: '100%',
        py: { xs: 8, md: 12 },
        backgroundImage: `url("${ctaBg}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        mt: 10,
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
