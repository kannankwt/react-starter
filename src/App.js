import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';
import { Notifications } from '@mantine/notifications';
import { MantineProvider } from '@mantine/core';
import Login from './pages/Login';

function App() {

  return (
    <div className="App">
    <MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS
    theme={{
      colorScheme: 'light',
      fontFamily: 'DM Sans, sans-serif',
      colors: {
        'blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
        'pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
      }
    }}
    >
      <Notifications />
      <Routes>
        <Route path='/register' element={<Register />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </MantineProvider>
    </div>
  );
}

export default App;
