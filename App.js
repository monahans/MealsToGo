import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { useFonts as useOswald, Oswald_400Regular, } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular, } from '@expo-google-fonts/lato';

// import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { theme } from './src/infrastructure/theme';
import { RestaurantScreen } from './src/features/restaurants/screens/restaurant.screen';
// import { Text } from '../../../components/typography/text.component';
import { SafeArea } from './src/components/utils/safe-area.component';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurant.context';
import { LocationContextProvider } from "./src/services/location/location.context";

const Settings = () => <SafeArea><Text>Settings</Text></SafeArea>;
const Map = () => <SafeArea><Text>Map</Text></SafeArea>;


const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: ['restaurant-sharp', 'restaurant-outline'],
  Map: ['map', 'map-outline'],
  Settings: ['settings', 'settings-outline']
}

const createScreenOptions = ({ route }) => {
  let iconName;
  // const iconName = TAB_ICON[route.name][0];
  return {
    tabBarIcon: ({ focused, size, color }) => (
      <Ionicons
      name={focused
        ? TAB_ICON[route.name][0]
        : TAB_ICON[route.name][1]}
      size={size}
      color={color}/>
    )
  ,
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'gray',
  };
};

export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeArea>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <NavigationContainer>
                <Tab.Navigator
                  screenOptions={createScreenOptions}
                >
                  <Tab.Screen name="Restaurants" component={RestaurantScreen} />
                  <Tab.Screen name="Map" component={Map} />
                  <Tab.Screen name="Settings" component={Settings} />
                </Tab.Navigator>
              </NavigationContainer>
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </SafeArea>
      </ThemeProvider>
      
      <ExpoStatusBar style='auto'/> 
    </>
  );
}

