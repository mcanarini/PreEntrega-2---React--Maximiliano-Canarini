import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const Plass = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const Less = () => {
        if (quantity > stock) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className='Counter'>
            <div className='Control'>
                <button className='Button' onClick={Less}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className='Button' onClick={Plass}>+</button>
            </div>
            <div>
                <button className='Button' onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount