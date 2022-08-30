import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader";

const Home = ( { cart, setCart }) => {
    
    const [ isPending, SetIsPending ] = useState(true);
    const [ products, setProducts ] = useState(null);
    
    useEffect(() => {
        setTimeout(() => {
            axios.get("http://localhost:8000/products").then((res) => {
                setProducts(res.data);
                SetIsPending(false);
            })
        }, 1000)
    }, []);

    const increaseCart = (product) => {
        var findProduct = cart.find( (prod) => {
            return prod.id === product.id;
        })
        if(findProduct) {
            product.qty += 1;
        } else {
            product.qty = 1;
            setCart([...cart, product ]);
        }
    }
    return (
    <div>
        { isPending && <Loader/>}
        { products && (
            <div className="container-fluid pr-5 pl-5 mt-3">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            {
                                products.map( product => (
                                <div className="col-3" key={product.id}>
                                    <div className="card">
                                        <img className="card-image-top rounded" src={`${product.image}`} alt="" />
                                        <div className="card-body bg-white">
                                            <h4>{ product.name }</h4>
                                            <div>
                                                Price:
                                                <span className="badge badge-warning">$ { product.price }</span>
                                                <span onClick={ () => { increaseCart(product)}} className="btn btn-danger float-right">
                                                    <i className="fas fa-shopping-cart " />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))
                            } 
                        </div>
                    </div>
                </div>
            </div>
            )}
            
        </div>
        );
    }
    
    export default Home;