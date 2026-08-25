import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

export default function CallModal({ open, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [agreed, setAgreed] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    // Reset after close animation
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setPhone('');
      setAgreed(true);
    }, 300);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 0,
          px: { xs: 2, sm: 3 },
          py: 1,
          position: 'relative',
        },
      }}
    >
      {/* Close button */}
      <IconButton
        onClick={handleClose}
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
          color: '#555',
          '&:hover': { color: '#E89A55' },
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent sx={{ px: 0, pt: 3, pb: 3 }}>
        {!submitted ? (
          /* ── Form view ── */
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            <Typography
              sx={{
                textAlign: 'center',
                fontSize: { xs: '17px', sm: '19px' },
                fontWeight: 400,
                color: '#111',
                lineHeight: 1.45,
                pr: 3,
              }}
            >
              Оставьте свои данные и наш менеджер перезвонит вам в течении 30 минут
            </Typography>

            {/* Name */}
            <Box>
              <Typography sx={{ fontSize: '13px', color: '#333', mb: 0.8 }}>
                Имя <Box component="span" sx={{ color: '#E89A55' }}>*</Box>
              </Typography>
              <TextField
                fullWidth
                size="small"
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 0,
                    '& fieldset': { borderColor: '#ccc' },
                    '&:hover fieldset': { borderColor: '#E89A55' },
                    '&.Mui-focused fieldset': { borderColor: '#E89A55', borderWidth: 1 },
                  },
                }}
              />
            </Box>

            {/* Phone */}
            <Box>
              <Typography sx={{ fontSize: '13px', color: '#333', mb: 0.8 }}>
                Телефон <Box component="span" sx={{ color: '#E89A55' }}>*</Box>
              </Typography>
              <TextField
                fullWidth
                size="small"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 (___) ___-__-__"
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 0,
                    '& fieldset': { borderColor: '#ccc' },
                    '&:hover fieldset': { borderColor: '#E89A55' },
                    '&.Mui-focused fieldset': { borderColor: '#E89A55', borderWidth: 1 },
                  },
                }}
              />
            </Box>

            {/* Submit button */}
            <Button
              fullWidth
              onClick={handleSubmit}
              sx={{
                backgroundColor: 'transparent',
                border: '1px solid #E89A55',
                color: '#E89A55',
                borderRadius: 0,
                textTransform: 'none',
                fontSize: '15px',
                fontWeight: 500,
                py: 1.4,
                transition: 'all 0.25s',
                '&:hover': {
                  backgroundColor: '#E89A55',
                  color: '#fff',
                },
              }}
            >
              Заказать звонок
            </Button>

            {/* Checkbox */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  sx={{
                    color: '#ccc',
                    '&.Mui-checked': { color: '#E89A55' },
                    p: 0.5,
                  }}
                />
              }
              label={
                <Typography sx={{ fontSize: '12px', color: '#555', lineHeight: 1.4 }}>
                  Я согласен с политикой обработки персональных данных
                </Typography>
              }
              sx={{ alignItems: 'flex-start', mx: 0 }}
            />
          </Box>
        ) : (
          /* ── Success view ── */
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2.5,
              py: 3,
            }}
          >
            <CheckCircleOutlinedIcon
              sx={{
                fontSize: 72,
                color: '#E89A55',
              }}
            />
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: '20px', sm: '22px' },
                color: '#111',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                textAlign: 'center',
              }}
            >
              ВАШ ЗАПРОС ПРИНЯТ
            </Typography>
            <Typography
              sx={{
                fontSize: '14px',
                color: '#666',
                textAlign: 'center',
                lineHeight: 1.6,
              }}
            >
              Наш менеджер свяжется с вами
              <br />в ближайшее время
            </Typography>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
}
