import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CasinoOutlinedIcon from '@mui/icons-material/CasinoOutlined';
import Typography from '@mui/material/Typography';
import useSocket from '../../hooks/socket';
import { Room, initialState } from '../../redux/types';
import { setStartNumber } from '../../redux/room';
import { setCurrentRoom, setGameStart } from '../../redux/user';
import { setLoading } from '../../redux/loading';
import { SidebarProps } from '../../types';
import { generateRandomnNumber } from '../utils/randomNumber';
import Loader from '../loader';
import './styles.scss';

const drawerWidth = 270;

const Sidebar: FC<SidebarProps> = ({ content, rooms }) => {
  const socketRef = useSocket();
  const dispatch = useDispatch();

  const isLoading = useSelector((state: initialState) => state.loading);
  const user = useSelector((state: initialState) => state.user);
  const message = useSelector((state: initialState) => state.message);

  useEffect(() => {
    if (message === `welcome to room ${user.currentRoom}`) {
      dispatch(setLoading(false));
    }
  }, [dispatch, message]);

  const handleRoomChange = (room: Room) => {
    socketRef.current?.emit('joinRoom', {
      username: user.name,
      room: room.name,
      roomType: room.type,
    });
    dispatch(setCurrentRoom(room.name));
  };

  const handleContentChange = () => {
    if (user.currentRoom && !user.gameStart) {
      return (
        <div className="start-game">
          <Button
            variant="outlined"
            size="large"
            startIcon={<CasinoOutlinedIcon />}
            onClick={handleStartGame}
          >
            Start New Game
          </Button>
        </div>
      );
    } else if (user.currentRoom && user.gameStart) {
      return (
        <>
          {content}
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
    } else {
      return <Typography>Please join a room </Typography>;
    }
  };

  const handleStartGame = () => {
    const randomNumber = generateRandomnNumber();
    dispatch(setGameStart(true));
    dispatch(setStartNumber(randomNumber));
  };

  return (
    <Box sx={{ display: 'flex' }} className="sidebar-component">
      <CssBaseline />

      <Drawer
        className="drawer-component"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Typography
          sx={{ fontSize: 20 }}
          color="text"
          gutterBottom
          className="choose-room-text"
        >
          Choose your room
        </Typography>
        {isLoading ? (
          <Loader />
        ) : (
          <List className="list-items">
            {rooms.map((room: Room) => (
              <ListItem
                key={room.owner}
                disablePadding
                onClick={() => handleRoomChange(room)}
                className={user.currentRoom === room.name ? 'active-room' : ''}
                data-testid="rooms-list"
              >
                <ListItemButton>
                  <ListItemIcon className="casino-icon">
                    <CasinoOutlinedIcon fill="white" />
                  </ListItemIcon>
                  <ListItemText primary={room.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        )}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        {handleContentChange()}
      </Box>
    </Box>
  );
};

export default Sidebar;
