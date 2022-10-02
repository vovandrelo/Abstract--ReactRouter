//<================================ ИМПОРТ НЕОБХОДИМЫХ БИБЛИОТЕК ================================>\\
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"

//<================================= ИМПОРТ НЕОБХОДИМЫХ СТРАНИЦ =================================>\\
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import PageNotFound from "./pages/PageNotFound"

//<================================= ИМПОРТ НЕОБХОДИМЫХ МОДУЛЕЙ =================================>\\
import Product from "./components/Product"
import Search from "./components/Search"

//<============================= ОПИСАНИЕ REACT-ROUTER КОМПОНЕНТОВ ==============================>\\

// Компонент BrowserRouter - предоставляет расположенным внутри Route-ам данные об url.
// Компонент Routes        - исключает возможность запуска нескольких Route-ов.
// Компонент Route         - на основании текущего url отрисовывает указанный компонент/страницу.

//<====================================== ВЛОЖЕННЫЕ ROUTE-Ы =====================================>\\

// Для использования вложенной навигации внутри Route-а располагаются другие Route-ы, причём, путь,
// за который они отвечают, указывается относительно родительского Route-а.

// Чтобы отрисовать страницы/компоненты, указанные во вложенных Route-ах, необходимо внутри
// родительского Route-а использовать Outlet, который автоматически заменится на необходимый
// компонент/страницу. В случае, если будет использован путь только родительского Route-а, то
// Outlet проигнорируется или, если таковое указано, выведется значение по-умолчанию.

//<================================= ИСПОЛЬЗОВАНИЕ REACT-ROUTER =================================>\\

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>

                <Route path="/products" element={<ProductsPage/>}>
                    <Route path="" element={<span>Дефолтное значение вложенной навигации</span>}/>
                    <Route path=":id" element={<Product/>}/>
                    <Route path="search" element={<Search/>}/>
                </Route>

                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;