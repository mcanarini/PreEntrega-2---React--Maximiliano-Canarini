import 'Item.css'
import {Link} from 'react-router-dom'

const Item = ({ id, name, img, price, stock }) => {
    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>{name}</h2>
            </header>
            <picture className="ItemImg">
                <img src={img} alt={name} />
            </picture>
            <section>
                <p className='Info'>
                    Precio: ${price}
                </p>
                <p className='Info'> Stock Disponible: {stock}
                </p>
            </section>
            <footer className='InfoFooter'>
                <Link to={'/Item/${Id}'} className='Option'>Ver Detalle</Link>
            </footer>
        </article>
    )
}

export default Item