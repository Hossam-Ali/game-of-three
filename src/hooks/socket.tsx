/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Socket } from 'socket.io';
import io from 'socket.io-client';
import { setName, setLoginUser } from '../redux/user';
import { setMessage } from '../redux/message';
import { setLoading } from '../redux/loading';
import { MessageResponse } from '../types';

const useSocket = () => {
  const socketRef = useRef<Socket | null>(null);
  const dispatch = useDispatch();

  const handleLoginMessage = (data: MessageResponse) => {
    dispatch(setMessage(data.message));
    dispatch(setName(data.user));
    dispatch(setLoginUser(true));
  };

  const handleJoinRoom = (data: MessageResponse) => {
    dispatch(setMessage(data.message));
  };

  useEffect(() => {
    const handleServerMessage = (data: MessageResponse) => {
      dispatch(setLoading(true));
      if (data.socketId) {
        handleLoginMessage(data);
      }
      if (data.room) {
        handleJoinRoom(data);
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
  }, []);

  return socketRef;
};

export default useSocket;
