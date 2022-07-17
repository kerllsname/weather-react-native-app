import { Text, View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { weatherData } from '../types/types';
import { LinearGradient } from 'expo-linear-gradient';

export default function Weather(props: { weatherData: weatherData }) {
  const condition = props.weatherData.weather[0].main;
  let iconName = 'reload';

  if (condition == 'Thunderstorm') {
    iconName = 'thunderstorm';
  } else if (condition == 'Rain') {
    iconName = 'rainy';
  } else if (condition == 'Snow') {
    iconName = 'snow';
  } else if (condition == 'Clear') {
    iconName = 'sunny';
  } else if (condition == 'Clouds') {
    iconName = 'cloud';
  } else iconName = 'skull';

  return (
    <LinearGradient colors={['#4c669f', '#3b5998']} style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.temperature}>
        <Ionicons name={iconName} size={80} color={'white'} />
        <Text style={styles.temperature__temp}>{Math.round(props.weatherData.main.temp)}°</Text>
        <Text style={styles.temperature__description}>{props.weatherData.name}</Text>
      </View>
      <SafeAreaView style={styles.place}>
        <Text style={styles.place__title}>{props.weatherData.weather[0].main}</Text>
        <Text style={styles.place__subtitle}>{props.weatherData.weather[0].description}</Text>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  temperature: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temperature__temp: {
    fontSize: 52,
    color: 'white',
  },
  temperature__description: {
    color: 'white',
    fontSize: 18,
  },
  place: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  place__title: {
    color: 'white',
    fontSize: 44,
    fontWeight: '400',
    marginBottom: 10,
  },
  place__subtitle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 24,
  },
});
