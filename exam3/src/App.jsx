import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import IzumrudniyPage from './pages/IzumrudniyPage';
import IqClubPage from './pages/IqClubPage';
import UsadyPage from './pages/UsadyPage';
import ZimnyayaGorkaPage from './pages/ZimnyayaGorkaPage';
import KonstantinovkaPage from './pages/KonstantinovkaPage';
import HousesPage from './pages/HousesPage';
import MortgagePage from './pages/MortgagePage';
import HouseDetailsPage from './pages/HouseDetailsPage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import MediaPage from './pages/MediaPage';
import MediaDetailPage from './pages/MediaDetailPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E87A1E',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': { boxShadow: 'none' },
        },
      },
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Наши проекты */}
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/izumrudny" element={<IzumrudniyPage />} />
          <Route path="/projects/iq-club" element={<IqClubPage />} />
          <Route path="/projects/usady" element={<UsadyPage />} />
          <Route path="/projects/zimnyaya-gorka" element={<ZimnyayaGorkaPage />} />
          <Route path="/projects/konstantinovka" element={<KonstantinovkaPage />} />

          {/* Дома */}
          <Route path="/houses" element={<HousesPage />} />
          <Route path="/house-details" element={<HouseDetailsPage />} />
          <Route path="/houses/one-floor" element={<HousesPage />} />
          <Route path="/houses/two-floor" element={<HousesPage />} />
          <Route path="/houses/townhouses" element={<HousesPage />} />
          <Route path="/houses/all" element={<HousesPage />} />

          {/* Ипотека */}
          <Route path="/mortgage" element={<MortgagePage />} />

          {/* О компании */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/team" element={<AboutPage />} />
          <Route path="/about/media" element={<MediaPage />} />
          <Route path="/about/media/:id" element={<MediaDetailPage />} />
          <Route path="/about/news" element={<NewsPage />} />
          <Route path="/about/news/:id" element={<NewsDetailPage />} />

          {/* Контакты */}
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
