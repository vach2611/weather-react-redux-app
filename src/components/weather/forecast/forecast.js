import {useSelector} from "react-redux";
import {weatherData} from "redux/slices/weatherSlice";
import {weatherIcon} from "api/api.utils";
import Loading from "components/loading/loading";
import "./forecast.css";

const Forecast = () => {
    const { data, loading, error } = useSelector(weatherData)

    const weatherMeta = data?.weather[0]
    const temp = Math.ceil(Number(data?.main.temp))
    const countryName = data?.name
    const countrySys = data?.sys?.country

    return (
        <div className="weather__forecast">
            {loading && <Loading />}
            {error && !loading && <p>{error?.message}</p>}
            {data && <>
                <div className="forecast__header">
                    <div className="forecast__icon">
                        <img src={weatherIcon(weatherMeta?.icon)} alt=""/>
                    </div>
                    <div>
                        <p className="forecast__title">{weatherMeta?.main}</p>
                        <p className="forecast__temp">{temp} <span>°C</span></p>
                    </div>
                </div>
                <div className="forecast__country">
                <p className="country__title">{countryName}, {countrySys}</p>
                <p className="country__description">
                    The weather condition in {countryName},
                    {countrySys} is described as : {weatherMeta?.description} with a temperature of {temp} °C and a humidity of {data?.main?.humidity}%
                </p>
                </div>
            </>}
        </div>
    )
}

export default Forecast