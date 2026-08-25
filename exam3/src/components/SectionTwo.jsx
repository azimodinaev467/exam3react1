import { Box, Container, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import projectImg1 from '../assets/e667e4b8e847e84132c15293554dcfa821de5262.jpg';
import projectImg2 from '../assets/ночь.png';

export default function SectionTwo() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        
        {/* Part 1: О КОМПАНИИ */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center', 
            gap: { xs: 6, md: 8 },
            mb: { xs: 8, md: 15 } 
          }}
        >
          <Box sx={{ flex: 1, width: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Box sx={{ width: 18, height: 18, borderRadius: '50%', border: '2px solid #E87A1E', mr: 2 }} />
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#E87A1E', textTransform: 'uppercase', letterSpacing: '0.02em', fontSize: { xs: '1.5rem', md: '1.8rem' } }}>
                О компании
              </Typography>
            </Box>

            <Typography sx={{ mb: 2, color: '#111', fontSize: '0.9rem', lineHeight: 1.5, fontWeight: 500 }}>
              Компания <Typography component="span" sx={{ color: '#E87A1E', fontWeight: 600, fontSize: '0.9rem' }}>Win Dom</Typography> основана в 2012 году.
            </Typography>
            
            <Typography sx={{ mb: 2, color: '#111', fontSize: '0.9rem', lineHeight: 1.5, fontWeight: 500 }}>
              Основным направлением девелопера является строительство загородных домов и таунхаусов "под ключ".
            </Typography>
            
            <Typography sx={{ mb: 4, color: '#111', fontSize: '0.9rem', lineHeight: 1.5, fontWeight: 500 }}>
              Более 11 лет Win Dom работает на строительном рынке недвижимости Казани и Республики Татарстан и как подрядная организация и, как самостоятельный застройщик.
            </Typography>

            {/* Social Icons */}
            <Box sx={{ display: 'flex', gap: 1.5, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Box sx={{ width: 36, height: 36, border: '1px solid #555', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', '&:hover': { borderColor: '#E87A1E', '& svg': { color: '#E87A1E'} }, transition: 'all 0.2s' }}>
                <YouTubeIcon sx={{ color: '#555', fontSize: '1.3rem' }} />
              </Box>
              <Box sx={{ width: 36, height: 36, border: '1px solid #555', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', '&:hover': { borderColor: '#E87A1E', '& p': { color: '#E87A1E'} }, transition: 'all 0.2s' }}>
                <Typography sx={{ fontWeight: 800, color: '#555', fontSize: '0.9rem' }}>VK</Typography>
              </Box>
              <Box sx={{ width: 36, height: 36, border: '1px solid #555', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', '&:hover': { borderColor: '#E87A1E', '& p': { color: '#E87A1E'} }, transition: 'all 0.2s' }}>
                <Typography sx={{ fontWeight: 800, color: '#E87A1E', fontSize: '0.9rem' }}>in</Typography>
              </Box>
              <Box sx={{ width: 36, height: 36, border: '1px solid #555', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', '&:hover': { borderColor: '#E87A1E', '& p': { color: '#E87A1E'} }, transition: 'all 0.2s' }}>
                <Typography sx={{ fontWeight: 800, color: '#555', fontSize: '1.1rem', fontFamily: 'serif' }}>t</Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ flex: 1, width: '100%' }}>
            <Box sx={{ position: 'relative', width: '100%', pt: { xs: 2, md: 3 }, px: { xs: 2, md: 3 }, maxWidth: 500, ml: 'auto' }}>
              {/* Orange outline frame */}
              <Box sx={{ 
                position: 'absolute', 
                top: 0, 
                right: 0,
                bottom: -20,
                left: 20,
                border: '1px solid rgba(232, 122, 30, 0.4)',
                zIndex: 0 
              }} />
              {/* Image */}
              <Box 
                component="img" 
                src={projectImg1} 
                alt="О компании"
                sx={{ 
                  position: 'relative',
                  zIndex: 1,
                  width: '100%', 
                  height: 'auto',
                  display: 'block'
                }} 
              />
            </Box>
          </Box>
        </Box>

        {/* Part 2: УНИКАЛЬНАЯ АРХИТЕКТУРА */}
        
        {/* Title row */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          mb: { xs: 4, md: 6 },
          flexWrap: isMobile ? 'wrap' : 'nowrap'
        }}>
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#111', mr: 1, fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem' } }}>
            УНИКАЛЬНАЯ
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#E87A1E', mr: 3, fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem' } }}>
            АРХИТЕКТУРА
          </Typography>
          
          {/* Orange line connected to the frame */}
          {!isMobile && (
            <Box sx={{ 
              flexGrow: 1, 
              height: '1px', 
              backgroundColor: 'rgba(232, 122, 30, 0.4)',
              position: 'relative',
            }}>
              <Box sx={{ 
                position: 'absolute', 
                right: 0, 
                top: 0, 
                width: '1px', 
                height: 150, 
                backgroundColor: 'rgba(232, 122, 30, 0.4)' 
              }} />
            </Box>
          )}
        </Box>

        {/* Image and frame */}
        <Box sx={{ position: 'relative', width: '100%', mb: 4, pl: { xs: 2, md: 4 }, pb: { xs: 2, md: 4 } }}>
          {/* Orange outline frame */}
          <Box sx={{ 
            position: 'absolute', 
            top: -20, 
            right: 0, // Connects to the line from above
            bottom: 0, 
            left: 0, 
            border: '1px solid rgba(232, 122, 30, 0.4)',
            borderTop: 'none', // Open top to connect with the line
            zIndex: 0 
          }} />
          {/* Image */}
          <Box 
            component="img" 
            src={projectImg2} 
            alt="Архитектура"
            sx={{ 
              position: 'relative',
              zIndex: 1,
              width: '100%', 
              height: 'auto',
              display: 'block'
            }} 
          />
        </Box>

        {/* Text bottom right */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: { xs: 1, md: 0 } }}>
          <Typography sx={{ color: '#111', fontSize: { xs: '0.95rem', md: '1.05rem' }, lineHeight: 1.6, maxWidth: 650, fontWeight: 500 }}>
            Мы не строим однотипных коробочных решений: дома из желтого или красного кирпича. Мы создаём <Typography component="span" sx={{ color: '#E87A1E', fontStyle: 'italic', fontWeight: 600 }}>уникальные</Typography>, ни на что не похожие, <Typography component="span" sx={{ color: '#E87A1E', fontStyle: 'italic', fontWeight: 600 }}>запоминающиеся проекты.</Typography>
          </Typography>
        </Box>

      </Container>
    </Box>
  );
}
