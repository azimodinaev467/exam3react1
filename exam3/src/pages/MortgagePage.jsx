import { Box, Typography, Button, Container, useTheme, useMediaQuery, Grid, MenuItem, Select, FormControl, Slider, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '../components/Footer';
import bgImage from '../assets/70a019a482f29f88166cf180bf18ea3b04109681.jpg';
import keychainImg from '../assets/23cb2b3f7b99cef2163422e0531eb8f850491ad3.jpg';
import familyImg from '../assets/25e664d4b4af2fa3d9d53e9436125a805a481e5d (1).jpg';

const ProgramCard = ({ title, text, image, isHalf }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      backgroundColor: '#F3F4F5',
      minWidth: { xs: '85vw', md: isHalf ? 'calc(50% - 12px)' : '100%' },
      flex: isHalf ? '1 1 calc(50% - 12px)' : '1 1 100%',
      scrollSnapAlign: 'start',
      overflow: 'hidden',
    }}
  >
    <Box
      sx={{
        flex: 1,
        p: { xs: 4, md: 6 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, textTransform: 'uppercase', fontSize: isHalf ? { xs: '1.5rem', md: '1.8rem' } : { xs: '1.8rem', md: '2.2rem' } }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, flexGrow: 1 }}>
        {text}
      </Typography>
      <Button 
        variant="outlined" 
        sx={{ 
          borderColor: '#df924e', 
          color: 'black',
          borderWidth: '1px',
          padding: '12px 30px',
          fontWeight: 600,
          textTransform: 'none',
          borderRadius: 0,
          '&:hover': {
            borderWidth: '1px',
            borderColor: '#c67e41',
            backgroundColor: 'transparent'
          }
        }}
      >
        Рассчитать платёж
      </Button>
    </Box>
    <Box
      sx={{
        flex: 1,
        minHeight: { xs: '280px', md: 'auto' },
        backgroundImage: `url("${image}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  </Box>
);

export default function MortgagePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Custom Slider styles to match design
  const sliderStyles = {
    color: '#E87A1E',
    height: 2,
    '& .MuiSlider-thumb': {
      height: 20,
      width: 20,
      backgroundColor: '#fff',
      border: '2px solid #f5f5f5',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
      },
    },
    '& .MuiSlider-rail': {
      opacity: 0, // hide standard rail, use background box
    },
    '& .MuiSlider-track': {
      border: 'none',
    },
  };

  const inputContainerStyles = {
    backgroundColor: '#F7F7F7',
    borderRadius: '4px',
    px: 2,
    pt: 2,
    pb: 3,
    position: 'relative',
    mb: 4
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.2)',
            zIndex: 1,
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, textAlign: 'center', color: 'white', pt: { xs: 10, md: 0 } }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', gap: { xs: 2, md: 3 }, mb: 4 }}>
            <Typography variant="h1" sx={{ fontWeight: 700, fontSize: { xs: '2.5rem', md: '5.5rem' }, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
              Ипотека от
            </Typography>
            <Box sx={{ backgroundColor: { xs: 'transparent', md: 'white' }, border: { xs: '2px solid rgba(255,255,255,0.7)', md: 'none' }, padding: { xs: '5px 30px', md: '10px 40px' }, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h1" sx={{ color: theme.palette.primary.main, fontWeight: 700, fontSize: { xs: '4rem', md: '6rem' }, lineHeight: 1 }}>
                4%
              </Typography>
            </Box>
          </Box>
          <Box sx={{ maxWidth: '800px', margin: '0 auto', mb: 5 }}>
            <Typography variant="h6" sx={{ fontWeight: 500, fontSize: { xs: '1rem', md: '1.3rem' }, mb: 1 }}>Уникальные ипотечные программы на специальных условиях.</Typography>
            {!isMobile && (
              <Typography variant="h6" sx={{ fontWeight: 500, fontSize: { xs: '1rem', md: '1.3rem' }, mb: 1 }}>Просто заполните анкету и получите одобрение.</Typography>
            )}
            <Typography variant="h6" sx={{ fontWeight: 600, fontSize: { xs: '1.1rem', md: '1.4rem' } }}>Всего шаг — до дома вашей мечты!</Typography>
          </Box>
          <Button variant="contained" color="primary" sx={{ padding: '12px 40px', fontSize: '1.1rem', fontWeight: 500, textTransform: 'none', borderRadius: '0', backgroundColor: '#df924e', '&:hover': { backgroundColor: '#c67e41' } }}>
            Расчитать платёж
          </Button>
        </Container>
      </Box>

      {/* Calculator Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography variant="h3" sx={{ fontWeight: 600, mb: 5, textTransform: 'uppercase', fontSize: { xs: '1.8rem', md: '2.2rem' } }}>
          Ипотека
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 4, md: 8 }, alignItems: 'flex-start' }}>
          
          {/* Form Column */}
          <Box sx={{ flex: '0 0 auto', width: { xs: '100%', md: '45%' }, maxWidth: '450px' }}>
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>Вид недвижимости</Typography>
                <FormControl fullWidth size="small">
                  <Select defaultValue="all" sx={{ backgroundColor: '#F7F7F7', '& fieldset': { border: 'none' } }}>
                    <MenuItem value="all">Все</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>Проект</Typography>
                <FormControl fullWidth size="small">
                  <Select defaultValue="all" sx={{ backgroundColor: '#F7F7F7', '& fieldset': { border: 'none' } }}>
                    <MenuItem value="all">Все</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            
            <Box sx={{ mb: 3 }}>
              <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>Вид ипотеки</Typography>
              <FormControl fullWidth size="small">
                <Select defaultValue="all" sx={{ backgroundColor: '#F7F7F7', '& fieldset': { border: 'none' } }}>
                  <MenuItem value="all">Все</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* Sliders */}
            <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>Стоимость</Typography>
            <Box sx={inputContainerStyles}>
              <Typography sx={{ fontWeight: 500 }}>3 000 000 ₽</Typography>
              <Slider defaultValue={15} sx={{ ...sliderStyles, position: 'absolute', bottom: -12, left: 16, width: 'calc(100% - 32px)' }} />
            </Box>

            <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>Первоначальный взнос</Typography>
            <Box sx={inputContainerStyles}>
              <Typography sx={{ fontWeight: 500 }}>2 000 000 ₽</Typography>
              <Slider defaultValue={60} sx={{ ...sliderStyles, position: 'absolute', bottom: -12, left: 16, width: 'calc(100% - 32px)' }} />
            </Box>

            <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>Ежемесячный платёж</Typography>
            <Box sx={inputContainerStyles}>
              <Typography sx={{ fontWeight: 500 }}>60 000 ₽</Typography>
              <Slider defaultValue={80} sx={{ ...sliderStyles, position: 'absolute', bottom: -12, left: 16, width: 'calc(100% - 32px)' }} />
            </Box>

            <Button variant="contained" fullWidth sx={{ mt: 2, padding: '14px 0', fontSize: '1.1rem', fontWeight: 600, textTransform: 'none', backgroundColor: '#df924e', borderRadius: 0, '&:hover': { backgroundColor: '#c67e41' } }}>
              Рассчитать платёж
            </Button>
          </Box>

          {/* Banks Column */}
          {!isMobile && (
            <Box sx={{ flex: '1 1 auto', display: 'flex', flexWrap: 'wrap', gap: 3 }}>
              
              {/* Bank 1 */}
              <Box sx={{ flex: '1 1 calc(50% - 24px)', minWidth: '220px' }}>
                <Paper variant="outlined" sx={{ p: 4, height: '100%', borderRadius: 0, borderColor: '#e0e0e0' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 4, display: 'flex', alignItems: 'center', gap: 1, textTransform: 'uppercase' }}>
                    <span style={{ fontSize: '1.2rem' }}>A</span> АО "АЛЬФА БАНК"
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>Ставка</Typography>
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>4,1 %</Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 2 }}>от 4 000 ₽ / мес</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>Программа</Typography>
                  <Typography variant="body1">Семейная</Typography>
                </Paper>
              </Box>

              {/* Bank 2 */}
              <Box sx={{ flex: '1 1 calc(50% - 24px)', minWidth: '220px' }}>
                <Paper variant="outlined" sx={{ p: 4, height: '100%', borderRadius: 0, borderColor: '#e0e0e0' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 4, display: 'flex', alignItems: 'center', gap: 1, textTransform: 'uppercase' }}>
                    <span style={{ fontSize: '1.2rem', color: '#004C99' }}>≡</span> БАНК ВТБ (ПАО)
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>Ставка</Typography>
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>4,1 %</Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 2 }}>от 4 000 ₽ / мес</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>Программа</Typography>
                  <Typography variant="body1">Семейная</Typography>
                </Paper>
              </Box>

              {/* Bank 3 */}
              <Box sx={{ flex: '1 1 calc(50% - 24px)', minWidth: '220px' }}>
                <Paper variant="outlined" sx={{ p: 4, height: '100%', borderRadius: 0, borderColor: '#e0e0e0' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 4, display: 'flex', alignItems: 'center', gap: 1, textTransform: 'uppercase' }}>
                    <span style={{ fontSize: '1.2rem', color: '#21A038' }}>●</span> ПАО СБЕРБАНК
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>Ставка</Typography>
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>4,1 %</Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 2 }}>от 4 000 ₽ / мес</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>Программа</Typography>
                  <Typography variant="body1">Семейная</Typography>
                </Paper>
              </Box>

              {/* Bank 4 */}
              <Box sx={{ flex: '1 1 calc(50% - 24px)', minWidth: '220px' }}>
                <Paper variant="outlined" sx={{ p: 4, height: '100%', borderRadius: 0, borderColor: '#e0e0e0' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 4, display: 'flex', alignItems: 'center', gap: 1, textTransform: 'uppercase' }}>
                    <span style={{ fontSize: '1.2rem', color: '#E82A2A' }}>©</span> ПАО "СОВКОМБАНК"
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>Ставка</Typography>
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>4,1 %</Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 2 }}>от 4 000 ₽ / мес</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>Программа</Typography>
                  <Typography variant="body1">Семейная</Typography>
                </Paper>
              </Box>

            </Box>
          )}
        </Box>
      </Container>

      {/* Programs Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 }, mb: 10 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'row', md: 'row' },
            flexWrap: { xs: 'nowrap', md: 'wrap' },
            gap: 3,
            overflowX: { xs: 'auto', md: 'visible' },
            scrollSnapType: { xs: 'x mandatory', md: 'none' },
            pb: { xs: 2, md: 0 },
            '&::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none',
          }}
        >
          <ProgramCard 
            title="ИПОТЕЧНЫЕ КРЕДИТЫ" 
            text="Выгодная ипотечная программы и специальные условия. Просто заполните анкету и получите одобрение. Всего один шаг, и дом — ваш. Ставка действует весь срок до 30 лет при сумме кредита до 100 млн рублей и первом взносе от 13,7%."
            image={keychainImg}
            isHalf={false}
          />
          <ProgramCard 
            title="СЕМЕЙНАЯ ИПОТЕКА" 
            text="Воспользоваться программой «Семейная ипотека» возможно до 1 июля 2024 года при рождении первого ребенка или последующих детей."
            image={familyImg}
            isHalf={true}
          />
          <ProgramCard 
            title="ГОСПОДДЕРЖКА 2023" 
            text="Ипотеку с господдержкой могут получить граждане России, у которых есть постоянная регистрация, официальная работа и стабильный доход."
            image={familyImg}
            isHalf={true}
          />
          <ProgramCard 
            title="IT СПЕЦИАЛИСТАМ" 
            text="Оформить ипотеку по сниженной ставке может гражданин России, трудоустроенный в компании, которая работает в сфере информационных технологий. Возраст — от 18 до 50 лет включительно. Стаж — не менее 3 месяцев на текущем месте работы."
            image={keychainImg}
            isHalf={false}
          />
        </Box>

        {/* Mobile Pagination Dots (visual only indicator) */}
        {isMobile && (
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 3 }}>
            <Box sx={{ width: 30, height: 4, backgroundColor: '#A0A0A0' }} />
            <Box sx={{ width: 30, height: 4, backgroundColor: '#E0E0E0' }} />
            <Box sx={{ width: 30, height: 4, backgroundColor: '#E0E0E0' }} />
            <Box sx={{ width: 30, height: 4, backgroundColor: '#E0E0E0' }} />
          </Box>
        )}
      </Container>

      {/* FAQ Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, mb: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' }, gap: 2, mb: 4 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
            Ответы на <span style={{ color: '#E87A1E' }}>вопросы</span>
          </Typography>
          <Button 
            variant="contained" 
            sx={{ 
              backgroundColor: '#df924e', 
              color: 'white', 
              borderRadius: 0, 
              padding: '10px 24px',
              textTransform: 'none',
              fontWeight: 500,
              fontSize: '1rem',
              '&:hover': { backgroundColor: '#c67e41' }
            }}
          >
            Перезвоните мне
          </Button>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {/* FAQ 1 */}
          <Accordion disableGutters elevation={0} defaultExpanded sx={{ backgroundColor: '#F3F4F5', '&:before': { display: 'none' } }}>
            <AccordionSummary 
              expandIcon={<Box sx={{ backgroundColor: 'white', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ExpandMoreIcon /></Box>}
              sx={{ px: { xs: 2, md: 4 }, py: 2 }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600 }}>Можно ли использовать материнский капитал для первоначального взноса?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: { xs: 2, md: 4 }, pb: 4 }}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Да, возможно. Если средств материнского капитала не хватает для первоначального взноса, то вы можете добавить собственные средства.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                После рассмотрения пакета документов банк рассчитывает сумму кредита, который он может выдать на данных условиях. После этого возможны два варианта:
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                — увеличение максимальной суммы кредита на величину материнского капитала с автоматическим уменьшением первоначального взноса;
              </Typography>
              <Typography variant="body1">
                — использование материнского капитала для первоначального взноса без увеличения суммы кредита.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* FAQ 2 */}
          <Accordion disableGutters elevation={0} sx={{ backgroundColor: '#F3F4F5', '&:before': { display: 'none' } }}>
            <AccordionSummary 
              expandIcon={<Box sx={{ backgroundColor: 'white', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ExpandMoreIcon /></Box>}
              sx={{ px: { xs: 2, md: 4 }, py: 2 }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600 }}>Нужно ли привозить бумажные документы или все можно отправить электронно?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: { xs: 2, md: 4 }, pb: 4 }}>
              <Typography variant="body1">
                Для подачи заявки на ипотеку достаточно сканов или фото всех документов. Анкету на кредит также можно подписать дистанционно.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* FAQ 3 */}
          <Accordion disableGutters elevation={0} sx={{ backgroundColor: '#F3F4F5', '&:before': { display: 'none' } }}>
            <AccordionSummary 
              expandIcon={<Box sx={{ backgroundColor: 'white', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ExpandMoreIcon /></Box>}
              sx={{ px: { xs: 2, md: 4 }, py: 2 }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600 }}>Есть ли требование к гражданству?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: { xs: 2, md: 4 }, pb: 4 }}>
              <Typography variant="body1">
                По стандартным программам требования к гражданству нет. Ипотека с Господдержкой и Семейная ипотека распространяется только на граждан РФ.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* FAQ 4 */}
          <Accordion disableGutters elevation={0} sx={{ backgroundColor: '#F3F4F5', '&:before': { display: 'none' } }}>
            <AccordionSummary 
              expandIcon={<Box sx={{ backgroundColor: 'white', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ExpandMoreIcon /></Box>}
              sx={{ px: { xs: 2, md: 4 }, py: 2 }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600 }}>Я работаю неофициально. У меня есть шанс получить ипотеку?</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: { xs: 2, md: 4 }, pb: 4 }}>
              <Typography variant="body1">
                Да, ипотеку получить возможно. Практические все наши банки-партнеры могут рассмотреть заявку на ипотечный кредит по двум документам, без предоставления документов о трудоустройстве. Для этого необходимо заполнить анкету, паспорт и СНИЛС.
              </Typography>
            </AccordionDetails>
          </Accordion>

        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
