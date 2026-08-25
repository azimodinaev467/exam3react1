import React, { useState } from 'react';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { Box, Typography, Container, useTheme, useMediaQuery, Grid, Paper, Divider, Button } from '@mui/material';
import Footer from '../components/Footer';
import bgImage from '../assets/8b105cd425cb5fff26e2cea88f3dc2d839047b2c.jpg';
import img1 from '../assets/2fdef2e16e2796f310dc07944ed02f324bac5b15.jpg';
import img2 from '../assets/2fdef2e16e2796f310dc07944ed02f324bac5b15 (1).jpg';
import iconSchool from '../assets/Vector (16).png';
import iconBus from '../assets/Иконка автобус.png';
import iconMall from '../assets/Иконка ТЦ.png';
import iconMap from '../assets/map_e04bf38tc7sp 1.png';
import planImage from '../assets/c4f2c3a13af786ee898e9c955fdec1908d985edd.png';
import galleryImage from '../assets/c6c33d5498b4277a1f97a6f09a7d458b9ca4f259.jpg';

export default function IzumrudniyPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeMarker, setActiveMarker] = useState(null);

  const features = [
    { icon: iconSchool, text: 'Рядом есть детские сады и школы' },
    { icon: iconBus, text: 'Доступность общественного транспорта' },
    { icon: iconMall, text: 'Большое количество магазинов и ТЦ' },
    { icon: iconMap, text: 'Развитая внутренняя инфраструктура - есть всё на территории клуба' },
  ];

  const mapMarkers = [
    { id: 1, top: '69%', left: '62%', title: 'КПП №1' },
    { id: 2, top: '59%', left: '73%', title: 'Объект №2' },
    { id: 3, top: '32%', left: '61%', title: 'Объект №3' },
    { id: 4, top: '26%', left: '54%', title: 'Объект №4' },
    { id: 5, top: '76%', left: '34%', title: 'Объект №5' },
  ];

  const mallDistances = [
    { id: 1, name: 'ТЦ Южный', time: '26 минут' },
    { id: 2, name: 'ТЦ Мега', time: '28 минут' },
    { id: 3, name: 'ТЦ Кольцо', time: '32 минуты' },
    { id: 4, name: 'ТЦ Парк Хаус', time: '45 минут' },
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
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, color: 'white' }}>
          <Typography variant="h6" sx={{ fontWeight: 400, mb: 1, fontSize: { xs: '1rem', md: '1.2rem' } }}>
            Коттеджный посёлок бизнес-класса
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: { xs: 1, md: 2 } }}>
             <Typography variant="h1" sx={{ fontWeight: 700, fontSize: { xs: '2.5rem', md: '5rem' }, color: '#df924e', textTransform: 'uppercase', lineHeight: 1 }}>
                ИЗУМРУДНЫЙ
             </Typography>
             <Typography variant="h1" sx={{ fontWeight: 700, fontSize: { xs: '2.5rem', md: '5rem' }, color: 'white', textTransform: 'uppercase', lineHeight: 1 }}>
                VILLAGE
             </Typography>
          </Box>
        </Container>
      </Box>

      {/* About Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 4, md: 6 } }}>
          <Box sx={{ width: 28, height: 28, borderRadius: '50%', border: '4px solid #df924e', mr: 2 }} />
          <Typography variant="h3" sx={{ fontWeight: 700, color: '#df924e', textTransform: 'uppercase', fontSize: { xs: '2rem', md: '2.5rem' } }}>
            О ПРОЕКТЕ
          </Typography>
        </Box>

        {isMobile && (
           <Typography sx={{ fontSize: '1.1rem', mb: 5, lineHeight: 1.6 }}>
             <span style={{ color: '#df924e', fontWeight: 600 }}>ИЗУМРУДНЫЙ VILLAGE</span> - это коттеджный посёлок категории Бизнес. Обособленная охраняемая территория на 40 частных домовладений и 25 таунхаусов в 25 минутах от центра Казани.
           </Typography>
        )}

        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={5}>
            <Box sx={{ position: 'relative', height: { xs: 450, md: 550 }, width: '100%', maxWidth: 450, mx: { xs: 'auto', md: 0 } }}>
              <Box 
                sx={{ position: 'absolute', top: '10%', left: '12%', width: '76%', height: '75%', border: '1px solid #df924e', zIndex: 0 }} 
              />
              <Box 
                component="img" src={img1}
                sx={{ position: 'absolute', top: '20%', left: 0, width: '46%', height: '80%', objectFit: 'cover', zIndex: 2 }}
              />
              <Box 
                component="img" src={img2}
                sx={{ position: 'absolute', top: '15%', right: 0, width: '46%', height: '65%', objectFit: 'cover', zIndex: 2 }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            {!isMobile && (
              <Typography sx={{ fontSize: '1.1rem', mb: 6, maxWidth: 500, lineHeight: 1.6 }}>
                <span style={{ color: '#df924e', fontWeight: 600 }}>ИЗУМРУДНЫЙ VILLAGE</span> - это коттеджный посёлок категории Бизнес. Обособленная охраняемая территория на 40 частных домовладений и 25 таунхаусов в 25 минутах от центра Казани.
              </Typography>
            )}

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {features.map((feature, idx) => (
                <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <Box component="img" src={feature.icon} sx={{ width: 45, height: 45, objectFit: 'contain' }} />
                  <Typography sx={{ fontSize: '1.05rem', maxWidth: 350, fontWeight: 500 }}>{feature.text}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Plan Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, mb: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 4, textTransform: 'uppercase', fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
          ПЛАН <span style={{ color: '#E87A1E', fontWeight: 300 }}>ПОСЁЛКА</span>
        </Typography>

        <Box sx={{ width: '100%', overflowX: { xs: 'auto', md: 'visible' }, pb: { xs: 2, md: 0 }, position: 'relative' }}>
          <Box sx={{ position: 'relative', width: { xs: '800px', md: '100%' }, minWidth: '800px' }}>
            <Box component="img" src={planImage} sx={{ width: '100%', display: 'block' }} />

            {mapMarkers.map((marker) => (
              <Box
                key={marker.id}
                onClick={() => setActiveMarker(activeMarker === marker.id ? null : marker.id)}
                sx={{
                  position: 'absolute', top: marker.top, left: marker.left, width: 32, height: 32,
                  backgroundColor: '#E87A1E', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', transform: 'translate(-50%, -50%)',
                  transition: 'transform 0.2s, box-shadow 0.2s', zIndex: activeMarker === marker.id ? 10 : 2,
                  boxShadow: activeMarker === marker.id ? '0 0 0 6px rgba(232,122,30,0.3)' : 'none',
                  '&:hover': { transform: 'translate(-50%, -50%) scale(1.1)' }
                }}
              >
                {marker.id}
                
                {activeMarker === marker.id && (
                  <Paper elevation={4} sx={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(15px, -50%)', display: 'flex', alignItems: 'center', gap: 2, px: 2, py: 1, minWidth: 160, borderRadius: 0, zIndex: 20, backgroundColor: 'rgba(255,255,255,0.95)' }} onClick={(e) => e.stopPropagation()}>
                    <Box sx={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid #E87A1E', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black', fontSize: '1.2rem', fontWeight: 500 }}>{marker.id}</Box>
                    <Typography sx={{ fontWeight: 500, fontSize: '1.2rem', color: 'black' }}>{marker.title}</Typography>
                  </Paper>
                )}
              </Box>
            ))}

            {isMobile && (
              <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center', pointerEvents: 'none', backgroundColor: 'rgba(0,0,0,0.5)', padding: '10px 20px', borderRadius: '8px' }}>
                <Typography variant="body1">Для перемещения по плану листайте вбок</Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Container>

      {/* Transport Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, mb: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: { xs: 4, md: 6 }, textTransform: 'uppercase', fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
          ТРАНСПОРТНАЯ <span style={{ color: '#E87A1E', fontWeight: 300 }}>ДОСТУПНОСТЬ</span>
        </Typography>

        <Grid container spacing={4} sx={{ mb: { xs: 6, md: 8 } }}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
              <span style={{ color: '#E87A1E', fontWeight: 600 }}>ИЗУМРУДНЫЙ VILLAGE</span> расположен в Приволжском районе Казани, по соседству с жилым комплексом Изумрудный. Рядом с поселком есть все для комфортной жизни.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
              Хорошая транспортная и пешеходная доступность, социальная и инженерная инфраструктура: детские сады, школы, административные учреждения.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <Grid item xs={12} sm={4}>
            <Typography sx={{ color: '#E87A1E', fontSize: { xs: '3rem', md: '4rem' }, fontWeight: 500, lineHeight: 1 }}>3 <span style={{ fontSize: '2rem' }}>мин</span></Typography>
            <Divider sx={{ my: 2, borderColor: '#E87A1E', mx: 'auto', width: '80%' }} />
            <Typography variant="h6" sx={{ fontWeight: 500 }}>до автобусной остановки</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography sx={{ color: '#E87A1E', fontSize: { xs: '3rem', md: '4rem' }, fontWeight: 500, lineHeight: 1 }}>5 <span style={{ fontSize: '2rem' }}>мин</span></Typography>
            <Divider sx={{ my: 2, borderColor: '#E87A1E', mx: 'auto', width: '80%' }} />
            <Typography variant="h6" sx={{ fontWeight: 500 }}>до детского сада и школы</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography sx={{ color: '#E87A1E', fontSize: { xs: '3rem', md: '4rem' }, fontWeight: 500, lineHeight: 1 }}>8 <span style={{ fontSize: '2rem' }}>мин</span></Typography>
            <Divider sx={{ my: 2, borderColor: '#E87A1E', mx: 'auto', width: '80%' }} />
            <Typography variant="h6" sx={{ fontWeight: 500 }}>до лесопарка Дубрава</Typography>
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'space-between', mb: { xs: 6, md: 8 } }}>
          {mallDistances.map((mall) => (
            <Paper key={mall.id} variant="outlined" sx={{ display: 'flex', flexDirection: 'column', p: 2, width: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(25% - 12px)' }, borderColor: '#E87A1E', borderRadius: 0 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Box sx={{ width: 24, height: 24, backgroundColor: '#E87A1E', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 600 }}>
                  {mall.id}
                </Box>
                <Typography sx={{ fontWeight: 500, fontSize: '0.95rem' }}>{mall.name}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#E87A1E' }}>
                <DirectionsCarIcon sx={{ fontSize: 20 }} />
                <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', color: 'black' }}>{mall.time}</Typography>
              </Box>
            </Paper>
          ))}
        </Box>

        {/* Real Yandex Map */}
        <Box sx={{ position: 'relative', width: '100%', height: { xs: 400, md: 600 }, mb: 4 }}>
          <iframe 
            src="https://yandex.ru/map-widget/v1/?ll=49.192348%2C55.750131&z=11" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            allowFullScreen="true"
            style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
          />
          <Box sx={{ position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
            <Button variant="outlined" sx={{ 
              backgroundColor: 'white', 
              color: 'black', 
              borderColor: '#E87A1E', 
              borderWidth: 1,
              px: 4, py: 1.5,
              fontWeight: 500,
              borderRadius: 0,
              textTransform: 'none',
              fontSize: '1.05rem',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              '&:hover': {
                borderWidth: 1,
                borderColor: '#E87A1E',
                backgroundColor: '#fafafa'
              }
            }}>
              Построить маршрут
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Gallery Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, mb: 4, overflow: 'hidden' }}>
        <Box sx={{ mb: { xs: 4, md: 6 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' }, gap: { xs: 0, md: 1 } }}>
           {isMobile ? (
             <Box sx={{ width: '100%' }}>
               <Typography variant="h3" sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: '2rem', textAlign: 'left' }}>ГАЛЕРЕЯ</Typography>
               <Typography variant="h3" sx={{ fontWeight: 300, textTransform: 'uppercase', fontSize: '2rem', color: '#E87A1E', textAlign: 'center' }}>ПОСТРОЕННЫХ</Typography>
               <Typography variant="h3" sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: '2rem', textAlign: 'right' }}>ДОМОВ</Typography>
             </Box>
           ) : (
             <Typography variant="h3" sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: '2.5rem' }}>
                ГАЛЕРЕЯ <span style={{ color: '#E87A1E', fontWeight: 300 }}>ПОСТРОЕННЫХ ДОМОВ</span>
             </Typography>
           )}
        </Box>

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
          {[1, 2, 3, 4, 5].map((item, index) => (
            <Box 
              key={item}
              sx={{ 
                minWidth: { xs: '85%', md: '75%' },
                scrollSnapAlign: 'center',
                position: 'relative'
              }}
            >
              <Box component="img" src={galleryImage} sx={{ width: '100%', height: { xs: 400, md: 600 }, objectFit: 'cover' }} />
              <Paper sx={{ 
                position: 'absolute', 
                bottom: { xs: 15, md: 30 }, 
                left: { xs: 15, md: 30 }, 
                p: { xs: 2, md: 3 }, 
                borderRadius: 0,
                minWidth: { xs: 220, md: 280 }
              }}>
                <Typography sx={{ fontWeight: 700, mb: 1, fontSize: '1.1rem' }}>Проект WIN20</Typography>
                <Typography sx={{ fontSize: '0.95rem' }}>дом сдан в 2021 году</Typography>
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
                backgroundColor: dot === 2 ? '#E87A1E' : '#E0E0E0', 
              }}
            />
          ))}
        </Box>
      </Container>

      {/* Popular Projects Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Box sx={{ width: { xs: '100%', md: 'auto' } }}>
            {isMobile ? (
              <Box>
                <Typography variant="h3" sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: '2rem', textAlign: 'left' }}>ПОПУЛЯРНЫЕ</Typography>
                <Typography variant="h3" sx={{ fontWeight: 300, textTransform: 'uppercase', fontSize: '2rem', color: '#E87A1E', textAlign: 'right' }}>ПРОЕКТЫ</Typography>
              </Box>
            ) : (
              <Typography variant="h3" sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: '2.5rem' }}>
                <span style={{ color: '#E87A1E' }}>ПОПУЛЯРНЫЕ</span> ПРОЕКТЫ
              </Typography>
            )}
          </Box>

          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ width: 45, height: 45, borderRadius: '50%', border: '1px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s', '&:hover': { borderColor: '#E87A1E', color: '#E87A1E' } }}>
                <Typography sx={{ color: 'inherit', fontSize: '1.2rem' }}>&lt;</Typography>
              </Box>
              <Box sx={{ width: 45, height: 45, borderRadius: '50%', border: '1px solid #E87A1E', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#E87A1E', transition: 'all 0.2s', '&:hover': { backgroundColor: '#E87A1E', color: 'white' } }}>
                <Typography sx={{ color: 'inherit', fontSize: '1.2rem' }}>&gt;</Typography>
              </Box>
            </Box>
          )}
        </Box>

        <Box sx={{ 
          display: 'flex', 
          overflowX: { xs: 'auto', md: 'visible' }, 
          gap: 3, 
          pb: 2,
          mx: { xs: -2, md: 0 },
          px: { xs: 2, md: 0 },
          '&::-webkit-scrollbar': { display: 'none' },
          scrollbarWidth: 'none'
        }}>
          {[
            { title: 'Таунхаус 130 кв.м.', type: 'Визуализация', img: img1 },
            { title: 'Проект WIN10', type: 'Визуализация', img: img2 },
            { title: 'Проект WIN16', type: 'Визуализация', img: galleryImage }
          ].map((item, index) => (
            <Box key={index} sx={{ minWidth: { xs: '80%', md: 'calc(33.333% - 16px)' }, flex: 1 }}>
              <Box component="img" src={item.img} sx={{ width: '100%', height: { xs: 280, md: 350 }, objectFit: 'cover', mb: 2 }} />
              <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', mb: 0.5 }}>{item.title}</Typography>
              <Typography sx={{ fontStyle: 'italic', color: '#666', fontSize: '0.95rem' }}>{item.type}</Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Available for Purchase Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, mb: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textTransform: 'uppercase', fontSize: { xs: '1.6rem', md: '2.5rem' }, textAlign: { xs: 'center', md: 'left' } }}>
          В НАСТОЯЩЕЕ ВРЕМЯ <br sx={{ display: { xs: 'block', md: 'none' } }} /><span style={{ color: '#E87A1E', fontWeight: 400 }}>ДЛЯ ПОКУПКИ</span><br sx={{ display: { xs: 'block', md: 'none' } }} /> ДОСТУПНЫ:
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box>
              <Box component="img" src={galleryImage} sx={{ width: '100%', height: { xs: 280, md: 380 }, objectFit: 'cover', mb: 2 }} />
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, gap: 2 }}>
                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', mb: 0.5, textTransform: 'uppercase' }}>Частный дом на участке</Typography>
                  <Typography sx={{ fontSize: '1.05rem', color: '#555' }}>Цена от <span style={{ fontWeight: 700, color: 'black' }}>15 500 000 ₽</span></Typography>
                </Box>
                <Button variant="contained" sx={{ 
                  backgroundColor: '#8B7355', 
                  color: 'white', 
                  borderRadius: 0, 
                  px: 4, py: 1.5, 
                  textTransform: 'none',
                  fontWeight: 500,
                  fontSize: '1rem',
                  width: { xs: '100%', sm: 'auto' },
                  boxShadow: 'none',
                  '&:hover': { backgroundColor: '#6b5740', boxShadow: 'none' }
                }}>
                  Продажи прекращены
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box>
              <Box component="img" src={img1} sx={{ width: '100%', height: { xs: 280, md: 380 }, objectFit: 'cover', mb: 2 }} />
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, gap: 2 }}>
                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', mb: 0.5, textTransform: 'uppercase' }}>Таунхаус второй очереди</Typography>
                  <Typography sx={{ fontSize: '1.05rem', color: '#555' }}>Цена от <span style={{ fontWeight: 700, color: 'black' }}>12 500 000 ₽</span></Typography>
                </Box>
                <Button variant="contained" sx={{ 
                  backgroundColor: '#E87A1E', 
                  color: 'white', 
                  borderRadius: 0, 
                  px: 4, py: 1.5, 
                  textTransform: 'none',
                  fontWeight: 500,
                  fontSize: '1rem',
                  width: { xs: '100%', sm: 'auto' },
                  boxShadow: 'none',
                  '&:hover': { backgroundColor: '#d16a15', boxShadow: 'none' }
                }}>
                  Идёт продажа
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Sales Office Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, mb: 8 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, md: 4 }, mb: { xs: 4, md: 6 } }}>
          <Typography variant="h3" sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: { xs: '1.8rem', md: '2.5rem' }, whiteSpace: 'nowrap' }}>
            <span style={{ color: '#E87A1E', fontWeight: 400 }}>ОФИС</span> ПРОДАЖ
          </Typography>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'flex-start', height: { xs: 20, md: 40 }, mt: { xs: 1, md: 2 } }}>
             <Box sx={{ flexGrow: 1, height: '1px', backgroundColor: '#E87A1E', opacity: 0.4 }} />
             <Box sx={{ width: '1px', height: '100%', backgroundColor: '#E87A1E', opacity: 0.4 }} />
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
                <LocationOnOutlinedIcon sx={{ color: '#E87A1E', fontSize: 32 }} />
                <Typography sx={{ fontSize: '1.2rem', fontWeight: 500 }}>г.Казань, ул.Яркая 31 Б</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <AccessTimeIcon sx={{ color: '#E87A1E', fontSize: 32 }} />
                <Typography sx={{ fontSize: '1.2rem', fontWeight: 500 }}>Пн-Сб: с 9:00 до 18:00</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <PhoneOutlinedIcon sx={{ color: '#E87A1E', fontSize: 32 }} />
                <Typography sx={{ fontSize: '1.2rem', fontWeight: 500 }}>+7 (962) 555-25-25</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant="contained" sx={{ 
                backgroundColor: '#E87A1E', 
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
