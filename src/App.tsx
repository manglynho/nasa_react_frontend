import { Container } from '@mui/material';
import { Navigation } from './components/Navigation';
import { NasaMasonry } from './components/NasaMasonry';

function App(){ 
  return (
      <Container maxWidth="md">        
        <Navigation/>
        <NasaMasonry/>        
    </Container>
  );
}

export default App;