import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeHeader from './components/HomeHeader';
import {useFonts} from 'expo-font'
import Categories from './components/Categories';
import Listings from './components/Listings';
import JobCards from './components/JobCards';

const App = () => {

  const [loaded] = useFonts({
    RedHatBold: require('./assets/fonts/RedHatDisplay-Bold.ttf'),
    RedHatMedium: require('./assets/fonts/RedHatDisplay-Medium.ttf'),
  });

  if(!loaded) return null;

  return (
    <SafeAreaView>
      <HomeHeader/>
      <Categories/>
      <Listings/>
      <JobCards/>
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
