import { Text, View, StyleSheet, SafeAreaView, StatusBar, Image } from 'react-native';
import { weatherData } from '../types/types';
import { LinearGradient } from 'expo-linear-gradient';

const weatherConditions = {
  clear: require('../assets/icons/clear.png'),
  clouds: require('../assets/icons/clouds.png'),
  drizzle: require('../assets/icons/drizzle.png'),
  other: require('../assets/icons/other.png'),
  rain: require('../assets/icons/rain.png'),
  snow: require('../assets/icons/snow.png'),
  thunderstorm: require('../assets/icons/thunderstorm.png'),
};

export default function Weather(props: { weatherData: weatherData }) {
  let condition = props.weatherData.weather[0].main.toLowerCase();
  let iconSource = null;

  if (condition == 'clear') {
    iconSource = weatherConditions.clear;
  } else if (condition == 'clouds') {
    iconSource = weatherConditions.clouds;
  } else if (condition == 'drizzle') {
    iconSource = weatherConditions.drizzle;
  } else if (condition == 'other') {
    iconSource = weatherConditions.other;
  } else if (condition == 'rain') {
    iconSource = weatherConditions.rain;
  } else if (condition == 'snow') {
    iconSource = weatherConditions.snow;
  } else if (condition == 'thunderstorm') {
    iconSource = weatherConditions.thunderstorm;
  }

  return (
    <LinearGradient colors={['#4c669f', '#3b5998']} style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.temperature}>
        <Image source={iconSource} style={styles.image} />
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
  image: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
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
