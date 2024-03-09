import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '../../components/card';
import Sidebar from '../../components/sidebar';
import { Room, initialState } from '../../redux/types';
import { addRoom } from '../../redux/rooms';
import { setLoading } from '../../redux/loading';
import axiosInstance from '../../services';
import './styles.scss';

const PageContent = () => {
  const dispatch = useDispatch();

  const rooms = useSelector((state: initialState) => state.rooms);
  const user = useSelector((state: initialState) => state.user);

  useEffect(() => {
    dispatch(setLoading(true));
    axiosInstance
      .get('/rooms')
      .then((response) =>
        response.data.map((val: Room) => dispatch(addRoom(val)))
      )
      .catch((e) => console.error('error', e))
      .finally(() => dispatch(setLoading(false)));
  }, [dispatch]);

  const content = (
    <>
      <Card direction="left" choosedNumber={1} />
      <Card direction="right" choosedNumber={0} />
      <Card direction="left" choosedNumber={-1} />
      <Card direction="right" choosedNumber={1} />

      <ButtonGroup
        variant="outlined"
        aria-label="Basic button group"
        className="action-group"
      >
        <Button>-1</Button>
        <Button>0</Button>
        <Button>1</Button>
      </ButtonGroup>
    </>
  );

  const chooseRoom = <Typography>Please join a room </Typography>;

  return (
    <Box className="page-content-container">
      <Sidebar
        content={user.currentRoom === '0' ? chooseRoom : content}
        rooms={rooms}
      />
    </Box>
  );
};

export default PageContent;
