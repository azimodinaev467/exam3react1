import { Box, Container, Typography, Grid, Button, useTheme, useMediaQuery, Divider } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

import img1 from '../assets/876ac4f8fde38cefa4071c4dec4f8d125e8787a7.jpg';
import img2 from '../assets/454aba1b0c4c7a706d37f20cdabc6d8e7f5ddb80.jpg';
import img3 from '../assets/7f648b5b773e1d3c55279fe4c6864f2d713c5b8a.jpg';
import img4 from '../assets/7f648b5b773e1d3c55279fe4c6864f2d713c5b8a (1).jpg';

const projects = [
  {
    title: 'Изумрудный Village',
    location: '8 минут от метро Дубравная.',
    status: 'Дома сдаются',
    image: img1,
  },
  {
    title: 'IQ CLUB',
    location: 'Начало строительства',
    status: 'I квартал 2024 года',
    image: img2,
  },
   {
    title: 'Изумрудный Village',
    location: '8 минут от метро Дубравная.',
    status: 'Дома сдаются',
    image: img1,
  },
  {
    title: 'IQ CLUB',
    location: 'Начало строительства',
    status: 'I квартал 2024 года',
    image: img2,
  },
  // {
  //   title: 'Зимняя Горка',
  //   location: '10 минут от Казанского аэропорта.',
  //   status: 'Все дома сданы',
  //   image: img3,
  // },
  // {
  //   title: 'Усады Village',
  //   location: 'Поселок в черте города.',
  //   status: 'Все дома сданы',
  //   image: img4,
  // },
];

export default function SectionFour() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 3, md: 4 } }}>
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#111', mr: 1, textTransform: 'uppercase', fontSize: { xs: '1.8rem', md: '2.2rem' } }}>
            Наши
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#E87A1E', fontStyle: 'italic', textTransform: 'uppercase', fontSize: { xs: '1.8rem', md: '2.2rem' } }}>
            Проекты
          </Typography>
        </Box>

        {/* Filters */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4, justifyContent: { xs: 'flex-start', md: 'center' } }}>
          <Button variant="outlined" sx={{ color: '#333', borderColor: '#e0e0e0', textTransform: 'none', borderRadius: 1, px: 3, '&:hover': { borderColor: '#E87A1E' } }}>
            1-х этажные
          </Button>
          <Button variant="outlined" sx={{ color: '#333', borderColor: '#e0e0e0', textTransform: 'none', borderRadius: 1, px: 3, '&:hover': { borderColor: '#E87A1E' } }}>
            2-х этажные
          </Button>
          <Button variant="outlined" sx={{ color: '#333', borderColor: '#e0e0e0', textTransform: 'none', borderRadius: 1, px: 3, '&:hover': { borderColor: '#E87A1E' } }}>
            Таунхаусы
          </Button>
          <Button variant="outlined" endIcon={<MapOutlinedIcon />} sx={{ color: '#333', borderColor: '#555', textTransform: 'none', borderRadius: 1, px: 3, '&:hover': { borderColor: '#E87A1E' } }}>
            На карте
          </Button>
          <Button variant="contained" sx={{ backgroundColor: '#f0a060', color: '#fff', textTransform: 'none', borderRadius: 1, px: 4, boxShadow: 'none', '&:hover': { backgroundColor: '#E87A1E', boxShadow: 'none' } }}>
            Все проекты
          </Button>
        </Box>

        {/* Subtitle & Divider */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', mb: 1 }}>
            <Typography sx={{ fontWeight: 700, color: '#222', fontSize: '1.1rem' }}>
              Коттеджные поселки и дома <Typography component="span" sx={{ color: '#666', fontWeight: 400 }}>в Казани</Typography>
            </Typography>
            <KeyboardArrowDownIcon sx={{ color: '#666', ml: 0.5 }} />
          </Box>
          <Divider sx={{ borderColor: 'rgba(232, 122, 30, 0.3)' }} />
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={isMobile ? 6 : 4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Box>
                {/* Image on top */}
                <Box sx={{ 
                  width: '100%', 
                  height: { xs: 240, sm: 320, md: 360 }, 
                  overflow: 'hidden',
                  borderRadius: 0,
                  mb: 2.5 // margin below image
                }}>
                  <Box 
                    component="img" 
                    src={project.image} 
                    alt={project.title}
                    sx={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.4s',
                      '&:hover': { transform: 'scale(1.05)' }
                    }} 
                  />
                </Box>

                {/* Title */}
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#111', mb: 1 }}>
                  {project.title}
                </Typography>
                
                {/* Location and Status */}
                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                  <LocationOnOutlinedIcon sx={{ color: '#E87A1E', fontSize: '1.2rem', mr: 0.5 }} />
                  <Typography sx={{ color: '#333', fontSize: '0.9rem', fontWeight: 500, mr: 1 }}>
                    {project.location}
                  </Typography>
                  <Typography sx={{ color: '#f0a060', fontSize: '0.9rem', fontWeight: 500 }}>
                    {project.status.startsWith('•') ? project.status : ` ${project.status}`}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* View All Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 5, md: 7 } }}>
          <Button 
            variant="outlined" 
            sx={{ 
              color: '#333', 
              borderColor: '#f0a060', 
              textTransform: 'none', 
              borderRadius: 1, 
              px: 5, 
              py: 1,
              fontWeight: 500,
              '&:hover': { borderColor: '#E87A1E', backgroundColor: 'rgba(232, 122, 30, 0.05)' } 
            }}
          >
            Смотреть всё
          </Button>
        </Box>

      </Container>
    </Box>
  );
}
