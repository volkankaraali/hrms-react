import './App.css';

import Dashboard from './layouts/Dashboard';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'semantic-ui-css/semantic.min.css'

import { Container } from 'semantic-ui-react'
import Navibar from './layouts/Navibar';



function App() {
  return (
    <div className="App">
      <Navibar></Navibar>
      <Container>
        <Dashboard></Dashboard>
      </Container>
    </div>
  );
}

export default App;
