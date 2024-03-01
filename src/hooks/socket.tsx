import { useEffect, useState } from 'react';
import { Socket } from 'socket.io';
import io from 'socket.io-client';

const useSocket = (serverUrl: string) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    // Create a new socket instance and set the state
    const newSocket = io(serverUrl);
    setSocket(newSocket);

    // Clean up the socket connection when the component unmounts
    return () => {
      newSocket.disconnect();
    };
  }, [serverUrl]);

  return socket;
};

export default useSocket;
