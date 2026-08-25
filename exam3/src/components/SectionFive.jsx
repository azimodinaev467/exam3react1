import { Box, Container, Typography, Grid, Button, TextField, useTheme, useMediaQuery } from '@mui/material';
import heroBg from '../assets/20738cdccdc4420dacab1556bdd4af8b3fad4b68.jpg';
import imgKeys from '../assets/23cb2b3f7b99cef2163422e0531eb8f850491ad3.jpg';
import imgFamily from '../assets/25e664d4b4af2fa3d9d53e9436125a805a481e5d (1).jpg';
import imgHouse from '../assets/217878e7ca09f535abab947b1eb0cea53408f2b9.jpg';
import imgGirl from '../assets/ec7fcd97a74c0057f14043c3d53fa8cbd9bfd304.jpg';

const mortgageItems = [
  {
    title: 'ИПОТЕЧНЫЕ КРЕДИТЫ',
    desc: 'Бесплатно подберём базовую ипотечную программу',
    rate: '13,7%',
    downpayment: '10%',
    image: imgKeys,
  },
  {
    title: 'СЕМЕЙНАЯ ИПОТЕКА',
    desc: 'Используем материнский капитал в качестве первоначального взноса',
    rate: '4%',
    downpayment: '15%',
    image: imgFamily,
  },
    {
    title: 'ИПОТЕЧНЫЕ КРЕДИТЫ',
    desc: 'Бесплатно подберём базовую ипотечную программу',
    rate: '13,7%',
    downpayment: '10%',
    image: imgKeys,
  },
  {
    title: 'СЕМЕЙНАЯ ИПОТЕКА',
    desc: 'Используем материнский капитал в качестве первоначального взноса',
    rate: '4%',
    downpayment: '15%',
    image: imgFamily,
  },
  // {
  //   title: 'IT СПЕЦИАЛИСТАМ',
  //   desc: 'В рамках данной программы сотрудники IT-компаний могут построить частный дом в ипотеку по льготной ставке.',
  //   rate: '4%',
  //   downpayment: '15%',
  //   image: imgHouse,
  // },
  // {
  //   title: 'ГОСПОДДЕРЖКА 2023',
  //   desc: 'Используем материнский капитал в качестве первоначального взноса',
  //   rate: '6%',
  //   downpayment: '15%',
  //   image: imgGirl,
  // },
];

function MortgageCard({ item }) {
  return (
    <Box
      sx={{
        width: '100%',
        height: 162,
        border: '1px solid #f0b98a',
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: '#fff',
        boxSizing: 'border-box',
      }}
    >
      {/* Левая часть */}
      <Box
        sx={{
          width: '57%',
          p: '12px',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '13px',
            lineHeight: 1.1,
            color: '#111',
            mb: '7px',
          }}
        >
          {item.title}
        </Typography>

        <Typography
          sx={{
            fontSize: '9px',
            lineHeight: 1.25,
            color: '#333',
            minHeight: 34,
          }}
        >
          {item.desc}
        </Typography>

        {/* Проценты */}
        <Box
          sx={{
            display: 'flex',
            gap: '25px',
            mt: '7px',
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: '12px',
                fontWeight: 700,
                lineHeight: 1,
                color: '#111',
              }}
            >
              от {item.rate}
            </Typography>

            <Typography
              sx={{
                fontSize: '7px',
                color: '#555',
                lineHeight: 1.2,
                mt: '4px',
              }}
            >
              Ставка по ипотеке
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: '12px',
                fontWeight: 700,
                lineHeight: 1,
                color: '#111',
              }}
            >
              от {item.downpayment}
            </Typography>

            <Typography
              sx={{
                fontSize: '7px',
                color: '#555',
                lineHeight: 1.2,
                mt: '4px',
              }}
            >
              Первоначальный
              <br />
              взнос
            </Typography>
          </Box>
        </Box>

        {/* Кнопка */}
        <Button
          variant="contained"
          sx={{
            alignSelf: 'flex-start',
            mt: 'auto',
            minWidth: 98,
            height: 26,
            px: 1,
            py: 0,
            backgroundColor: '#f1a45e',
            color: '#fff',
            fontSize: '8px',
            fontWeight: 500,
            textTransform: 'none',
            borderRadius: 0,
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: '#e9934b',
              boxShadow: 'none',
            },
          }}
        >
          Получить расчёт
        </Button>
      </Box>

      {/* Правая часть — картинка */}
      <Box
        sx={{
          width: '43%',
          flexShrink: 0,
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={item.image}
          alt={item.title}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </Box>
    </Box>
  );
}

export default function SectionFive() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      {/* ── Banner: Скачать каталог ── */}
      <Box
        sx={{
          position: 'relative',
          py: { xs: 5, md: 7 },
          overflow: 'hidden',
        }}
      >
        {/* BG Image */}
        <Box
          component="img"
          src={heroBg}
          alt="Фон каталога"
          sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 60%' }}
        />
        {/* Dark overlay */}
        <Box sx={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)' }} />

        {/* Content */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.2rem' },
              color: '#fff',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              mb: { xs: 3, md: 4 },
            }}
          >
            Скачать{' '}
            <Typography component="span" sx={{ color: '#E87A1E', fontStyle: 'italic', fontWeight: 800, fontSize: 'inherit' }}>
              каталог
            </Typography>{' '}
            наших проектов
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              maxWidth: 700,
              mx: 'auto',
            }}
          >
            <TextField
              placeholder="Имя"
              variant="outlined"
              size="small"
              sx={{
                flex: 1,
                backgroundColor: '#fff',
                borderRadius: 1,
                '& .MuiOutlinedInput-root': { borderRadius: 1 },
              }}
            />
            <TextField
              placeholder="Ваш E-mail"
              variant="outlined"
              size="small"
              sx={{
                flex: 1,
                backgroundColor: '#fff',
                borderRadius: 1,
                '& .MuiOutlinedInput-root': { borderRadius: 1 },
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#E87A1E',
                color: '#fff',
                fontWeight: 700,
                textTransform: 'none',
                fontSize: '1rem',
                borderRadius: 1,
                px: 4,
                boxShadow: 'none',
                whiteSpace: 'nowrap',
                '&:hover': { backgroundColor: '#d06a10', boxShadow: 'none' },
              }}
            >
              Скачать
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ── Mortgage Section ── */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#fff' }}>
        <Container maxWidth="lg">
          {/* Title */}
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.2rem' },
              color: '#111',
              textTransform: 'uppercase',
              mb: 1,
            }}
          >
            Подберём решения{' '}
            <Typography component="span" sx={{ color: '#E87A1E', fontStyle: 'italic', fontWeight: 800, fontSize: 'inherit' }}>
              по ипотеке
            </Typography>{' '}
            уже сегодня
          </Typography>
          <Typography sx={{ color: '#666', fontSize: '0.95rem', mb: { xs: 4, md: 6 } }}>
            Выберите подходящий вариант и наши специалисты подготовят для вас актуальные предложения
          </Typography>

          {/* Cards Grid: 2 cols desktop, 1 col mobile */}
          <Grid container spacing={3}>
            {mortgageItems.map((item, i) => (
              <Grid item xs={12} sm={6} key={i}>
                <MortgageCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
