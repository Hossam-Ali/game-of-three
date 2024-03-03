import { ReactNode, useState, FC } from 'react';
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
import './styles.scss';

const drawerWidth = 240;

interface SidebarProps {
  content: ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ content }) => {
  const [currentRoom, setCurrentRoom] = useState(0);
  const rooms = ['Berlin CPU', 'Amsterdam CPU', 'Hossam'];

  const handleRoomChange = (ind: number) => setCurrentRoom(ind);

  return (
    <Box sx={{ display: 'flex' }} className="sidebar-component">
      <CssBaseline />

      <Drawer
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
        <List className="list-items">
          {rooms.map((text: string, ind: number) => (
            <ListItem
              key={text}
              disablePadding
              onClick={() => handleRoomChange(ind)}
              className={currentRoom === ind ? 'active-room' : ''}
              data-testid="rooms-list"
            >
              <ListItemButton>
                <ListItemIcon>
                  <CasinoOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
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
