import React from 'react';
import { Box, Typography, Container, useTheme, useMediaQuery, Grid } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import Footer from '../components/Footer';
import bgImage from '../assets/f49bdf8b4c969216e2fd92686258c37d8db4a4d0.jpg';
import img1 from '../assets/6c50ee169f27a03575d71b9637769b7833a4bb27 (1).jpg';
import img2 from '../assets/c6c33d5498b4277a1f97a6f09a7d458b9ca4f259.jpg';
import img3 from '../assets/d4a4cffbf55a06577e9eaa51a0e09dd0de92d345.jpg';
import ctaBg from '../assets/3142198591aa88e2d75476d14bcf0111897e675e.jpg';
import { Paper, Button } from '@mui/material';

export default function UsadyPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const features = [
    { icon: <HomeOutlinedIcon sx={{ fontSize: 36, color: '#333' }} />, text: 'Строительство домов под ключ' },
    { icon: <BuildOutlinedIcon sx={{ fontSize: 36, color: '#333' }} />, text: 'Подвод всех коммуникаций' },
    { icon: <VideocamOutlinedIcon sx={{ fontSize: 36, color: '#333' }} />, text: 'Закрытая территория с пропускной системой безопасности' },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'flex-end',
          pb: { xs: 8, md: 15 },
          backgroundImage: `url("${bgImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 100%)',
            zIndex: 1
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, color: 'white' }}>
          <Typography variant="h6" sx={{ fontWeight: 400, mb: 1, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
            Построенные "под ключ" дома
          </Typography>
          <Typography variant="h1" sx={{ fontWeight: 800, fontSize: { xs: '4.5rem', md: '8rem' }, color: '#eca668', textTransform: 'uppercase', lineHeight: 1, letterSpacing: '-1px' }}>
            УСАДЫ
          </Typography>
        </Container>
      </Box>

      {/* About Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 }, mb: 8 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 6, md: 8 } }}>
          <Box sx={{ width: 32, height: 32, borderRadius: '50%', border: '4px solid #eca668', mr: 2 }} />
          <Typography variant="h3" sx={{ fontWeight: 700, color: '#eca668', textTransform: 'uppercase', fontSize: { xs: '2rem', md: '2.5rem' } }}>
            О ПРОЕКТЕ
          </Typography>
        </Box>

        {isMobile && (
           <Typography sx={{ fontSize: '1.2rem', mb: 5, lineHeight: 1.6, fontWeight: 500 }}>
             Усады - это проектное строительство частных домов на территории поселка Усады (г. Казань)
           </Typography>
        )}

        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={5}>
            <Box sx={{ position: 'relative', height: { xs: 450, md: 650 }, width: '100%', maxWidth: 450, mx: { xs: 'auto', md: 0 } }}>
              <Box 
                sx={{ position: 'absolute', top: '5%', left: '5%', width: '85%', height: '85%', border: '1px solid #eca668', zIndex: 0 }} 
              />
              <Box 
                component="img" src={img1}
                sx={{ position: 'absolute', top: '15%', left: 0, width: '47%', height: '85%', objectFit: 'cover', zIndex: 2 }}
              />
              <Box 
                component="img" src={img2}
                sx={{ position: 'absolute', top: '5%', right: 0, width: '47%', height: '70%', objectFit: 'cover', zIndex: 2 }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            {!isMobile && (
              <Typography sx={{ fontSize: '1.4rem', mb: 8, maxWidth: 550, lineHeight: 1.5, fontWeight: 500 }}>
                Усады - это проектное строительство частных домов на территории поселка Усады (г. Казань)
              </Typography>
            )}

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {features.map((feature, idx) => (
                <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 40 }}>
                    {feature.icon}
                  </Box>
                  <Typography sx={{ fontSize: '1.15rem', maxWidth: 400, fontWeight: 500, lineHeight: 1.4 }}>{feature.text}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Gallery Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, mb: 4, overflow: 'hidden' }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: { xs: 4, md: 6 }, textTransform: 'uppercase', fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
          ГАЛЕРЕЯ <span style={{ color: '#eca668', fontWeight: 300 }}>ПОСТРОЕННЫХ ДОМОВ</span>
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          overflowX: 'auto', 
          scrollSnapType: 'x mandatory', 
          gap: 2,
          pb: 2,
          mx: { xs: -2, md: -4 },
          px: { xs: 2, md: 4 },
          '&::-webkit-scrollbar': { display: 'none' },
          scrollbarWidth: 'none'
        }}>
          {[1, 2, 3].map((item) => (
            <Box 
              key={item}
              sx={{ 
                minWidth: { xs: '90%', md: '80%' },
                scrollSnapAlign: 'center',
                position: 'relative'
              }}
            >
              <Box component="img" src={img3} sx={{ width: '100%', height: { xs: 400, md: 600 }, objectFit: 'cover' }} />
              <Paper sx={{ 
                position: 'absolute', 
                bottom: { xs: 15, md: 30 }, 
                left: { xs: 15, md: 30 }, 
                p: { xs: 2, md: 3 }, 
                borderRadius: 0,
                minWidth: { xs: 220, md: 280 }
              }}>
                <Typography sx={{ fontWeight: 700, mb: 1, fontSize: '1.1rem' }}>Проект WIN8</Typography>
                <Typography sx={{ fontSize: '0.95rem', fontStyle: 'italic', color: '#555' }}>дом сдан в 2020 году</Typography>
              </Paper>
            </Box>
          ))}
        </Box>

        {/* Pagination Dots */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, mt: 4 }}>
          {[1, 2, 3, 4, 5].map((dot) => (
            <Box 
              key={dot}
              sx={{ 
                width: { xs: 25, md: 40 }, 
                height: 4, 
                backgroundColor: dot === 2 ? '#eca668' : '#E0E0E0', 
              }}
            />
          ))}
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
        mt: 4,
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
            КОТТЕДЖНОМ ПОСЕЛКЕ <span style={{ color: '#eca668' }}>УСАДЫ</span>
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

      {/* Other Projects Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, mb: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textTransform: 'uppercase', fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
          ДРУГИЕ <span style={{ color: '#eca668', fontWeight: 300 }}>ПРОЕКТЫ</span>
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 4, md: 6 } }}>
          <Box sx={{ width: { xs: '100%', md: '50%' }, maxWidth: { md: 520 } }}>
            <Box component="img" src={img2} sx={{ width: '100%', height: { xs: 240, md: 280 }, objectFit: 'cover', mb: 3 }} />
            <Typography sx={{ fontWeight: 700, fontSize: '1.3rem', mb: 1, textTransform: 'uppercase' }}>
              ИЗУМРУДНЫЙ VILLAGE
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationOnOutlinedIcon sx={{ color: '#eca668', fontSize: 20 }} />
              <Typography sx={{ fontSize: '0.95rem' }}>
                8 минут от метро Дубравная. <span style={{ color: '#eca668' }}>Дома сдаются</span>
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ width: { xs: '100%', md: '50%' }, maxWidth: { md: 520 } }}>
            <Box component="img" src={img1} sx={{ width: '100%', height: { xs: 240, md: 280 }, objectFit: 'cover', mb: 3 }} />
            <Typography sx={{ fontWeight: 700, fontSize: '1.3rem', mb: 1, textTransform: 'uppercase' }}>
              IQ CLUB
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationOnOutlinedIcon sx={{ color: '#eca668', fontSize: 20 }} />
              <Typography sx={{ fontSize: '0.95rem' }}>
                Начало строительства - <span style={{ color: '#eca668' }}>I квартал 2024 года</span>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

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
