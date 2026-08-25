import { Box, Typography, Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import heroBg from '../assets/20738cdccdc4420dacab1556bdd4af8b3fad4b68.jpg';

export default function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: '70vh', md: '85vh' },
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src={heroBg}
        alt="WinDom hero"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      {/* Dark Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.1) 100%)',
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1200,
          width: '100%',
          mx: 'auto',
          px: { xs: 2, md: 4 },
          pb: { xs: 4, md: 7 },
        }}
      >
        {/* Play video button - mobile top right */}
        {isMobile && (
          <Box
            sx={{
              position: 'absolute',
              top: { xs: -260, sm: -300 },
              right: 16,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              cursor: 'pointer',
            }}
          >
            <Box
              sx={{
                width: 52,
                height: 52,
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.2)',
                border: '2px solid rgba(255,255,255,0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(6px)',
              }}
            >
              <PlayArrowIcon sx={{ color: '#fff', fontSize: '1.6rem' }} />
            </Box>
          </Box>
        )}

        <Typography
          variant="subtitle1"
          sx={{
            color: 'rgba(255,255,255,0.85)',
            fontWeight: 400,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontSize: { xs: '0.7rem', md: '0.9rem' },
            mb: 0.5,
          }}
        >
          Строительная компания
        </Typography>

        {/* Big title */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', mb: 1.5 }}>
          <Typography
            component="span"
            sx={{
              fontWeight: 900,
              fontSize: { xs: '3.5rem', sm: '5rem', md: '7rem' },
              color: '#E87A1E',
              lineHeight: 1,
              letterSpacing: '-0.02em',
            }}
          >
            WIN
          </Typography>
          <Typography
            component="span"
            sx={{
              fontWeight: 900,
              fontSize: { xs: '3.5rem', sm: '5rem', md: '7rem' },
              color: '#fff',
              lineHeight: 1,
              letterSpacing: '-0.02em',
            }}
          >
            DOM
          </Typography>
        </Box>

        <Typography
          sx={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: { xs: '0.9rem', md: '1.05rem' },
            maxWidth: 380,
            lineHeight: 1.6,
            mb: { xs: 3, md: 4 },
          }}
        >
          Мы строим дома, коттеджные посёлки и таунхаусы в Казани
        </Typography>

        {/* Buttons */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}>
          <Button
            component={RouterLink}
            to="/projects"
            variant="contained"
            sx={{
              backgroundColor: '#E87A1E',
              color: '#fff',
              fontWeight: 600,
              textTransform: 'none',
              fontSize: { xs: '0.85rem', md: '0.95rem' },
              px: { xs: 2.5, md: 3.5 },
              py: { xs: 1, md: 1.4 },
              borderRadius: 1,
              '&:hover': { backgroundColor: '#d06a10' },
              transition: 'background-color 0.25s ease',
            }}
          >
            Подробнее о проектах
          </Button>

          {!isMobile && (
            <Button
              variant="outlined"
              sx={{
                borderColor: 'rgba(255,255,255,0.7)',
                color: '#fff',
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '0.95rem',
                px: 3.5,
                py: 1.4,
                borderRadius: 1,
                '&:hover': { borderColor: '#fff', backgroundColor: 'rgba(255,255,255,0.1)' },
                transition: 'all 0.25s ease',
              }}
            >
              Задать вопрос
            </Button>
          )}

          {/* Watch video */}
          {!isMobile && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                cursor: 'pointer',
                ml: { md: 2 },
                '&:hover .play-circle': { backgroundColor: 'rgba(255,255,255,0.3)' },
              }}
            >
              <Box
                className="play-circle"
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.18)',
                  border: '2px solid rgba(255,255,255,0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.25s ease',
                  backdropFilter: 'blur(6px)',
                }}
              >
                <PlayArrowIcon sx={{ color: '#fff', fontSize: '1.8rem' }} />
              </Box>
              <Typography
                sx={{
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Смотреть видео
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
