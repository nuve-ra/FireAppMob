import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator, useAnimatedHeaderHeight } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// ✅ Correct paths (update to your actual folder)
import List from "./.expo/APP/List";
import Login from "./.expo/APP/Login";
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

const Stack = createNativeStackNavigator();

export default function App() {
  //const [authenticated,setAuthenticated] = useState(false);
  useEffect(()=>{
    onAuthStateChanged
  },[])
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="My Todos" component={List} />
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
