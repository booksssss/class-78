import 'react-native-gesture-handler' 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/Home';
import ISS_location from './Screens/ISS_location';
import Meteor from './Screens/Meteor';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator intialRouteName="Home" screenOptions={{headerShown:false}}>

     
      <Stack.Screen name = "Home" component={HomeScreen}/> 
      <Stack.Screen name = "ISS_Location" component={ISS_location}/>
      <Stack.Screen name = "Meteor" component={Meteor}/>
     
    

      </Stack.Navigator>

   

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
