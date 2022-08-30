const Cart = ({ cart, setCart }) => {
    const qtyReduce = (product) => {
        if(product.qty > 0) {
            setCart(prevState => prevState.map(preData => {
                if(preData.id === product.id) {
                    var updateQty = preData.qty - 1;
                    return { ...preData, qty: updateQty };
                }
                return preData;
            }))
        }
    }
    const qtyIncrease = (product) => {
        setCart(prevState => prevState.map(preData => {
            if(preData.id === product.id) {
                var updateQty = preData.qty + 1;
                return { ...preData, qty: updateQty };
            }
            return preData;
        }))
    }
    return (
        <div className="container mt-4">
            <h3>All Carts</h3>
            <div className="row">
                <div className="col-12">
                    <table className="table-striped table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Qty Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            cart.map( (singleCart) => {
                                return (
                                    <tr key={ singleCart.id }>
                                        <td>{ singleCart.id }</td>
                                        <td>{ singleCart.name }</td>
                                        <td>$ { singleCart.price }</td>
                                        <td>{ singleCart.qty }</td>
                                        <td>{ singleCart.price * singleCart.qty }</td>
                                        <td>
                                            <span onClick={ () => qtyReduce(singleCart) } className="btn btn-sm btn-danger">-</span>
                                            <span onClick={ () => qtyIncrease(singleCart) } className="btn btn-sm btn-success">+</span>
                                        </td>
                                    </tr>
                                )
                            })
                            }
                            {/* <tr>
                                <td colSpan={4} />
                                <td colSpan={1}>
                                    <h3>Total : <span className="btn btn-sm btn-outline-danger">$ 4000</span></h3>
                                </td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
 
export default Cart;