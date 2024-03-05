import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '../../components/card';
import Sidebar from '../../components/sidebar';
import './styles.scss';
import { Box } from '@mui/material';

const PageContent = () => {
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

  return (
    <Box className="page-content-container">
      <Sidebar content={content} />
    </Box>
  );
};

export default PageContent;
