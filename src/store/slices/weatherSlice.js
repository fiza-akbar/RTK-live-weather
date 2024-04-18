import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getWeather = createAsyncThunk("getWeather", async(api) => {
    let data = await fetch(api);
    let res = await data.json();
    const {humidity, pressure, temp} = res.main;
    const {name} = res;
    const {country, sunset} = res.sys;
    const {main:atmosphere} = res.weather[0];
    const {speed} = res.wind;

    const allInputs = {
      humidity, 
      pressure, 
      temp, 
      name, 
      country, 
      sunset, 
      atmosphere, 
      speed
    }
    return allInputs;
  
})

const weatherSlice = createSlice({
    name:"weather",
    initialState:{
        inputVal:'lahore',
        items:{},
    },
    reducers:{
     changeVal(state, action){
        state.inputVal = action.payload;
     }
    },
    extraReducers(builder){
        builder.addCase(getWeather.fulfilled, (state, action) => {
            state.items = action.payload;
        });
    },
});

export default weatherSlice.reducer;
export const {changeVal, updItems} = weatherSlice.actions;