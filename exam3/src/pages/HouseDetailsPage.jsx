import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Paper, Button, IconButton, Select, MenuItem, FormControl, InputLabel, Slider, TextField } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CropFreeOutlinedIcon from '@mui/icons-material/CropFreeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import CheckIcon from '@mui/icons-material/Check';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ViewDayOutlinedIcon from '@mui/icons-material/ViewDayOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import Footer from '../components/Footer';

// Use available images
import h1 from '../assets/a12ddf13978a5743c80b828dffe469e075e1ca69.jpg';
import h2 from '../assets/454aba1b0c4c7a706d37f20cdabc6d8e7f5ddb80 (1).jpg';
import h3 from '../assets/73c6903a897f4616610e5212a7d9d2e96e2eb4c9.jpg';
import h4 from '../assets/e8961916c9fca913dd94d2de13a562dc82b208c6.jpg';
import h5 from '../assets/f49bdf8b4c969216e2fd92686258c37d8db4a4d0.jpg';
import h6 from '../assets/6c50ee169f27a03575d71b9637769b7833a4bb27 (1).jpg';
import mainImg from '../assets/de31749ea7c6a409e4ae968daffd873007ff9b61.jpg';

const thumbnails = [h1, h2, h3, h4, h5, h6];

const FeatureItem = ({ icon, text }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
    <Box sx={{ color: '#eca668', display: 'flex' }}>
      {React.cloneElement(icon, { sx: { fontSize: 24 } })}
    </Box>
    <Typography sx={{ fontSize: '0.95rem', color: '#222', fontWeight: 500 }}>{text}</Typography>
  </Box>
);

const ListSection = ({ title, items }) => (
  <Box sx={{ mb: 4 }}>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
      <ViewDayOutlinedIcon sx={{ color: '#eca668', fontSize: 28 }} />
      <Typography sx={{ fontWeight: 700, fontSize: '1.2rem', color: '#111' }}>{title}</Typography>
    </Box>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      {items.map((item, i) => (
        <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
          <CheckIcon sx={{ fontSize: 18, color: '#111', mt: 0.3 }} />
          <Typography sx={{ fontSize: '0.95rem', color: '#333' }}>{item}</Typography>
        </Box>
      ))}
    </Box>
  </Box>
);

const SimilarHouseCard = ({ title, area, plot, image }) => (
  <Paper elevation={0} sx={{ border: '1px solid #f0f0f0', borderRadius: 0, height: '100%', display: 'flex', flexDirection: 'column' }}>
    <Box component="img" src={image} sx={{ width: '100%', height: 200, objectFit: 'cover' }} />
    <Box sx={{ p: { xs: 2, md: 3 }, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <Typography sx={{ fontWeight: 800, fontSize: '1.2rem', color: '#111', mb: 2 }}>{title}</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3, flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <HomeOutlinedIcon sx={{ color: '#eca668', fontSize: 20 }} />
          <Typography sx={{ fontSize: '0.85rem', color: '#222' }}>Площадь дома - {area}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <CropFreeOutlinedIcon sx={{ color: '#eca668', fontSize: 20 }} />
          <Typography sx={{ fontSize: '0.85rem', color: '#222' }}>Площадь участка - {plot}</Typography>
        </Box>
      </Box>
      <Button variant="outlined" fullWidth sx={{ 
        borderColor: '#e0e0e0', color: '#111', borderRadius: 0, textTransform: 'none', fontWeight: 600, py: 1,
        '&:hover': { borderColor: '#eca668', backgroundColor: 'rgba(236,166,104,0.05)' }
      }}>
        Детали проекта
      </Button>
    </Box>
  </Paper>
);

export default function HouseDetailsPage() {
  const [activeImg, setActiveImg] = useState(mainImg);

  return (
    <Box sx={{ pt: 12 }}>
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        {/* Breadcrumbs */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#666', mb: 4, flexWrap: 'wrap' }}>
          <Typography sx={{ fontWeight: 500 }}>Главная</Typography>
          <Typography sx={{ color: '#ccc' }}>•</Typography>
          <Typography sx={{ fontWeight: 500 }}>Все проекты</Typography>
          <Typography sx={{ color: '#ccc' }}>•</Typography>
          <Typography sx={{ fontWeight: 700, color: 'black' }}>Dom-1</Typography>
        </Box>

        {/* Hero Section */}
        <Grid container spacing={6} sx={{ mb: 8 }}>
          <Grid item xs={12} md={7}>
            <Box sx={{ position: 'relative', width: '100%', height: { xs: 250, md: 450 }, mb: 2 }}>
              <Box component="img" src={activeImg} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <IconButton sx={{ position: 'absolute', top: '50%', left: 10, transform: 'translateY(-50%)', backgroundColor: 'rgba(255,255,255,0.8)', '&:hover': { backgroundColor: 'white' } }}>
                <ChevronLeftIcon />
              </IconButton>
              <IconButton sx={{ position: 'absolute', top: '50%', right: 10, transform: 'translateY(-50%)', backgroundColor: 'rgba(255,255,255,0.8)', '&:hover': { backgroundColor: 'white' } }}>
                <ChevronRightIcon />
              </IconButton>
            </Box>
            <Box sx={{ display: 'flex', gap: 1, overflowX: 'auto', '&::-webkit-scrollbar': { display: 'none' } }}>
              {thumbnails.map((thumb, idx) => (
                <Box 
                  key={idx} 
                  component="img" 
                  src={thumb} 
                  onClick={() => setActiveImg(thumb)}
                  sx={{ width: { xs: 60, md: 80 }, height: { xs: 45, md: 60 }, objectFit: 'cover', cursor: 'pointer', opacity: activeImg === thumb ? 1 : 0.6, transition: 'opacity 0.2s', '&:hover': { opacity: 1 } }} 
                />
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Typography variant="h4" sx={{ fontWeight: 800, fontSize: { xs: '1.6rem', md: '2.2rem' }, lineHeight: 1.2, mb: 4 }}>
              Дом в классическом стиле<br/>площадью 139,8 м2
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, mb: 5 }}>
              <FeatureItem icon={<HomeOutlinedIcon />} text="Площадь дома - 139,8 м2" />
              <FeatureItem icon={<CropFreeOutlinedIcon />} text="Площадь участка - 5,1 сот." />
              <FeatureItem icon={<ArticleOutlinedIcon />} text="Тип участка - ИЖС" />
              <FeatureItem icon={<DomainOutlinedIcon />} text="Количество этажей - 2" />
              <FeatureItem icon={<MeetingRoomOutlinedIcon />} text="Количество комнат - 5" />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
              <Typography sx={{ fontSize: '1.2rem', fontWeight: 500 }}>Цена</Typography>
              <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, color: '#eca668' }}>13 800 000 ₽</Typography>
            </Box>

            <Button variant="contained" fullWidth sx={{ 
              backgroundColor: '#eca668', color: 'white', borderRadius: 0, py: 2, textTransform: 'uppercase', fontWeight: 700, fontSize: '1rem', boxShadow: 'none',
              '&:hover': { backgroundColor: '#d16a15', boxShadow: 'none' }
            }}>
              ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
            </Button>
          </Grid>
        </Grid>

        {/* Details & Mortgage Section */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 4, md: 6 }, mb: 10 }}>
          <Box sx={{ flex: 1.4, backgroundColor: '#fafafa', p: { xs: 3, md: 4 } }}>
            <ListSection 
              title="Типы помещений" 
              items={[
                '4 просторные спальни',
                '2 с/у',
                'кухня-гостиная',
                'гардеробная',
                'терраса',
                'мансардный этаж',
                'парковка на 3 машины'
              ]} 
            />
            <ListSection 
              title="Общие характеристики" 
              items={[
                'керамоблок не требующий утепления',
                'толщина стен пол метра',
                'кровля утеплена',
                'ж/б межэтажные перекрытия',
                'лестница входит в комплектацию (металлокаркас)',
                'предчистовая отделка White Box'
              ]} 
            />
            <ListSection 
              title="Коммуникации и удобства" 
              items={[
                'газ',
                'вода',
                'электричество',
                'канализация',
                'отопление'
              ]} 
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Paper elevation={0} sx={{ backgroundColor: '#fafafa', p: { xs: 3, md: 4 }, borderRadius: 0, height: '100%' }}>
              <Typography sx={{ fontWeight: 800, fontSize: '1.5rem', mb: 4, textTransform: 'uppercase' }}>ИПОТЕКА</Typography>
              
              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={6}>
                  <FormControl fullWidth size="small">
                    <Typography sx={{ fontSize: '0.85rem', mb: 0.5, color: '#444' }}>Вид недвижимости</Typography>
                    <Select defaultValue="Все" sx={{ backgroundColor: 'white', borderRadius: 0 }}>
                      <MenuItem value="Все">Все</MenuItem>
                      <MenuItem value="Дом">Дом</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth size="small">
                    <Typography sx={{ fontSize: '0.85rem', mb: 0.5, color: '#444' }}>Проект</Typography>
                    <Select defaultValue="Все" sx={{ backgroundColor: 'white', borderRadius: 0 }}>
                      <MenuItem value="Все">Все</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <FormControl fullWidth size="small" sx={{ mb: 4 }}>
                <Typography sx={{ fontSize: '0.85rem', mb: 0.5, color: '#444' }}>Вид ипотеки</Typography>
                <Select defaultValue="Все" sx={{ backgroundColor: 'white', borderRadius: 0 }}>
                  <MenuItem value="Все">Все</MenuItem>
                </Select>
              </FormControl>

              <Box sx={{ mb: 4 }}>
                <Typography sx={{ fontSize: '0.85rem', mb: 1, color: '#444' }}>Стоимость</Typography>
                <TextField fullWidth size="small" value="3 000 000 ₽" sx={{ backgroundColor: 'white', '& .MuiOutlinedInput-root': { borderRadius: 0 } }} />
                <Slider defaultValue={3000000} min={0} max={15000000} sx={{ color: '#eca668', mt: -1 }} />
              </Box>

              <Box sx={{ mb: 5 }}>
                <Typography sx={{ fontSize: '0.85rem', mb: 1, color: '#444' }}>Первоначальный взнос</Typography>
                <TextField fullWidth size="small" value="2 000 000 ₽" sx={{ backgroundColor: 'white', '& .MuiOutlinedInput-root': { borderRadius: 0 } }} />
                <Slider defaultValue={2000000} min={0} max={10000000} sx={{ color: '#eca668', mt: -1 }} />
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography sx={{ fontSize: '0.85rem', mb: 1, color: '#444' }}>Ежемесячный платеж</Typography>
                <TextField fullWidth size="small" value="60 000 ₽" InputProps={{ readOnly: true }} sx={{ backgroundColor: 'white', '& .MuiOutlinedInput-root': { borderRadius: 0 } }} />
              </Box>

              <Button variant="contained" fullWidth sx={{ 
                backgroundColor: '#eca668', color: 'white', borderRadius: 0, py: 1.5, textTransform: 'none', fontWeight: 600, fontSize: '1rem', boxShadow: 'none',
                '&:hover': { backgroundColor: '#d16a15', boxShadow: 'none' }
              }}>
                Рассчитать платеж
              </Button>
            </Paper>
          </Box>
        </Box>

        {/* Location Section */}
        <Box sx={{ mb: 10 }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' }, mb: 3, gap: 2 }}>
            <Box>
              <Typography sx={{ fontWeight: 800, fontSize: '1.8rem', textTransform: 'uppercase', mb: 1 }}>РАСПОЛОЖЕНИЕ</Typography>
              <Typography sx={{ fontSize: '1.1rem', color: '#111' }}>Республика Татарстан, Казань, коттеджный посёлок Изумрудный village</Typography>
            </Box>
            <Button variant="outlined" sx={{ 
              borderColor: '#e0e0e0', color: '#111', borderRadius: 0, textTransform: 'none', fontWeight: 600, px: 3, py: 1,
              '&:hover': { borderColor: '#eca668', backgroundColor: 'rgba(236,166,104,0.05)' }
            }}>
              Проложить маршрут
            </Button>
          </Box>
          <Box sx={{ width: '100%', height: { xs: 300, md: 500 } }}>
            <iframe 
              src="https://yandex.ru/map-widget/v1/?ll=49.192348%2C55.750131&z=11" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              allowFullScreen="true"
              style={{ border: 0 }}
            />
          </Box>
        </Box>

        {/* Similar Projects */}
        <Box sx={{ mb: 8 }}>
          <Typography sx={{ fontWeight: 800, fontSize: '1.8rem', textTransform: 'uppercase', mb: 4 }}>ПОХОЖИЕ ПРОЕКТЫ</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <SimilarHouseCard title="Dom-2" area="120 м2" plot="5,1 сот." image={h2} />
            </Grid>
            <Grid item xs={12} md={4}>
              <SimilarHouseCard title="Dom-3" area="160 м2" plot="5,1 сот." image={h4} />
            </Grid>
            <Grid item xs={12} md={4}>
              <SimilarHouseCard title="Dom-4" area="175,5 м2" plot="5,1 сот." image={h3} />
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}
