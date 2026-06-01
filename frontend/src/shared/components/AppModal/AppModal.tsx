import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { AppModalProps } from './AppModal.types';

export const AppModal = ({ open, onClose, children }: AppModalProps) => (
  <Modal open={open} onClose={onClose}>
    <Box sx={{ maxWidth: 720, mx: 'auto', mt: 8, p: 3, bgcolor: 'background.paper' }}>
      {children}
    </Box>
  </Modal>
);
