import { useParams } from "react-router-dom";

// Отвечающий за отображения url: products/id

//<====================================== ХУК USE-PARAMS ========================================>\\

// Хук useParams позволяет извлечь переданные через url параметры.

const Product = () => {
    const { id } = useParams();

    return (
        <span>Переданный через url параметр: {id}</span>
    )
}

export default Product;