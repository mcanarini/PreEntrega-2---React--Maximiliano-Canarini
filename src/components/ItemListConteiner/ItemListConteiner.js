import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { getProductsByCategory, getProducts} from '../../AsyncMock'
import ItemList from "../ItemList/ItemList"

const ItemListConteiner = ({ greeting }) => {
    const [Products, SetProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory: getProducts
        asyncFunc(categoryId)
            .then(Response => {
                SetProducts(Response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList Products={Products} />
        </div>

    )
}


export default ItemListConteiner