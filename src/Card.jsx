import React from 'react';
 
let iconWeather;

const Card = ({
  humidity,
  pressure,
  temp,
  name,
  country,
  sunset,
  atmosphere,
  speed
}) => {

  let convertMilliseconds = new Date(sunset * 1000);
  let sunSet = `${convertMilliseconds.getHours()}:${convertMilliseconds.getMinutes()}`

  switch (atmosphere) {
    case 'Clouds':
      iconWeather = 'wi wi-cloudy';
      break;
    case 'Smoke':
      iconWeather = 'wi wi-smoke';
      break;
    case 'Smog':
      iconWeather = 'wi wi-smog';
      break;
    case 'Fog':
      iconWeather = 'wi wi-fog';
      break;
    case 'Humidity':
      iconWeather = 'wi wi-humidity';
      break;
    case 'Haze':
      iconWeather = 'wi wi-day-haze';
      break;
    case 'Mist':
      iconWeather = 'wi wi-dust';
      break;

    default:
      iconWeather = 'wi wi-day-sunny';
      break;
  }
  return (
    <>
      <div className="card">
        <div className="first"> <h1><i className={iconWeather}></i></h1></div>
        <div className="grid">
          <div className='flex'><p>{temp}°</p>
            <p style={{ fontSize: '25px' }}>{atmosphere}<br /><span className="head">{name},{country}</span></p></div>
          <div className='flex_t'>{new Date().toLocaleDateString()}<br />{new Date().toLocaleTimeString()}</div>
        </div>
        <div className="items">
          <div>
            <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '18px' }}><i className="wi wi-sunset"></i></div>
            <div><p>Sunset <br />
              {sunSet}</p></div>
          </div>
          <div>
            <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '18px' }}><i className="wi wi-humidity"></i></div>
            <div><p>Humidity <br />
              {humidity}</p></div>
          </div>
          <div>
            <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '18px' }}><i className="wi wi-rain"></i></div>
            <div><p>Pressure <br />
              {pressure} MM</p></div>
          </div>
          <div>
            <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '18px' }}><i className="wi wi-strong-wind"></i></div>
            <div><p>Wind <br />
              {speed}</p></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
