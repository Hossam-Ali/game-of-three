import { useEffect, useRef } from 'react';
import { Socket } from 'socket.io';
import io from 'socket.io-client';

const useSocket = (url: string): Socket => {
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    // Create a new socket instance if it doesn't exist
    if (!socketRef.current) {
      socketRef.current = io(url);
    }

    // Cleanup function to close the socket when the component unmounts
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, [url]);

  return socketRef.current!;
};

export default useSocket;
