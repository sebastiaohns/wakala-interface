import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
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
import { DMSans_700Bold, DMSans_400Regular } from "@expo-google-fonts/dm-sans";

import OnboardingScreen from "./src/screens/Onboarding";
import HomeScreen from "./src/screens/Home";
import SignUpScreen from "./src/screens/Auth";
import CustomDrawer from "./src/components/CustomDrawer";
import { COLORS, SIZES } from "./src/consts/theme";
import VerifyNumber from "./src/screens/Auth/VerifyNumber";
import ToC from "./src/screens/Auth/ToC";
import AccountAddress from "./src/screens/Settings/AccountAddress";
import PinDoNotMatch from "./src/screens/Settings/PinDoNotMatch";
import ContactSupportScreen from "./src/screens/Help/ContactSupportScreen";
import PinSuccessScreen from "./src/screens/Settings/PinSuccessScreen";
import RecoveryPhrase from "./src/screens/Settings/RecoveryPhrase";
import SettingsScreen from "./src/screens/Settings/SettingsScreen";
import HelpScreen from "./src/screens/Help/HelpScreen";
import ResetAccountScreen from "./src/screens/Settings/ResetAccountScreen";
import SelectCurrencyScreen from "./src/screens/Settings/SelectCurrencyScreen";
import ContactScreen from "./src/screens/Help/ContactScreen";

import SelectTopUpWithdraw from "./src/screens/AddDeposit/SelectTopUpWithdraw";
import CashMpesa from "./src/screens/AddDeposit/CashMpesa";
import AddFunds from "./src/screens/AddDeposit/AddFunds";
import ConfirmFunds from "./src/screens/AddDeposit/ConfirmFunds";
import SendMpesa from "./src/screens/AddDeposit/SendMpesa";
import Success from "./src/screens/AddDeposit/Success";
import SetPIN from "./src/screens/Auth/SetPIN";
import ConnectPhone from "./src/screens/Auth/ConnectPhone";
import PhoneVerificationLoader from "./src/screens/Auth/PhoneVerification";
import VerifyCeloCodes from "./src/screens/Auth/VerifyCeloCodes";

const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Home = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: "front",
        drawerActiveTintColor: COLORS.primary,
        drawerActiveBackgroundColor: "#F5F5F5",
        drawerInactiveTintColor: COLORS.primary,
        drawerInactiveBackgroundColor: "#F5F5F5",
        drawerStyle: {
          width: SIZES.width * 0.7,
        },
        drawerItemStyle: {
          borderTopColor: "#444444",
          borderTopWidth: 0.25,
          borderBottomColor: "#444444",
          borderBottomWidth: 0.25,
          paddingVertical: 5,
          paddingHorizontal: 30,
          marginBottom: 0,
          marginTop: 0,
          marginLeft: 0,
          marginRight: 0,
        },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
      name="PinSuccess"
      component={PinSuccessScreen}
      options={{ headerShown: false }}
      />
      <Drawer.Screen
      name="Settings"
      component={SettingsScreen}
      options={{ headerShown: false }}
      />
      <Drawer.Screen
      name="HelpScreen"
      component={HelpScreen}
      options={{ headerShown: false }}
      />
      <Drawer.Screen
      name="Contact"
      component={ContactScreen}
      options={{ headerShown: false }}
      />
      <Drawer.Screen
      name="SelectCurrency"
      component={SelectCurrencyScreen}
      options={{ headerShown: false }}
      />

      <Drawer.Screen name="Account Address" component={AccountAddress} />
      <Drawer.Screen name="Pin" component={PinDoNotMatch} />
      <Drawer.Screen name="Support" component={ContactSupportScreen} />
    </Drawer.Navigator>
  );
};

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
          <RootStack.Screen name="Landing" component={OnboardingScreen} />
          
          <RootStack.Screen name="Signup">
            {(props) => <SignUpScreen {...props} onSignIn={handleSignIn} />}
          </RootStack.Screen>
          <RootStack.Screen name="VerifyNumber" component={VerifyNumber} />
          <RootStack.Screen name="ToC">
            {(props) => <ToC {...props} onSignIn={handleSignIn} />}
          </RootStack.Screen>
          <RootStack.Screen name="Home" component={Home}/>
          <RootStack.Screen name="RecoveryPhrase" component={RecoveryPhrase}/>
          <RootStack.Screen name="PinDoNotMatch" component={PinDoNotMatch}/>
          <RootStack.Screen name="Account Address" component={AccountAddress}/>
          <RootStack.Screen name="ResetAccount" component={ResetAccountScreen}/>

          <RootStack.Screen name="SetPIN" component={SetPIN} />
          <RootStack.Screen name="ConnectPhone" component={ConnectPhone} />
          <RootStack.Screen name="PhoneVerificationLoader" component={PhoneVerificationLoader} />
          <RootStack.Screen name="VerifyCeloCodes" component={VerifyCeloCodes} />

          <RootStack.Screen name="Select Top up Withdraw" component={SelectTopUpWithdraw}/>
          <RootStack.Screen name="Cash Mpesa" component={CashMpesa}/>
          <RootStack.Screen name="Add Funds" component={AddFunds}/>
          <RootStack.Screen name="Confirm Funds" component={ConfirmFunds}/>
          <RootStack.Screen name="Send Mpesa" component={SendMpesa}/>
          <RootStack.Screen name="Success" component={Success}/>
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;
