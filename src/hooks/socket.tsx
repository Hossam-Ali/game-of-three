import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Socket } from 'socket.io';
import io from 'socket.io-client';
import { setName, setMessage, setLoginUser } from '../redux/user';
import { setLoading } from '../redux/loading';
import { LoginResponse } from '../types';

const useSocket = () => {
  const socketRef = useRef<Socket | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleLoginMessage = (data: LoginResponse) => {
      dispatch(setMessage(data.message));
      dispatch(setName(data.user));
      dispatch(setLoginUser(true));
    };

    const handleServerMessage = (data: LoginResponse) => {
      dispatch(setLoading(true));
      if (data.socketId) {
        handleLoginMessage(data);
      }
    };

    // Create a new socket instance and store it in the ref
    socketRef.current = io(import.meta.env.VITE_SOCKET_URL);

    if (socketRef.current) {
      socketRef.current.on('message', handleServerMessage);
    }

    return () => {
      // Disconnect and clear the socket when the component unmounts
      if (socketRef.current) {
        socketRef.current.off('message', handleServerMessage);
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, [dispatch]);

  return socketRef;
};

export default useSocket;
