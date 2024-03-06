import { useState, FC } from 'react';
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
import { Room } from '../../redux/types';
import { SidebarProps } from '../../types';
import './styles.scss';

const drawerWidth = 270;

const Sidebar: FC<SidebarProps> = ({ content, rooms }) => {
  const [currentRoom, setCurrentRoom] = useState(0);

  const handleRoomChange = (ind: number) => setCurrentRoom(ind);

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
        <List className="list-items">
          {rooms.map((room: Room, ind: number) => (
            <ListItem
              key={room.owner}
              disablePadding
              onClick={() => handleRoomChange(ind)}
              className={currentRoom === ind ? 'active-room' : ''}
              data-testid="rooms-list"
            >
              <ListItemButton>
                <ListItemIcon>
                  <CasinoOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={room.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
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
