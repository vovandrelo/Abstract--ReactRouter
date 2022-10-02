import { useSearchParams } from "react-router-dom";

// Отвечающий за отображения url: products/search

//<================================== ХУК USE-SEARCH-PARAMS =====================================>\\

// Хук useSearchParams позволяет реализовать поиск, динамически изменяя url.

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const onChangeUrl = event => {
        setSearchParams({ productName: event.target.value })
    }

    return (
        <input onChange={onChangeUrl} value={searchParams.get("productName") || ""}/>
    )
}

export default Search;