import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setName } from './redux/user';
import useSocket from './hooks/socket';
import './App.scss';

function App() {
  const socketRef = useSocket('http://localhost:6126');
  const dispath = useDispatch();

  const handleServerMessage = (data: string) => {
    console.log('Data', data);
  };

  useEffect(() => {
    if (!socketRef.current) return;

    socketRef.current.on('message', handleServerMessage);

    // Clean up the event listener when the component unmounts
    return () => {
      socketRef.current?.off('message', handleServerMessage);
    };
  }, [socketRef]);

  return (
    <>
      <button
        onClick={() => {
          socketRef.current?.emit('login', { username: 'testing' });
          dispath(setName(Math.random().toString()));
        }}
      >
        No
      </button>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
