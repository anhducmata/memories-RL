import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddMemory from './components/AddMemory';
import Interact from './components/Interact';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Memory App</h1>
        <Switch>
          <Route path="/add-memory" component={AddMemory} />
          <Route path="/interact" component={Interact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
