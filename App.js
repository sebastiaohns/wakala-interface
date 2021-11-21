import "node-libs-react-native/globals";
import * as React from "react";
import "./global";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import AppLoading from "expo-app-loading";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import {
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";
import { DMSans_700Bold, DMSans_400Regular } from "@expo-google-fonts/dm-sans";

import globalStore from "./src/redux/GlobalStore";
import Screens from "./src/screens";


const store = createStore(globalStore);


const RootStack = createStackNavigator();

LogBox.ignoreLogs([
  "Warning: The provided value 'moz",
  "Warning: The provided value 'ms-stream",
]);

let hasBoarded = false;
const loadAppSession = async () => {
  try {
    let user = await AsyncStorage.getItem('user')
    let data = JSON.parse(user)
    let action = {type: "INIT", value: data}
    store.dispatch(action)
    hasBoarded = data.finishedBoarding === true
    return true
  } catch (err) {
    console.log(err)
  }
}

const App = () => {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
    DMSans_700Bold,
    DMSans_400Regular,
  });

  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [state, setState] = React.useState(store.getState());
  const handleSignIn = () => {
    // TODO implement real sign in mechanism
    setIsAuthenticated(true);
  };
  const handleSignOut = () => {
    // TODO implement real sign in mechanism
    setIsAuthenticated(false);
  };

  let [isReady, setReady] = React.useState(false)
  if (!isReady || !fontsLoaded) {
    return <AppLoading startAsync={loadAppSession}
                       onFinish={() => setReady(true)}
                       onError={console.warn}
                       autoHideSplash={true}
    />;
  } else {
    return (
        <Provider store={store}>
          <NavigationContainer>
            <Screens />
          </NavigationContainer>
        </Provider>
    );
  }
};

export default App;
