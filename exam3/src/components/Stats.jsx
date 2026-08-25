import { Box, Container, Grid, Typography, Divider, useMediaQuery, useTheme } from '@mui/material';

const stats = [
  {
    number: '10',
    description: 'Лет успешного опыта продаж загородной недвижимости',
  },
  {
    number: '1051',
    description: 'Га — площадь наших комфортных посёлков европейского класса',
  },
  {
    number: '5063',
    description: 'Счастливых владельцев загородных домов',
  },
];

function StatItem({ stat, isLast }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        flex: 1,
        px: { xs: 0, md: 4 },
        py: { xs: 3, md: 5 },
        borderBottom: isMobile && !isLast ? '1px solid rgba(0,0,0,0.08)' : 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'center', md: 'flex-start' },
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '3rem', md: '4.5rem' },
          fontWeight: 900,
          color: '#E87A1E',
          lineHeight: 1,
          mb: 1,
          letterSpacing: '-0.02em',
        }}
      >
        {stat.number}
      </Typography>
      <Divider
        sx={{
          borderColor: '#E87A1E',
          borderBottomWidth: 3,
          width: 48,
          mb: 1.5,
        }}
      />
      <Typography
        sx={{
          fontSize: { xs: '0.9rem', md: '0.95rem' },
          color: '#444',
          lineHeight: 1.6,
          maxWidth: 220,
        }}
      >
        {stat.description}
      </Typography>
    </Box>
  );
}

export default function Stats() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ backgroundColor: '#fff', py: { xs: 2, md: 0 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'stretch',
            divideX: isMobile ? 'none' : '1px solid rgba(0,0,0,0.1)',
          }}
        >
          {stats.map((stat, index) => (
            <Box
              key={stat.number}
              sx={{
                flex: 1,
                borderRight: !isMobile && index < stats.length - 1 ? '1px solid rgba(0,0,0,0.1)' : 'none',
              }}
            >
              <StatItem stat={stat} isLast={index === stats.length - 1} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
