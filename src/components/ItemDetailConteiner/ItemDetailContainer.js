import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getProductById } from '../../AsyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailConteiner = () => {
    const [Products, SetProducts] = useState(null)

    const { ItemId } = useParams()

    useEffect(() => {
        getProductById('ItemId')
            .then(Response => {
                SetProducts(Response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [ItemId])

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...Products} />
        </div>
    )
}

export default ItemDetailConteiner