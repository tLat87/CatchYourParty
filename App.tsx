import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./src/redux/store";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import HomeScreen from "./src/screens/HomeScreen";
import GameRulesScreen from "./src/screens/GameRulesScreen";
import GameRoundScreen from "./src/screens/GameRoundScreen";
import CardCreator from "./src/screens/CardCreator.tsx";
import AboutApp from "./src/screens/AboutApp";
import InitialScreen from "./src/screens/InitialScreen";

const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{
                        headerShown: false,
                        headerTintColor: 'white',
                        headerShadowVisible: false,
                    }}>
                        <Stack.Screen name="InitialScreen" component={InitialScreen} options={{ headerShown: false }} />

                        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{}} />
                        <Stack.Screen name="GameRulesScreen" component={GameRulesScreen} options={{}} />
                        <Stack.Screen name="GameRoundScreen" component={GameRoundScreen} options={{}} />
                        <Stack.Screen name="CardCreator" component={CardCreator} options={{}} />
                        <Stack.Screen name="AboutApp" component={AboutApp} options={{}} />

                    </Stack.Navigator>
                </NavigationContainer>
          </PersistGate>
         </Provider>
    );
}

// <BackgroundMusic/>
