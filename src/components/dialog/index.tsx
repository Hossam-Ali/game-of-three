import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './styles.scss';

export default function FormDialog() {
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = () => setOpen(false);

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const name = formJson.name;
    console.log(name);
    handleClose();
  };

  return (
    <Dialog
      open={open}
      disableEscapeKeyDown={true}
      fullScreen={fullScreen}
      fullWidth={true}
      PaperProps={{
        component: 'form',
        onSubmit: handleOnSubmit,
      }}
      className="dialog-component"
      aria-labelledby="responsive-dialog-title"
      data-testid="dialog-component"
    >
      <DialogTitle
        id="responsive-dialog-title"
        className="dialog-header"
        data-testid="dialog-header"
      >
        Login
      </DialogTitle>
      <DialogContent>
        <DialogContentText>Please enter your name</DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="name"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
          data-testid="user-input"
        />
      </DialogContent>
      <DialogActions>
        <Button type="submit" data-testid="submit-button">
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
}
