import { useState, useRef, useEffect } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import img1 from '../assets/876ac4f8fde38cefa4071c4dec4f8d125e8787a7.jpg';
import img2 from '../assets/e667e4b8e847e84132c15293554dcfa821de5262.jpg';

const images = [img1, img2, img1, img2, img1];

export default function SectionThree() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.children[0].offsetWidth;
      // adding gap to item width calculation for accuracy
      const gap = isMobile ? 16 : 24; 
      const index = Math.round(scrollLeft / (itemWidth + gap));
      setActiveIndex(index);
    }
  };

  const scrollTo = (index) => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.children[0].offsetWidth;
      const gap = isMobile ? 16 : 24;
      scrollRef.current.scrollTo({
        left: (itemWidth + gap) * index,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#fcfcfc', overflow: 'hidden' }}>
      
      {/* Slider Container */}
      <Box 
        ref={scrollRef}
        onScroll={handleScroll}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none', // Firefox
          '&::-webkit-scrollbar': { display: 'none' }, // Chrome
          gap: { xs: 2, md: 3 },
          // Padding to perfectly center the first and last items
          px: { xs: '7.5vw', md: '15vw' }, 
          py: 2
        }}
      >
        {images.map((src, i) => (
          <Box
            key={i}
            sx={{
              flex: '0 0 auto',
              width: { xs: '85vw', md: '70vw' },
              height: { xs: '35vh', sm: '50vh', md: '65vh' },
              scrollSnapAlign: 'center',
              borderRadius: 2,
              overflow: 'hidden',
              // Visual effect: non-active images are slightly faded and smaller
              opacity: activeIndex === i ? 1 : 0.5,
              transform: activeIndex === i ? 'scale(1)' : 'scale(0.95)',
              transition: 'all 0.4s ease-out',
              boxShadow: activeIndex === i ? '0 20px 40px rgba(0,0,0,0.1)' : 'none',
            }}
          >
            <Box
              component="img"
              src={src}
              alt={`Слайд ${i + 1}`}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Pagination Dashes */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, mt: { xs: 3, md: 5 } }}>
        {images.map((_, i) => (
          <Box
            key={i}
            onClick={() => scrollTo(i)}
            sx={{
              width: { xs: 30, md: 40 },
              height: 4,
              backgroundColor: activeIndex === i ? '#E87A1E' : '#e0e0e0',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              borderRadius: 1
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
