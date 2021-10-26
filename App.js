import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from "expo-app-loading";
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

import { Button } from "react-native";

import OnboardingScreen from "./src/screens/Onboarding";
import HomeScreen from "./src/screens/Home";
import SignUpScreen from "./src/screens/Auth";

const RootStack = createStackNavigator();

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
  });

  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleSignIn = () => {
    // TODO implement real sign in mechanism

    setIsAuthenticated(true);
  };
  const handleSignOut = () => {
    // TODO implement real sign in mechanism

    setIsAuthenticated(false);
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          {isAuthenticated ? (
            <RootStack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerRight: () => (
                  <Button onPress={handleSignOut} title="Sign Out" />
                ),
              }}
            />
          ) : (
            <>
              <RootStack.Screen name="Landing" component={OnboardingScreen} />
              <RootStack.Screen name="Signup">
                {(props) => <SignUpScreen {...props} onSignIn={handleSignIn} />}
              </RootStack.Screen>
            </>
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;
