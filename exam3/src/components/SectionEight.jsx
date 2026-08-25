import { Box, Container, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import member1 from '../assets/acf3f475696a69410e76a293560242aac0bd5bbb.jpg';
import member2 from '../assets/ec7fcd97a74c0057f14043c3d53fa8cbd9bfd304.jpg';
import member3 from '../assets/2362ea7f34518bbbd09dff480abb33ae37be4cea.jpg';
import member4 from '../assets/18f2b99d4cad51d91d622f13b63b378da0507b9f.jpg';

const teamMembers = [
  {
    name: 'Игорь Захаров',
    role: 'Руководитель проекта',
    image: member1,
  },
  {
    name: 'Луиза Назипова',
    role: 'Главный архитектор',
    image: member2,
  },
  {
    name: 'Мухарямов Расул',
    role: 'Заместитель руководителя проекта',
    image: member3,
  },
  {
    name: 'Ваганов Дмитрий',
    role: 'Заместитель руководителя проекта',
    image: member4,
  },
];

export default function SectionEight() {
  return (
    <Box
      sx={{
        py: { xs: 5, md: 7 },
        backgroundColor: '#fff',
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: '1120px',
          mx: 'auto',
          px: { xs: 2, md: 3 },
        }}
      >
        {/* HEADER */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: { xs: 4, md: 5 },
          }}
        >
          <Typography
            component="h2"
            sx={{
              margin: 0,
              fontSize: { xs: '28px', md: '30px' },
              lineHeight: 1,
              fontWeight: 500,
              textTransform: 'uppercase',
              color: '#111',
            }}
          >
            Наша{' '}
            <Box
              component="span"
              sx={{
                color: '#E89A55',
                fontStyle: 'italic',
                fontWeight: 500,
              }}
            >
              команда
            </Box>
          </Typography>

          {/* Стрелка */}
          <Box
            sx={{
              width: { xs: 35, md: 50 },
              height: 30,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              color: '#E89A55',
              cursor: 'pointer',
            }}
          >
            <ArrowForwardIcon
              sx={{
                fontSize: { xs: 30, md: 34 },
                fontWeight: 300,
                strokeWidth: 1,
              }}
            />
          </Box>
        </Box>

        {/* DESCRIPTION */}
        <Box
          sx={{
            display: 'flex',
            gap: { xs: 3, md: 8 },
            mb: { xs: 4, md: 5 },
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
          }}
        >
          <Box
            sx={{
              flex: 1,
              minWidth: 0,
            }}
          >
            <Typography
              sx={{
                margin: 0,
                fontSize: { xs: '14px', md: '16px' },
                lineHeight: 1.2,
                color: '#222',
                fontWeight: 400,
              }}
            >
              Сотрудники WinDom - это профессионалы, сочетающие в себе
              энтузиазм и опыт, энергичные, творческие и увлечённые люди.
            </Typography>
          </Box>

          <Box
            sx={{
              flex: 1,
              minWidth: 0,
            }}
          >
            <Typography
              sx={{
                margin: 0,
                fontSize: { xs: '14px', md: '16px' },
                lineHeight: 1.2,
                color: '#222',
                fontWeight: 400,
              }}
            >
              Наша команда состоит из молодых профессионалов, готовых
              преодолевать сложности любого уровня. Успех отдельно взятого
              сотрудника - это составляющая часть успеха всей компании.
            </Typography>
          </Box>
        </Box>

        {/* TEAM */}
        <Box
          sx={{
            display: 'flex',
            gap: { xs: 1.5, sm: 2, md: 1 },
            width: '100%',
            flexWrap: {
              xs: 'wrap',
              md: 'nowrap',
            },
          }}
        >
          {teamMembers.map((member, index) => (
            <Box
              key={index}
              sx={{
                flex: {
                  xs: '0 0 calc(50% - 6px)',
                  sm: '0 0 calc(50% - 8px)',
                  md: '1 1 0',
                },
                minWidth: 0,
              }}
            >
              {/* IMAGE */}
              <Box
                sx={{
                  width: '100%',
                  height: {
                    xs: 230,
                    sm: 300,
                    md: 350,
                  },
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <Box
                  component="img"
                  src={member.image}
                  alt={member.name}
                  sx={{
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                  }}
                />
              </Box>

              {/* NAME */}
              <Typography
                sx={{
                  mt: 1.2,
                  textAlign: 'center',
                  fontSize: {
                    xs: '13px',
                    md: '14px',
                  },
                  lineHeight: 1.15,
                  fontWeight: 700,
                  color: '#111',
                }}
              >
                {member.name}
              </Typography>

              {/* ROLE */}
              <Typography
                sx={{
                  mt: 0.5,
                  textAlign: 'center',
                  fontSize: {
                    xs: '11px',
                    md: '13px',
                  },
                  lineHeight: 1.15,
                  color: '#222',
                }}
              >
                {member.role}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}