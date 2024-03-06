import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Loader from '../loader';
import axiosInstance from '../services';
import useSocket from '../../hooks/socket';
import { Room, initialState } from '../../redux/types';
import { addRoom } from '../../redux/rooms';
import { setLoading } from '../../redux/loading';
import './styles.scss';

const FormDialog = () => {
  const [open, setOpen] = useState(true);
  const [name, setName] = useState('');
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const socketRef = useSocket();
  const dispatch = useDispatch();

  const { message } = useSelector((state: initialState) => state.user);
  const isLoading = useSelector((state: initialState) => state.loading);

  useEffect(() => {
    if (message === `Welcome ${name}`) {
      axiosInstance
        .get('/rooms')
        .then((response) => {
          response.data.map((val: Room) => dispatch(addRoom(val)));
          handleClose();
        })
        .catch((e) => console.error('error', e))
        .finally(() => dispatch(setLoading(false)));
    }
  }, [dispatch, message, name]);

  const handleClose = () => setOpen(false);

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const name = formJson.name;
    setName(name.toString());
    socketRef.current?.emit('login', { username: name });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
            <DialogContentText data-testid="dialog-content">
              Please enter your name
            </DialogContentText>
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
      )}
    </>
  );
};

export default FormDialog;
