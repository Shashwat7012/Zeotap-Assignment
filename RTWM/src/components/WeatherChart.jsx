import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Typography } from '@mui/material';

const WeatherChart = ({ weatherData }) => {
  
  const data = [
    { name: 'Mon', temp: 22 },
    { name: 'Tue', temp: 25 },
    { name: 'Wed', temp: 23 },
    { name: 'Thu', temp: 28 },
    { name: 'Fri', temp: 26 },
    { name: 'Sat', temp: 30 },
    { name: 'Sun', temp: 27 },
  ];

  return (
    <div>
      <Typography variant="h6" align="center">Temperature Trend (Last Week)</Typography>
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temp" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default WeatherChart;
