import "./weather.css";
import Search from "./search/search";
import Forecast from "./forecast/forecast";

const Weather = () => {
    return (
        <div className="weather">
            <h1 className="weather__header">React Redux Weather App</h1>
            <Search />
            <Forecast />
        </div>
    )
}

export default Weather