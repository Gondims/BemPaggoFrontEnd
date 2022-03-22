import { Component, Fragment } from 'react';
import './App.css';
import FormularioCompras from './components/FormularioCompras/FormularioCompras';
import Container from '@mui/material/Container';



class App extends Component {
  render(){
    return (
      <Container component="article" maxWidth="sm">
        <FormularioCompras />
      </Container>
    );
  }
}

export default App;
