import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div>
            <h1>Страница не найдена!</h1>
            <p>... Контент ...</p>
            <Link to="/">На главную</Link>
        </div>
    )
}

export default PageNotFound;