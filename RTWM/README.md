# Real-Time Weather Monitoring System

## Overview
The Real-Time Weather Monitoring System retrieves and displays live weather data for various cities using the OpenWeatherMap API. It provides an intuitive graphical display of temperature trends, making it easy to monitor weather conditions in real time.

## Features
- **Real-time Weather Data**: Get current weather information for any city using the OpenWeatherMap API.
- **Key Weather Parameters**: Display essential weather metrics such as temperature, humidity, wind speed, and more.
- **Temperature Trend Chart**: Visualize temperature trends over the past week.
- **Auto-Refresh**: Automatically refresh weather data every 5 minutes for the latest updates.
- **City Search Functionality**: Easily search for any city to retrieve its weather data.

## Technologies Used
- **Frontend**: React (with [Vite](https://vitejs.dev/))
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
Start the development server:
npm run dev

## Usage

### Search for a City
Enter the name of a city in the search bar to retrieve its current weather data and trends.

### Weather Parameters Display
The application shows key weather parameters, including:
- **Temperature**
- **Humidity**
- **Wind Speed**
- Other relevant weather information

## Temperature Trend Chart
View a graphical representation of temperature trends over the past week.

## Auto-Refresh
The application automatically refreshes weather data every 5 minutes to ensure you have the most up-to-date information.

---

## Thank You
Thank you for checking out our Real-Time Weather Monitoring System! We hope you find it useful and enjoyable. Happy coding!
