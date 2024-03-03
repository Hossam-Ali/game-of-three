import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PageContent from './containers/pageContent';
import Header from './components/header';
// import Dialog from './components/dialog';
import { setName } from './redux/user';
import useSocket from './hooks/socket';

function App() {
  const socketRef = useSocket('http://localhost:6126');
  const dispath = useDispatch();

  const handleServerMessage = (data: string) => {
    console.log('Data', data);
  };

  useEffect(() => {
    const { current } = socketRef;
    if (!current) return;

    current.on('message', handleServerMessage);

    // Clean up the event listener when the component unmounts
    return () => {
      current?.off('message', handleServerMessage);
    };
  }, [socketRef]);

  return (
    <>
      {/* <Dialog /> */}
      <Header />
      <PageContent />
      <button
        onClick={() => {
          socketRef.current?.emit('login', { username: 'testing' });
          dispath(setName(Math.random().toString()));
        }}
      >
        Test
      </button>
    </>
  );
}

export default App;
