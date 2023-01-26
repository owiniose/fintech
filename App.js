import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeHeader from './components/HomeHeader';
import {useFonts} from 'expo-font'

const App = () => {

  const [loaded] = useFonts({
    RedHatBold: require('./assets/fonts/RedHatDisplay-Bold.ttf'),
    RedHatMedium: require('./assets/fonts/RedHatDisplay-Medium.ttf'),
  });

  if(!loaded) return null;

  return (
    <SafeAreaView>
      <HomeHeader/>
      <Text>Open up App.js to start working on your app!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
