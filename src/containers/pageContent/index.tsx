import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Card from '../../components/card';
import Sidebar from '../../components/sidebar';
import { Room, initialState } from '../../redux/types';
import { addRoom } from '../../redux/rooms';
import { setLoading } from '../../redux/loading';
import axiosInstance from '../../services';

type ContentType = JSX.Element;

const PageContent = () => {
  const [content, setContent] = useState<ContentType[]>([]);
  const dispatch = useDispatch();

  const rooms = useSelector((state: initialState) => state.rooms);
  const { startNumber } = useSelector((state: initialState) => state.room);

  // Function to add a new JSX element to the 'content' array
  const addContent = (newElement: ContentType) => {
    setContent((prevContent) => [...prevContent, newElement]);
  };

  useEffect(() => {
    if (!rooms.length) {
      dispatch(setLoading(true));
      axiosInstance
        .get('/rooms')
        .then((response) =>
          response.data.map((val: Room) => dispatch(addRoom(val)))
        )
        .catch((e) => console.error('error', e))
        .finally(() => dispatch(setLoading(false)));
    }
  }, [dispatch]);

  useEffect(() => {
    if (startNumber) {
      addContent(
        <>
          <Typography fontSize={69}>{startNumber}</Typography>
        </>
      );
    }
  }, [startNumber]);

  // const contenasdt = (
  //   <>
  //     <Card direction="left" choosedNumber={1} />
  //     <Card direction="right" choosedNumber={0} />
  //     <Card direction="left" choosedNumber={-1} />
  //     <Card direction="right" choosedNumber={1} />
  //   </>
  // );

  return (
    <Box className="page-content-container">
      <Sidebar content={content} rooms={rooms} />
    </Box>
  );
};

export default PageContent;
