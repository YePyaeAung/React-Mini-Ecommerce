import { Route, Routes } from "react-router-dom";
import About from "./About";
import Cart from "./Cart";
import Home from "./Home";

const MainRouter = ({cart, setCart}) => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
                <Route path="/about" element={<About/>} />
                <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
            </Routes>
        </div>
    );
}
 
export default MainRouter;