import { Container } from 'react-bootstrap';
import './App.css';
import Header from './component/Header';

function App() {
  return (
    <>
      <Header/>

      <main className='py-3'>
        <Container>
          Merhaba 
        </Container>
      </main>
    </>
  );
}

export default App;
