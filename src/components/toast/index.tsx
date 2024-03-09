import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import { initialState } from '../../redux/types';
import './styles.scss';

export default function PositionedSnackbar() {
  const [open, setIsOpen] = useState(false);
  const message = useSelector((state: initialState) => state.message);

  const vertical = 'top';
  const horizontal = 'center';

  useEffect(() => {
    if (message) {
      setIsOpen(true);
    }
  }, [message]);

  const handleClose = () => setIsOpen(false);

  return (
    <Box sx={{ width: 500 }} className="toast-container">
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={handleClose}
        message={message}
        autoHideDuration={3000}
        key={vertical + horizontal}
        className="toast"
      />
    </Box>
  );
}
