import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const image = { uri: 'https://reactjs.org/logo-og.png' };

export default function Loading(props: { state: string }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/giphy.gif')}
        resizeMode="stretch"
        style={styles.back}
        imageStyle={{ opacity: 0.7 }}
      >
        <View style={styles.loadingInfo}>
          <Text style={styles.text}>{props.state}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  back: {
    flex: 1,
  },
  loadingInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    backgroundColor: 'rgba(0,0,0,.5)',
    borderRadius: 3,
    color: 'white',
    fontSize: 30,
    fontWeight: '400',
  },
});
