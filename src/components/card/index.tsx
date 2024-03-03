import { FC } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Badge from '@mui/material/Badge';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
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
    <Badge
      badgeContent={choosedNumber}
      color="primary"
      showZero
      data-testid="badge"
    >
      <Card data-testid="card">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            [ ( -1+19 ) / 3 ] = 6
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            6
          </Typography>
        </CardContent>
      </Card>
    </Badge>
  </Box>
);

export default ChatCard;
