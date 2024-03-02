import { useEffect, useRef } from 'react';
import { Socket } from 'socket.io';
import io from 'socket.io-client';

const useSocket = (serverUrl: string) => {
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    // Create a new socket instance and store it in the ref
    socketRef.current = io(serverUrl);

    return () => {
      // Disconnect and clear the socket when the component unmounts
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, [serverUrl]);

  return socketRef;
};

export default useSocket;
