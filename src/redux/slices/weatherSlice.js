import { createAsyncThunk, createSlice, createSelector } from "@reduxjs/toolkit";
import axios from "axios";
import {weatherApi} from "api/api.utils";

export const fetchWeatherAction = createAsyncThunk(
    "weather/fetch",
    async (country, { rejectWithValue }) => {
        try {
            const url = weatherApi(country)
            const { data } = await axios.get(url);
            return data;
        } catch (error) {
            if (!error?.response) {
                throw error;
            }
            return rejectWithValue(error?.response?.data);
        }
    }
);


const weatherSlice = createSlice({
    name: "weather",
    initialState: {},
    extraReducers: builder => {
        //pending data
        builder.addCase(fetchWeatherAction.pending, (state) => {
            state.loading = true;
        });
        //fulfilled data
        builder.addCase(fetchWeatherAction.fulfilled, (state, action) => {
            state.data = action?.payload;
            state.loading = false;
            state.error = null;
        });
        //rejected
        builder.addCase(fetchWeatherAction.rejected, (state, action) => {
            state.loading = false;
            state.data = null;
            state.error = action?.payload;
        });
    },
});

const weatherDataSelector = ({weather}) => weather;
export const weatherData = createSelector(weatherDataSelector, data => data)

export default weatherSlice.reducer;
