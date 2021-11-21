import OnboardingScreen from "./Onboarding";
import SignUpScreen from "./Auth";
import VerifyNumber from "./Auth/VerifyNumber";
import ToC from "./Auth/ToC";
import SetPIN from "./Auth/SetPIN";
import ConnectPhone from "./Auth/ConnectPhone";
import PhoneVerificationLoader from "./Auth/PhoneVerification";
import VerifyCeloCodes from "./Auth/VerifyCeloCodes";
import DrawerNav from "../components/DrawerNav";
import RecoveryPhrase from "./Settings/RecoveryPhrase";
import PinDoNotMatch from "./Settings/PinDoNotMatch";
import AccountAddress from "./Settings/AccountAddress";
import ResetAccountScreen from "./Settings/ResetAccountScreen";
import SelectOperation from "./PerformRequest/SelectOperation";
import SelectPaymentMethod from "./PerformRequest/SelectPaymentMethod";
import AddFunds from "./PerformRequest/AddFunds";
import ConfirmFunds from "./PerformRequest/ConfirmFunds";
import ConfirmRequest from "./PerformRequest/ConfirmRequest";
import AcceptRequest from "./FulfillRequest/AcceptRequest";
import ConfirmPayment from "./FulfillRequest/ConfirmPayment";
import Success from "../components/Success";
import Rate from "../components/Rate";
import Join from "./Governance/Join";
import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {connect} from "react-redux";
const RootStack = createStackNavigator();
function Screens(props){

    return(
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            {props.finishedBoarding !== true ?
                <>
                    <RootStack.Screen name="Landing" component={OnboardingScreen} />
                    <RootStack.Screen name="Signup" component={SignUpScreen} />
                    <RootStack.Screen name="VerifyNumber" component={VerifyNumber} />
                    <RootStack.Screen name="ToC" component={ToC} />
                    <RootStack.Screen name="SetPIN" component={SetPIN} />
                    <RootStack.Screen name="ConnectPhone" component={ConnectPhone} />
                    <RootStack.Screen name="PhoneVerificationLoader" component={PhoneVerificationLoader}/>
                    <RootStack.Screen name="VerifyCeloCodes" component={VerifyCeloCodes}/>
                </>
                :
                <>
                    <RootStack.Screen name="Drawer Nav" component={DrawerNav} />
                    <RootStack.Screen name="RecoveryPhrase" component={RecoveryPhrase} />
                    <RootStack.Screen name="PinDoNotMatch" component={PinDoNotMatch} />
                    <RootStack.Screen name="Account Address" component={AccountAddress} />
                    <RootStack.Screen name="ResetAccount" component={ResetAccountScreen}/>
                    <RootStack.Screen name="Select Operation" component={SelectOperation}/>
                    <RootStack.Screen name="Select Payment Method" component={SelectPaymentMethod} />
                    <RootStack.Screen name="Add Funds" component={AddFunds} />
                    <RootStack.Screen name="Confirm Funds" component={ConfirmFunds} />
                    <RootStack.Screen name="Confirm Request" component={ConfirmRequest} />
                    <RootStack.Screen name="Accept Request" component={AcceptRequest} />
                    <RootStack.Screen name="Confirm Payment" component={ConfirmPayment} />
                    <RootStack.Screen name="Success" component={Success} />
                    <RootStack.Screen name="Rate" component={Rate} />

                    <RootStack.Screen name="Join" component={Join} />
                </>
            }

        </RootStack.Navigator>
    )
}
const mapStateToProps = (state) => {
    return {
        finishedBoarding: state.finishedBoarding
    }
}
const mapDispatchToProps = dispatch => {
    return {
        dispatch: async (action) => {
            await dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Screens);