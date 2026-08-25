import { useState } from 'react';
import { Box, Container, Typography, Button, Pagination, PaginationItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import Footer from '../components/Footer';
import { newsData } from '../data/newsData';

const YEARS = ['2017', '2018', '2019', '2020', '2021', '2022', '2023'];
const ITEMS_PER_PAGE = 4;

export default function NewsPage() {
  const [activeYear, setActiveYear] = useState('2023');
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  // Filter news by active year
  const filteredNews = newsData.filter(item => item.year === activeYear);
  const pageCount = Math.ceil(filteredNews.length / ITEMS_PER_PAGE) || 1;
  const currentItems = filteredNews.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleYearChange = (year) => {
    setActiveYear(year);
    setPage(1);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Box sx={{ backgroundColor: '#fff', pt: { xs: 8, md: 12 }, pb: { xs: 8, md: 12 }, minHeight: '80vh' }}>
        <Container maxWidth="lg">
          {/* Header */}
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: '32px', md: '44px' },
              fontWeight: 700,
              color: '#111',
              mb: { xs: 3, md: 5 },
              textTransform: 'uppercase',
            }}
          >
            Новости
          </Typography>

          {/* Year Filters */}
          <Box
            sx={{
              display: 'flex',
              gap: { xs: 1.5, md: 2 },
              mb: { xs: 4, md: 6 },
              flexWrap: 'wrap',
            }}
          >
            {YEARS.map(year => (
              <Button
                key={year}
                variant={activeYear === year ? 'contained' : 'outlined'}
                onClick={() => handleYearChange(year)}
                sx={{
                  backgroundColor: activeYear === year ? '#E89A55' : 'transparent',
                  color: activeYear === year ? '#fff' : '#111',
                  borderColor: activeYear === year ? '#E89A55' : '#eee',
                  boxShadow: 'none',
                  borderRadius: 0,
                  textTransform: 'none',
                  fontSize: '15px',
                  fontWeight: 500,
                  px: { xs: 2.5, md: 4 },
                  py: 1.2,
                  '&:hover': {
                    backgroundColor: activeYear === year ? '#d68742' : '#f5f5f5',
                    borderColor: activeYear === year ? '#d68742' : '#eee',
                    boxShadow: 'none',
                  },
                }}
              >
                {year}
              </Button>
            ))}
          </Box>

          {/* News List */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, md: 4 }, mb: { xs: 5, md: 8 } }}>
            {currentItems.length > 0 ? (
              currentItems.map((item) => (
                <Box
                  key={item.id}
                  onClick={() => navigate(`/about/news/${item.id}`)}
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    border: '1px solid #f0f0f0',
                    cursor: 'pointer',
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
                      minHeight: { md: '300px' },
                      position: 'relative',
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
                        position: 'absolute',
                        inset: 0,
                      }}
                    />
                  </Box>

                  {/* Content */}
                  <Box
                    sx={{
                      flex: 1,
                      p: { xs: 3, md: 5 },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: '20px', md: '26px' },
                        fontWeight: 600,
                        color: '#111',
                        mb: 2,
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                      <AccessTimeOutlinedIcon sx={{ color: '#E89A55', fontSize: 18 }} />
                      <Typography sx={{ fontSize: '13px', color: '#666' }}>
                        {item.date}
                      </Typography>
                    </Box>

                    <Typography
                      sx={{
                        fontSize: '15px',
                        color: '#444',
                        lineHeight: 1.6,
                        mb: 4,
                      }}
                    >
                      {item.shortDescription}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: '15px',
                        color: '#E89A55',
                        fontWeight: 500,
                        mt: 'auto',
                      }}
                    >
                      Читать далее
                    </Typography>
                  </Box>
                </Box>
              ))
            ) : (
              <Typography sx={{ fontSize: '18px', color: '#666', py: 5 }}>
                Нет новостей за выбранный год.
              </Typography>
            )}
          </Box>

          {/* Pagination */}
          {pageCount > 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Pagination
                count={pageCount}
                page={page}
                onChange={handlePageChange}
                shape="rounded"
                size="large"
                renderItem={(item) => (
                  <PaginationItem
                    components={{
                      previous: () => <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#555' }}>&lt; Пред.</Typography>,
                      next: () => <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#555' }}>След. &gt;</Typography>,
                    }}
                    {...item}
                  />
                )}
                sx={{
                  '& .MuiPaginationItem-root': {
                    borderRadius: 0,
                    border: '1px solid #eee',
                    color: '#111',
                    fontSize: '14px',
                    fontWeight: 500,
                    width: 46,
                    height: 46,
                    margin: '0 4px',
                    backgroundColor: '#fff',
                    '&.Mui-selected': {
                      backgroundColor: 'transparent',
                      color: '#E89A55',
                      borderColor: '#E89A55',
                      '&:hover': {
                        backgroundColor: 'rgba(232,154,85,0.05)',
                      },
                    },
                  },
                  '& .MuiPaginationItem-previousNext': {
                    width: 'auto',
                    minWidth: 80,
                    px: 2,
                    textTransform: 'none',
                  }
                }}
              />
            </Box>
          )}
        </Container>
      </Box>
      <Footer />
    </>
  );
}
