import { FC } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Fab from '@mui/material/Fab';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { lightBlue } from '@mui/material/colors';
import './styles.scss';

interface ChatCardProps {
  direction: string;
  choosedNumber: number;
}

const ChatCard: FC<ChatCardProps> = ({
  direction = 'left',
  choosedNumber = 1,
}) => (
  <Box className={`card-component ${direction}`}>
    <Avatar
      sx={{ bgcolor: direction === 'left' ? lightBlue[500] : '#61c77a' }}
      className="avatar-img"
    >
      N
    </Avatar>

    <div className="player-game">
      <Fab
        color="primary"
        aria-label="add"
        data-testid="choosedNumber"
        className={direction === 'right' ? 'right-avatar' : ''}
      >
        {choosedNumber}
      </Fab>

      <Card className="card-items" data-testid="card">
        <CardContent>
          <Typography
            sx={{ fontSize: 14, color: 'blue' }}
            color="text.secondary"
            gutterBottom
          >
            [ ( -1+19 ) / 3 ] = 6
          </Typography>
          <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
            6
          </Typography>
        </CardContent>
      </Card>
    </div>
  </Box>
);

export default ChatCard;
