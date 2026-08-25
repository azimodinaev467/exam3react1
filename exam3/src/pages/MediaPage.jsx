import { Box, Container, Typography, Button, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Footer from '../components/Footer';
import smiImg from '../assets/1ba8533cd4cda598a6569af95922d68dbac284e1.png';
import { mediaData } from '../data/mediaData';

export default function MediaPage() {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ backgroundColor: '#fff', pt: { xs: 8, md: 12 }, pb: { xs: 8, md: 12 }, minHeight: '80vh' }}>
        <Container maxWidth={false} sx={{ maxWidth: '1120px', mx: 'auto', px: { xs: 2, md: 3 } }}>
          
          {/* Title */}
          <Typography
            component="h1"
            sx={{
              mb: { xs: 4, md: 6 },
              fontSize: { xs: '32px', md: '44px' },
              fontWeight: 500,
              textTransform: 'uppercase',
              color: '#111',
            }}
          >
            <Box component="span" sx={{ color: '#E89A55', fontStyle: 'italic' }}>
              СМИ
            </Box>{' '}
            О НАС
          </Typography>

          {/* Card */}
          <Box
            sx={{
              backgroundColor: '#1a1a2e',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              overflow: 'hidden',
              minHeight: { xs: 'auto', md: 400 },
            }}
          >
            {/* Left text block */}
            <Box
              sx={{
                flex: '0 0 auto',
                width: { xs: '100%', md: '42%' },
                p: { xs: 4, md: 6 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxSizing: 'border-box',
              }}
            >
              {/* Logo label */}
              <Typography
                sx={{
                  fontSize: { xs: '20px', md: '24px' },
                  fontWeight: 700,
                  color: '#fff',
                  mb: 4,
                  lineHeight: 1.3,
                }}
              >
                Деловая электронная газета
                <br />
                «Бизнес Online»
              </Typography>

              {/* Quote */}
              <Typography
                sx={{
                  fontSize: { xs: '15px', md: '16px' },
                  color: '#ddd',
                  lineHeight: 1.6,
                  mb: 5,
                }}
              >
                "По-прежнему актуально предложение застройщиков &quot;дом по цене казанской
                квартиры&quot; в 20-30 км от границ Казани. Стоимость дома в границах нашего
                города, конечно будет дороже, но все же имеется возможность значительно
                улучшить жилищные условия, обменяв квартиру на дом "
              </Typography>

              <Button
                onClick={() => navigate('/about/media/3')}
                variant="contained"
                sx={{
                  alignSelf: 'flex-start',
                  backgroundColor: '#E89A55',
                  color: '#fff',
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '15px',
                  borderRadius: 0,
                  px: 4,
                  py: 1.2,
                  boxShadow: 'none',
                  '&:hover': { backgroundColor: '#d4893e', boxShadow: 'none' },
                }}
              >
                Читать статью
              </Button>
            </Box>

            {/* Right image */}
            <Box
              sx={{
                flex: 1,
                position: 'relative',
                minHeight: { xs: 260, md: 'auto' },
                overflow: 'hidden',
              }}
            >
              <Box
                component="img"
                src={smiImg}
                alt="БизнесOnline"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                }}
              />
              {/* Dark overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to right, rgba(26,26,46,0.85) 0%, transparent 60%)',
                  display: { xs: 'none', md: 'block' } // Only on desktop to blend with the text section
                }}
              />
            </Box>
          </Box>

          {/* List of articles */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 4 }, mt: { xs: 6, md: 8 }, alignItems: 'center' }}>
            {mediaData.map((article) => (
              <Box
                key={article.id}
                onClick={() => navigate(`/about/media/${article.id}`)}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  border: '1px solid #f0f0f0',
                  width: '100%',
                  maxWidth: '900px', // slightly smaller width to match layout center alignment
                  transition: 'box-shadow 0.3s',
                  '&:hover': {
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                    borderColor: '#E89A55',
                  },
                }}
              >
                {/* Image */}
                <Box
                  sx={{
                    width: { xs: '100%', md: '45%' },
                    height: { xs: '240px', md: 'auto' },
                    minHeight: { md: '280px' },
                    position: 'relative',
                  }}
                >
                  <Box
                    component="img"
                    src={article.image}
                    alt={article.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      position: 'absolute',
                      inset: 0,
                    }}
                  />
                </Box>

                {/* Content */}
                <Box
                  sx={{
                    flex: 1,
                    p: { xs: 3, md: 4 },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{
                      fontSize: { xs: '20px', md: '24px' },
                      fontWeight: 600,
                      color: '#111',
                      mb: 2,
                      lineHeight: 1.3,
                    }}
                  >
                    {article.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '14px',
                      color: '#333',
                      lineHeight: 1.6,
                      mb: 4,
                    }}
                  >
                    {article.description}
                  </Typography>

                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/about/media/${article.id}`);
                    }}
                    variant="outlined"
                    sx={{
                      alignSelf: 'flex-start',
                      color: '#555',
                      borderColor: '#ddd',
                      textTransform: 'none',
                      fontSize: '13px',
                      fontWeight: 500,
                      borderRadius: 0,
                      px: 3,
                      py: 0.8,
                      '&:hover': {
                        borderColor: '#E89A55',
                        color: '#E89A55',
                        backgroundColor: 'transparent'
                      },
                    }}
                  >
                    Читать статью
                  </Button>
                </Box>
              </Box>
            ))}

            {/* Load more arrow */}
            <IconButton
              sx={{
                mt: 3,
                color: '#E89A55',
                border: '1px solid transparent',
                '&:hover': {
                  backgroundColor: 'rgba(232,154,85,0.05)',
                }
              }}
            >
              <ArrowRightAltIcon sx={{ fontSize: 32 }} />
            </IconButton>
          </Box>

        </Container>
      </Box>
      <Footer />
    </>
  );
}
