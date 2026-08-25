import { Box, Container, Typography } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Footer from '../components/Footer';
import { mediaData } from '../data/mediaData';

// VK icon SVG
function VkIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604.976.987 1.367 1.84 2.369 1.84h2.181c.649 0 .959-.337.759-.998-.2-.657-.973-1.476-2.037-2.481-1.563-1.469-1.349-1.232.529-3.783 1.181-1.652 1.653-2.662 1.505-3.090-.142-.406-.993-.3-1.342-.3h-2.181c-.536 0-.784.287-.944.716-.44 1.14-1.434 2.953-2.091 3.383-.337.219-.661.073-.661-.401v-3.268c0-.525-.132-.721-.66-.721h-3.427c-.385 0-.66.278-.66.628 0 .565.882.696.972 2.286v3.456c0 .666-.122.785-.387.785-.66 0-2.263-2.268-3.215-4.865-.187-.535-.375-.752-.914-.752H3.459c-.6 0-.721.278-.721.585 0 .614 1.893 5.9 5.559 8.236 2.908 1.854 5.865 1.734 7.865 1.463z" />
    </svg>
  );
}

// Tumblr icon
function TumblrIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.207 2.371h.09c.631-.02 1.486-.205 1.936-.419l1.156 3.425c-.436.636-2.4 1.374-4.304 1.406z" />
    </svg>
  );
}

const shareIcons = [
  { icon: <WhatsAppIcon sx={{ fontSize: 20 }} />, label: 'WhatsApp' },
  { icon: <VkIcon />, label: 'VK' },
  { icon: <LinkedInIcon />, label: 'LinkedIn' },
  { icon: <TumblrIcon />, label: 'Tumblr' },
];

export default function MediaDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const article = mediaData.find((item) => item.id === id);
  const otherNews = mediaData.filter((item) => item.id !== id).slice(0, 3);

  if (!article) {
    return (
      <Box sx={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h5">Статья не найдена</Typography>
      </Box>
    );
  }

  return (
    <>
      <Box sx={{ backgroundColor: '#fff', pt: { xs: 6, md: 8 }, pb: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          {/* Header Row */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: { xs: 4, md: 6 } }}>
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: '28px', md: '36px' },
                fontWeight: 700,
                color: '#111',
                textTransform: 'uppercase',
              }}
            >
              <Box component="span" sx={{ color: '#E89A55', fontStyle: 'italic', fontWeight: 500 }}>СМИ</Box> О НАС
            </Typography>

            <Box
              onClick={() => navigate('/about/media')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                cursor: 'pointer',
                color: '#E89A55',
                '&:hover': { textDecoration: 'underline' }
              }}
            >
              <ArrowBackIosNewIcon sx={{ fontSize: 12 }} />
              <Typography sx={{ fontSize: '13px', fontWeight: 500 }}>
                Назад к СМИ
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: { xs: 6, lg: 8 } }}>
            {/* Main Content */}
            <Box sx={{ flex: 1, maxWidth: { lg: '75%' } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AccessTimeOutlinedIcon sx={{ color: '#E89A55', fontSize: 18 }} />
                  <Typography sx={{ fontSize: '14px', color: '#666' }}>
                    {article.date}
                  </Typography>
                </Box>
                {article.sourceLogo && (
                  <Typography sx={{ fontSize: '20px', fontWeight: 800, color: '#e44', letterSpacing: '-0.5px' }}>
                    {article.sourceLogo}
                  </Typography>
                )}
              </Box>

              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: '24px', md: '32px' },
                  fontWeight: 600,
                  color: '#111',
                  mb: 4,
                  lineHeight: 1.25,
                }}
              >
                {article.title}
              </Typography>

              {/* Dynamic Content */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 6 }}>
                {article.content.map((block, index) => {
                  if (block.type === 'text') {
                    return (
                      <Typography key={index} sx={{ fontSize: '15px', color: '#333', lineHeight: 1.6 }}>
                        {block.text}
                      </Typography>
                    );
                  }
                  if (block.type === 'subtitle') {
                    return (
                      <Typography key={index} sx={{ fontSize: '18px', fontWeight: 700, color: '#111', mt: 2 }}>
                        {block.text}
                      </Typography>
                    );
                  }
                  if (block.type === 'image') {
                    return (
                      <Box
                        key={index}
                        component="img"
                        src={block.src}
                        alt="Article media graphic"
                        sx={{
                          width: '100%',
                          height: 'auto',
                          my: 2,
                        }}
                      />
                    );
                  }
                  return null;
                })}
              </Box>

              {/* Share */}
              <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid #eee', display: 'flex', alignItems: 'center', gap: 3 }}>
                <Typography sx={{ fontSize: '18px', fontWeight: 600, color: '#111', textTransform: 'uppercase' }}>
                  ПОДЕЛИТЬСЯ
                </Typography>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  {shareIcons.map((s) => (
                    <Box
                      key={s.label}
                      sx={{
                        width: 40,
                        height: 40,
                        border: '1px solid #ddd',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#555',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        '&:hover': {
                          borderColor: '#E89A55',
                          color: '#E89A55',
                        },
                      }}
                    >
                      {s.icon}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>

            {/* Sidebar (Other Media News) */}
            <Box sx={{ width: { xs: '100%', lg: '320px' }, flexShrink: 0 }}>
              <Typography
                sx={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#111',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  mb: 4,
                }}
              >
                Другие <Box component="span" sx={{ color: '#E89A55', fontStyle: 'italic', fontWeight: 400 }}>новости</Box>
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {otherNews.map((news) => (
                  <Box
                    key={news.id}
                    onClick={() => navigate(`/about/media/${news.id}`)}
                    sx={{
                      border: '1px solid #eee',
                      cursor: 'pointer',
                      transition: 'border-color 0.3s',
                      '&:hover': { borderColor: '#E89A55' },
                    }}
                  >
                    <Box
                      component="img"
                      src={news.image}
                      alt={news.title}
                      sx={{
                        width: '100%',
                        height: '160px',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                    <Box sx={{ p: 2.5 }}>
                      <Typography
                        sx={{
                          fontSize: '14px',
                          fontWeight: 600,
                          color: '#111',
                          mb: 1.5,
                          lineHeight: 1.4,
                        }}
                      >
                        {news.title}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <AccessTimeOutlinedIcon sx={{ color: '#E89A55', fontSize: 16 }} />
                        <Typography sx={{ fontSize: '12px', color: '#666' }}>
                          {news.date}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
