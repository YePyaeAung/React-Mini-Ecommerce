import { useState } from 'react';
import Navbar from './Pages/Layouts/Navbar';
import MainRouter from './Pages/MainRouter';

function App() {
  const [ cart, setCart ] = useState([]);
  return (
    <div className="App">
      <Navbar cart={cart} setCart={setCart} />
      <MainRouter cart={cart} setCart={setCart}/>
    </div>
  );
}

export default App;
