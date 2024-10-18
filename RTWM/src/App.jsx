import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Button, CircularProgress, TextField, Paper } from '@mui/material';
import WeatherDisplay from './components/WeatherDisplay';
import WeatherChart from './components/WeatherChart';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState('Delhi'); 
  const [error, setError] = useState('');
//   const apiKey = import.meta.env.VITE_API_KEY;

// console.log("API Key:", apiKey);  // For debugging


  const fetchWeather = async (city) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8f91885b6ce686ce3d4434cf8667b0cb&units=metric`);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city); 
    const interval = setInterval(() => fetchWeather(city), 300000); 
    return () => clearInterval(interval);
  }, [city]);

  const handleSearch = (e) => {
    e.preventDefault(); 
    fetchWeather(city);
  };

  return (
    <Container
      maxWidth="lg"
      style={{
        marginTop: '50px',
        backgroundColor: 'rgb(240, 244, 248)',
        padding: '20px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh', 
      }}
    >
      <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#3f51b5' }}>
        Real-Time Weather Dashboard
      </Typography>
      
      <form onSubmit={handleSearch} style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <TextField 
          label="Search City" 
          variant="outlined" 
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
          style={{ marginRight: '10px', width: '300px' }} 
        />
        <Button variant="contained" color="primary" type="submit">Search</Button>
      </form>

      {loading ? (
        <CircularProgress style={{ display: 'block', margin: '0 auto' }} />
      ) : error ? (
        <Typography variant="h6" color="error" align="center">{error}</Typography>
      ) : weatherData ? (
        <Grid container spacing={3} justifyContent="center"> 
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: '20px', borderRadius: '10px' }}>
              <WeatherDisplay weatherData={weatherData} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: '20px', borderRadius: '10px' }}>
              <WeatherChart weatherData={weatherData} /> 
            </Paper>
          </Grid>
        </Grid>
      ) : (
        <Typography variant="h6" align="center">Error fetching weather data</Typography>
      )}
      
      <Button variant="contained" color="primary" onClick={() => window.location.reload()} style={{ marginTop: '20px' }}>
        Refresh
      </Button>
    </Container>
  );
};

export default App;
