import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/register' element={<Register />}/>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
