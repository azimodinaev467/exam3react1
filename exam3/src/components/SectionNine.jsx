import { Box, Container, Typography, Button } from '@mui/material';
import { useRef } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';
import smiImg from '../assets/1ba8533cd4cda598a6569af95922d68dbac284e1.png';

const reviews = [
  {
    name: 'Максим Иванов',
    subtitle: 'Приобрел дом 150кв м',
    avatar: 'МИ',
    text: 'Заказывая в этой компании постройку загородного дома, но я уже по готовой планировке. Могу сказать что в этой компании очень опытные инженеры и профессиональные строители. Сделали все качественно и как было задумано изначально, были не большие изменения в планировке, но они их изначально согласовали со мной а потом уже делали.',
    rating: 5,
  },
  {
    name: 'Семья Петровых',
    subtitle: 'Приобрели двухэтажный дом 300кв м',
    avatar: 'СП',
    text: 'Мы в восторге от нашего нового дома! Мы долго выбирали квартиру в городе, но когда решили завести второго ребенка поняли, что в квартире нам всем будет тесно. Дом выбирали вместе с родителями - папа особенно оценил изоляцию стен...',
    rating: 5,
  },
  {
    name: 'Семья Муратовых',
    subtitle: 'Приобрели двухэтажный дом 240кв м',
    avatar: 'СМ',
    text: 'Поскольку семья у нас из 4-х человек, то дом мы себе сразу просторный и под ключ. В этом плане мне понравилось, что в данном проекте просторные комнаты и у каждого есть свое личное пространство.',
    rating: 5,
  },
  {
    name: 'Алексей Смирнов',
    subtitle: 'Приобрел дом 200кв м',
    avatar: 'АС',
    text: 'Отличная команда профессионалов! Всё сделали точно в срок. Качество строительства на высшем уровне. Очень доволен результатом, рекомендую всем кто ищет надёжную строительную компанию.',
    rating: 5,
  },
  {
    name: 'Светлана Козлова',
    subtitle: 'Приобрела таунхаус 180кв м',
    avatar: 'СК',
    text: 'Долго выбирала между несколькими компаниями и остановилась на WinDom. Не пожалела ни разу! Менеджеры всегда на связи, строители работали чисто и аккуратно. Дом получился именно таким, как я мечтала.',
    rating: 5,
  },
];

export default function SectionNine() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  return (
    <Box>
      {/* ── СМИ О НАС ── */}
      <Box sx={{ py: { xs: 5, md: 8 }, backgroundColor: '#f9f9f9' }}>
        <Container
          maxWidth={false}
          sx={{ maxWidth: '1120px', mx: 'auto', px: { xs: 2, md: 3 } }}
        >
          {/* Title */}
          <Typography
            component="h2"
            sx={{
              mb: { xs: 3, md: 4 },
              fontSize: { xs: '28px', md: '30px' },
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
              minHeight: { xs: 'auto', md: 320 },
            }}
          >
            {/* Left text block */}
            <Box
              sx={{
                flex: '0 0 auto',
                width: { xs: '100%', md: '42%' },
                p: { xs: 3, md: 4 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxSizing: 'border-box',
              }}
            >
              {/* Logo label */}
              <Typography
                sx={{
                  fontSize: { xs: '15px', md: '17px' },
                  fontWeight: 700,
                  color: '#fff',
                  mb: 2,
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
                  fontSize: { xs: '13px', md: '14px' },
                  color: '#ccc',
                  lineHeight: 1.65,
                  flex: 1,
                  mb: 3,
                }}
              >
                "По-прежнему актуально предложение застройщиков "дом по цене казанской
                квартиры" в 20-30 км от границ Казани. Стоимость дома в границах нашего
                города, конечно будет дороже, но все же имеется возможность значительно
                улучшить жилищные условия, обменяв квартиру на дом "
              </Typography>

              <Button
                variant="contained"
                sx={{
                  alignSelf: 'flex-start',
                  backgroundColor: '#E89A55',
                  color: '#fff',
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '13px',
                  borderRadius: 0,
                  px: 3,
                  py: 1,
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
                minHeight: { xs: 220, md: 'auto' },
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
                  background: 'linear-gradient(to right, rgba(26,26,46,0.6) 0%, transparent 50%)',
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── ОТЗЫВЫ КЛИЕНТОВ ── */}
      <Box sx={{ py: { xs: 5, md: 8 }, backgroundColor: '#fff' }}>
        <Container
          maxWidth={false}
          sx={{ maxWidth: '1120px', mx: 'auto', px: { xs: 2, md: 3 } }}
        >
          {/* Title */}
          <Typography
            component="h2"
            sx={{
              mb: { xs: 3, md: 4 },
              fontSize: { xs: '28px', md: '30px' },
              fontWeight: 500,
              textTransform: 'uppercase',
              color: '#111',
            }}
          >
            <Box component="span" sx={{ color: '#E89A55', fontStyle: 'italic' }}>
              Отзывы
            </Box>{' '}
            клиентов
          </Typography>

          {/* Slider wrapper */}
          <Box sx={{ position: 'relative' }}>
            {/* Left arrow */}
            <Box
              onClick={scrollLeft}
              sx={{
                position: 'absolute',
                left: { xs: -16, md: -28 },
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                width: { xs: 32, md: 44 },
                height: { xs: 32, md: 44 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #ddd',
                backgroundColor: '#fff',
                cursor: 'pointer',
                transition: 'all 0.2s',
                '&:hover': {
                  borderColor: '#E89A55',
                  backgroundColor: '#E89A55',
                  '& svg': { color: '#fff' },
                },
              }}
            >
              <ArrowBackIcon sx={{ fontSize: { xs: 16, md: 20 }, color: '#555', transition: 'color 0.2s' }} />
            </Box>

            {/* Scrollable track */}
            <Box
              ref={sliderRef}
              sx={{
                display: 'flex',
                gap: { xs: 2, md: 2.5 },
                overflowX: 'auto',
                scrollSnapType: 'x mandatory',
                pb: 1,
                /* Hide scrollbar */
                '&::-webkit-scrollbar': { display: 'none' },
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
              }}
            >
              {reviews.map((review, index) => (
                <Box
                  key={index}
                  sx={{
                    flex: '0 0 auto',
                    width: { xs: '85vw', sm: '320px', md: '320px' },
                    scrollSnapAlign: 'start',
                    border: '1px solid #e8e8e8',
                    p: { xs: 2.5, md: 3 },
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.5,
                    transition: 'box-shadow 0.2s',
                    '&:hover': {
                      boxShadow: '0 4px 20px rgba(232,154,85,0.15)',
                      borderColor: '#E89A55',
                    },
                  }}
                >
                  {/* Avatar + Name */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box
                      sx={{
                        width: 46,
                        height: 46,
                        borderRadius: '50%',
                        backgroundColor: '#E89A55',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '13px' }}>
                        {review.avatar}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 700, fontSize: '14px', color: '#111', lineHeight: 1.2 }}>
                        {review.name}
                      </Typography>
                      <Typography sx={{ fontSize: '12px', color: '#888', lineHeight: 1.3 }}>
                        {review.subtitle}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Stars */}
                  <Box sx={{ display: 'flex', gap: 0.3 }}>
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <StarIcon key={i} sx={{ fontSize: 16, color: '#E89A55' }} />
                    ))}
                  </Box>

                  {/* Text */}
                  <Typography
                    sx={{
                      fontSize: '13px',
                      color: '#444',
                      lineHeight: 1.65,
                      flex: 1,
                    }}
                  >
                    {review.text}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Right arrow */}
            <Box
              onClick={scrollRight}
              sx={{
                position: 'absolute',
                right: { xs: -16, md: -28 },
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                width: { xs: 32, md: 44 },
                height: { xs: 32, md: 44 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #ddd',
                backgroundColor: '#fff',
                cursor: 'pointer',
                transition: 'all 0.2s',
                '&:hover': {
                  borderColor: '#E89A55',
                  backgroundColor: '#E89A55',
                  '& svg': { color: '#fff' },
                },
              }}
            >
              <ArrowForwardIcon sx={{ fontSize: { xs: 16, md: 20 }, color: '#555', transition: 'color 0.2s' }} />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
