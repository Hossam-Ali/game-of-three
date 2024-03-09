import { FC, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
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
import { setCurrentRoom } from '../../redux/user';
import { setLoading } from '../../redux/loading';
import { SidebarProps } from '../../types';
import Loader from '../loader';
import './styles.scss';

const drawerWidth = 270;

const Sidebar: FC<SidebarProps> = ({ content, rooms }) => {
  const [selectedRoom, setSelectedRoom] = useState('');
  const socketRef = useSocket();
  const dispatch = useDispatch();
  const isLoading = useSelector((state: initialState) => state.loading);
  const user = useSelector((state: initialState) => state.user);
  const message = useSelector((state: initialState) => state.message);

  useEffect(() => {
    if (message === `welcome to room ${selectedRoom}`) {
      dispatch(setLoading(false));
    }
  }, [dispatch, message]);

  const handleRoomChange = (room: Room) => {
    setSelectedRoom(room.name);
    socketRef.current?.emit('joinRoom', {
      username: user.name,
      room: room.name,
      roomType: room.type,
    });
    dispatch(setCurrentRoom(room.name));
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
                className={selectedRoom === room.name ? 'active-room' : ''}
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
        {content}
      </Box>
    </Box>
  );
};

export default Sidebar;
