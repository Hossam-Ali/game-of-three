import Cookies from 'js-cookie';
import PageContent from './containers/pageContent';
import Header from './components/header';
import Dialog from './components/dialog';

function App() {
  const isLoggedIn = Cookies.get('isLoggedIn');

  return (
    <>
      {!isLoggedIn && <Dialog />}
      <Header />
      <PageContent />
    </>
  );
}

export default App;
