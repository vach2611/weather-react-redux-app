import {useMemo, useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import {debounce} from "lodash";
import {fetchWeatherAction} from "redux/slices/weatherSlice";
import "./search.css";

const Search = () => {
    const dispatch = useDispatch()
    const [query, setQuery] = useState('')

    const inputHandler = ({target}) => {
        if(target.value){
            setQuery(target.value);
        }
    };
    const debouncedChangeHandler = useMemo( () => debounce(inputHandler, 300),[]);

    useEffect(() => {
        dispatch(fetchWeatherAction(query))
    }, [query])

    return (
        <div className="weather__search">
            <div className="search__input">
                <input onChange={debouncedChangeHandler} type="search" placeholder="Write Country ..."/>
            </div>
        </div>
    )
}

export default Search