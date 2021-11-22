export const weatherApi = (country) => {
    return `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
}
export const weatherIcon = (icon) => {
    return `https://openweathermap.org/img/wn/${icon}.png`
}