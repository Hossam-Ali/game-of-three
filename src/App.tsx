import { useDispatch } from 'react-redux';
import { setName } from './redux/user';
import useSocket from './hooks/socket';
import './App.scss';

function App() {
  const socket = useSocket('http://localhost:6126');
  const dispath = useDispatch();

  return (
    <>
      <h1> Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <button
          onClick={() => {
            socket?.emit('test', { message: 1 });
            dispath(setName(Math.random().toString()));
          }}
        >
          No
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
