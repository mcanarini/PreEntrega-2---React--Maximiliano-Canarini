import cart from './Assets/cart.png'

const CartWidget = () =>{
    return(
        <div>
        <img className="cart" src= {cart} alt="cart-widget" />
        0
        </div>
    )
}

export default CartWidget