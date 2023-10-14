import { Container } from 'react-bootstrap';
import './App.css';
import Header from './component/Header';
import Universities from './pages/Universities';

function App() {
  return (
    <>
      <Header/>

      <main className='py-3'>
        <Container>
          <Universities/>
        </Container>
      </main>
    </>
  );
}

export default App;
