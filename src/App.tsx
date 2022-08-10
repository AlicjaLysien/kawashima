import { BrowserRouter } from 'react-router-dom';
import Main from './layout/Main';
import Navigation from './layout/Navigation';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <Main/>
      </BrowserRouter>
    </div>
  );
}

export default App;
