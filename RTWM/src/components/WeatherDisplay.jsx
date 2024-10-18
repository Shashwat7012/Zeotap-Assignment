import React from 'react';
import { Typography, Grid } from '@mui/material';

const WeatherDisplay = ({ weatherData }) => {
  const { main, weather, wind } = weatherData;
  const weatherCondition = weather[0].main.toLowerCase();

  
  const getWeatherIcon = (condition) => {
    switch (condition) {
      case 'clear':
        return '☀️'; 
      case 'clouds':
        return '☁️'; 
      case 'rain':
        return '🌧️'; 
      case 'snow':
        return '❄️'; 
      default:
        return '🌈'; 
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>{`Weather in ${weatherData.name}`}</Typography>
      <Typography variant="h4">{`${Math.round(main.temp)}°C`}</Typography>
      <Typography variant="h6">{getWeatherIcon(weatherCondition)} {weather[0].description}</Typography>
      <Typography variant="body1">Feels Like: {Math.round(main.feels_like)}°C</Typography>
      <Typography variant="body1">Humidity: {main.humidity}%</Typography>
      <Typography variant="body1">Wind Speed: {wind.speed} m/s</Typography>
    </div>
  );
};

export default WeatherDisplay;
