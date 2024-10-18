# Real-Time Weather Monitoring System

## Overview
This project is a real-time weather monitoring system that retrieves and displays weather data for various cities. The system uses the OpenWeatherMap API to fetch live weather data and provides a graphical display of temperature trends.

## Features
- Real-time weather data for any city using the OpenWeatherMap API.
- Display of key weather parameters such as temperature, humidity, wind speed, and more.
- Temperature trend chart for the past week.
- Auto-refresh of weather data every 5 minutes.
- Simple city search functionality.

## Technologies Used
- **Frontend**: React (using [Vite](https://vitejs.dev/))
- **Styling**: [Material UI](https://mui.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **API**: [OpenWeatherMap API](https://openweathermap.org/api)


## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd RTWM
npm install
Add your OpenWeatherMap API key to a .env file in the root directory:
VITE_API_KEY=your_openweathermap_api_key
npm run dev

## Usage

- **Search for a City**: Enter the name of a city in the search bar to retrieve the current weather data and trends.
  
- **Weather Parameters Display**: The application will show key weather parameters, including:
  - Temperature
  - Humidity
  - Wind Speed
  - Other relevant weather information

- **Temperature Trend Chart**: The application provides a graphical representation of temperature trends over the past week.

- **Auto-Refresh**: The weather data will automatically refresh every 5 minutes to ensure you have the latest information.

## Thank You
Thank you for checking out our Real-Time Weather Monitoring System! We hope you find it useful and enjoyable. Happy coding!


