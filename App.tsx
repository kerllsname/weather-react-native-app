import axios from 'axios';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Loading from './components/Loading';
import Weather from './components/Weather';
import { weatherData } from './types/types';

const API = 'a36fb2913553f057d1ba7758f5056bf4';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [requestedWeatherData, setNewData] = useState<weatherData>({
    main: {
      temp: 0,
    },
    name: '',
    weather: [
      {
        main: '',
        description: '',
      },
    ],
  });

  async function getWeatherRequest(latitude: number, longitude: number) {
    const { data } = await axios.get<weatherData>(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API}&units=metric`
    );

    setNewData(data);
  }

  async function weatherDataHandler() {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      await getWeatherRequest(latitude, longitude);
      setLoading(false);
    } catch (error) {
      Alert.alert('Error', `${error}`);
    }
  }

  useEffect(() => {
    const ac = new AbortController();

    weatherDataHandler();

    return () => ac.abort();
  }, []);

  return isLoading ? <Loading /> : <Weather weatherData={requestedWeatherData} />;
}
