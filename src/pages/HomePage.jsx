import { Link } from "react-router-dom";

//<====================================== КОМПОНЕНТ LINK ========================================>\\

// Компонент Link позволяет изменить текущий url на указанный

const HomePage = () => {
    return (
        <div>
            <h1>Домашняя страница</h1>
            <p>... Контент ...</p>
            <Link to="/products">Перейти на страницу №1</Link>
            <p>... Контент ...</p>
        </div>
    )
}

export default HomePage;