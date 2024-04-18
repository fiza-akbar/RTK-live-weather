import React, { useEffect } from 'react';
import Card from './Card';
import './index.css'
import { useDispatch, useSelector } from 'react-redux';
import {changeVal, getWeather} from './store/slices/weatherSlice';

const Main = () => {
  let itemInput = useSelector(state => state.weatherSlice.inputVal);
  let items = useSelector(state => state.weatherSlice.items);
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${itemInput}&units=metric&appid=74947abd36e4f829308cf784921015db`;
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather(api));
  }, [])
  return (
    <>
      <div className="main">
        <div className="search">
          <input type="text" value={itemInput} onChange={(e) => dispatch(changeVal(e.target.value))} />
          <button className="btn-search" onClick={() => dispatch(getWeather(api))}>Search</button>
        </div>
        <Card {...items} />
      </div>
    </>
  );
}

export default Main;
