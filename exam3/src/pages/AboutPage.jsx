import { Box, Container, Typography, Button } from '@mui/material';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import Footer from '../components/Footer';

import igorImg from '../assets/80976617a8d19f8d70a44b493fdb5a902c9e65c0.jpg';
import luizaImg from '../assets/c20e31e2f1d2833f4865e059c01450971c24b86b.jpg';
import houseImg from '../assets/18f2b99d4cad51d91d622f13b63b378da0507b9f.jpg';
import anfisaImg from '../assets/cb6de48b4dce671e5521614fee9057288442d5a6.jpg';
import evgeniyImg from '../assets/e2d524136e9bc20ad9313cddff4e2ae4237b7cc3.jpg';

const staffMembers = [
  { id: 1, name: 'Анфиса Давыдова', role: 'Руководитель отдела\nмаркетинга', image: anfisaImg },
  { id: 2, name: 'Евгений Кабаков', role: 'Руководитель отдела\nпродаж', image: evgeniyImg },
  { id: 3, name: 'Эльвира Сергеева', role: 'Руководитель отдела\nипотеки', image: luizaImg },
  { id: 4, name: 'Игорь Смирнов', role: 'Менеджер по\nсопровождению', image: igorImg },
  { id: 5, name: 'Иван Иванов', role: 'Менеджер по\nсопровождению', image: igorImg },
  { id: 6, name: 'Лариса Федотова', role: 'Ведущий\nюрисконсульт', image: luizaImg },
  { id: 7, name: 'Алексей Кузин', role: 'Начальник участка', image: igorImg },
  { id: 8, name: 'Николай Елистратов', role: 'Прораб', image: igorImg },
  { id: 9, name: 'Фаниль Салахиев', role: 'Прораб', image: igorImg },
];

function TeamCard({ image, firstName, lastName, role }) {
  return (
    <Box sx={{ position: 'relative', width: { xs: '100%', md: '320px' }, height: { xs: '260px', md: '300px' }, mb: { xs: 4, md: 0 } }}>
      {/* Photo */}
      <Box
        component="img"
        src={image}
        alt={`${firstName} ${lastName}`}
        sx={{
          width: { xs: '160px', md: '200px' },
          height: { xs: '220px', md: '260px' },
          objectFit: 'cover',
          display: 'block',
        }}
      />
      
      {/* Name */}
      <Box sx={{ position: 'absolute', top: { xs: '30px', md: '40px' }, left: { xs: '150px', md: '180px' }, zIndex: 2 }}>
        <Typography sx={{ fontSize: { xs: '18px', md: '22px' }, fontWeight: 500, color: '#111', lineHeight: 1.2, textTransform: 'uppercase' }}>
          {firstName}<br />{lastName}
        </Typography>
      </Box>

      {/* Orange Role Block */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: '20px', md: '20px' },
          left: { xs: '140px', md: '180px' },
          backgroundColor: '#E89A55',
          p: { xs: '12px 16px', md: '16px 20px' },
          minWidth: { xs: '160px', md: '200px' },
          zIndex: 1,
        }}
      >
        <Typography sx={{ fontSize: { xs: '13px', md: '14px' }, color: '#fff', lineHeight: 1.3 }}>
          {role.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </Typography>
      </Box>
    </Box>
  );
}

export default function AboutPage() {
  return (
    <>
      <Box sx={{ backgroundColor: '#fff', pt: { xs: 6, md: 10 }, pb: { xs: 8, md: 12 }, minHeight: '80vh' }}>
        <Container maxWidth="lg">
          {/* Header */}
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: '28px', md: '36px' },
              fontWeight: 700,
              color: '#111',
              mb: { xs: 4, md: 6 },
              textTransform: 'uppercase',
            }}
          >
            НАША <Box component="span" sx={{ color: '#E89A55', fontWeight: 400 }}>КОМАНДА</Box>
          </Typography>

          {/* Banner */}
          {/* Desktop Banner */}
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              backgroundColor: '#E89A55',
              py: 3,
              px: 4,
              mb: 6,
              mx: { md: -3 }, // slight negative margin to bleed out if needed, or keep flush
            }}
          >
            <Typography sx={{ fontSize: '20px', color: '#fff', fontWeight: 500, letterSpacing: '0.02em' }}>
              <strong style={{ fontWeight: 700 }}>WIN DOM</strong> — это люди, разделяющие красоту и комфорт загородной жизни.
            </Typography>
          </Box>

          {/* Mobile Banner */}
          <Box
            sx={{
              display: { xs: 'block', md: 'none' },
              borderLeft: '3px solid #E89A55',
              pl: 2,
              mb: 5,
            }}
          >
            <Typography sx={{ fontSize: '16px', color: '#111', lineHeight: 1.4 }}>
              <span style={{ color: '#E89A55', fontWeight: 700 }}>WIN</span> <strong>DOM</strong> — это люди,<br />
              разделяющие красоту и<br />
              комфорт загородной жизни.
            </Typography>
          </Box>

          {/* Main Layout Area */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 4, md: 0 },
              borderTop: { md: '1px solid #f3d5b5' },
              borderBottom: { md: '1px solid #f3d5b5' },
              borderLeft: { md: '1px solid #f3d5b5' },
              position: 'relative',
              mt: { md: 4 },
              pt: { md: 6 },
              pb: { md: 6 },
              pl: { md: 4 },
            }}
          >
            {/* Top/Bottom brackets for desktop */}
            <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', top: -1, right: 0, width: '20px', borderTop: '1px solid #f3d5b5' }} />
            <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', bottom: -1, right: 0, width: '20px', borderBottom: '1px solid #f3d5b5' }} />

            {/* Left Content (Text + Team Cards) */}
            <Box sx={{ flex: 1, pr: { md: 6 } }}>
              {/* Desktop Text */}
              <Typography
                sx={{
                  display: { xs: 'none', md: 'block' },
                  fontSize: '16px',
                  color: '#111',
                  lineHeight: 1.5,
                  maxWidth: '600px',
                  mb: 6,
                }}
              >
                Наши менеджеры помогут разобраться, какой дом подойдет именно вам. Подберут технологию строительства и готовый типовой проект. Или разработают индивидуальное решение по вашему запросу.
              </Typography>

              {/* Team Cards Container */}
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 0, md: 4 } }}>
                <TeamCard
                  image={houseImg}
                  firstName="ИГОРЬ"
                  lastName="ЗАХАРОВ"
                  role="Руководитель\nпроекта"
                />
                <TeamCard
                  image={igorImg}
                  firstName="ЛУИЗА"
                  lastName="НАЗИПОВА"
                  role="Главный\nархитектор"
                />
              </Box>

              {/* Mobile Text (Icon List) */}
              <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', gap: 3, mt: 2 }}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <AssignmentIndOutlinedIcon sx={{ color: '#E89A55', fontSize: 28, flexShrink: 0 }} />
                  <Typography sx={{ fontSize: '14px', color: '#111', lineHeight: 1.4 }}>
                    Наши менеджеры помогут разобраться, какой дом подойдет именно вам
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <AssignmentOutlinedIcon sx={{ color: '#E89A55', fontSize: 28, flexShrink: 0 }} />
                  <Typography sx={{ fontSize: '14px', color: '#111', lineHeight: 1.4 }}>
                    Подберут технологию строительства и готовый типовой проект
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <AssignmentTurnedInOutlinedIcon sx={{ color: '#E89A55', fontSize: 28, flexShrink: 0 }} />
                  <Typography sx={{ fontSize: '14px', color: '#111', lineHeight: 1.4 }}>
                    Или разработают индивидуальное решение по вашему запросу
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Right Image (Desktop Only) */}
            <Box
              sx={{
                display: { xs: 'none', md: 'block' },
                width: '280px',
                flexShrink: 0,
              }}
            >
              <Box
                component="img"
                src={luizaImg}
                alt="House"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Staff Grid Section */}
      <Box sx={{ position: 'relative', py: { xs: 6, md: 8 }, backgroundColor: { xs: '#fff', md: '#E89A55' } }}>
        <Container
          maxWidth="lg"
          sx={{
            backgroundColor: '#fff',
            py: { xs: 0, md: 6 },
            px: { xs: 0, md: 6 },
          }}
        >
          <Box
            sx={{
              display: { xs: 'flex', md: 'grid' },
              gridTemplateColumns: { md: 'repeat(3, 1fr)' },
              gap: { xs: 2, md: 4 },
              overflowX: { xs: 'auto', md: 'visible' },
              scrollSnapType: { xs: 'x mandatory', md: 'none' },
              pb: { xs: 2, md: 0 },
              px: { xs: 2, md: 0 },
              '&::-webkit-scrollbar': { display: 'none' },
            }}
          >
            {staffMembers.map((member) => (
              <Box
                key={member.id}
                sx={{
                  minWidth: { xs: '260px', md: 'auto' },
                  scrollSnapAlign: 'start',
                  border: '1px solid #E89A55',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#fff',
                }}
              >
                <Box
                  component="img"
                  src={member.image}
                  alt={member.name}
                  sx={{
                    width: '100%',
                    height: { xs: '280px', md: '260px' },
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                
                <Box sx={{ p: 2, pb: 1, textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography sx={{ fontWeight: 800, fontSize: '15px', color: '#111', mb: 0.5 }}>
                    {member.name}
                  </Typography>
                  <Typography sx={{ fontSize: '13px', color: '#333', lineHeight: 1.3, minHeight: '34px' }}>
                    {member.role.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 1, p: 2, pt: 1 }}>
                  <Button
                    variant="contained"
                    sx={{
                      flex: 1,
                      backgroundColor: '#E89A55',
                      color: '#fff',
                      textTransform: 'none',
                      borderRadius: 0,
                      fontSize: '13px',
                      fontWeight: 600,
                      boxShadow: 'none',
                      padding: '8px 4px',
                      '&:hover': { backgroundColor: '#d4893e', boxShadow: 'none' },
                    }}
                  >
                    Написать
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      flex: 1.2,
                      borderColor: '#E89A55',
                      color: '#111',
                      textTransform: 'none',
                      borderRadius: 0,
                      fontSize: '13px',
                      fontWeight: 600,
                      padding: '8px 4px',
                      '&:hover': { borderColor: '#d4893e', backgroundColor: 'transparent' },
                    }}
                  >
                    Оставить отзыв
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Pagination dots for mobile */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', gap: 1, mt: 3 }}>
            {staffMembers.map((_, i) => (
              <Box
                key={i}
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  backgroundColor: i === 0 ? '#E89A55' : '#ddd',
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
