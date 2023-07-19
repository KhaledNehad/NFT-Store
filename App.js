import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Welcome from './screens/Welcome';
import NFTDetails from './screens/NFTDetails';

export default function App() {
  const [fontLoaded] = useFonts({
    InterBold: require('./assets/fonts/Inter-Bold.ttf'),
    InterLight: require('./assets/fonts/Inter-Light.ttf'),
    InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
    InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
    InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
  });
  if (!fontLoaded) return null;

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='NFT-details' component={NFTDetails} />
      </Stack.Navigator>
      <StatusBar style='light' />
    </NavigationContainer>
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
