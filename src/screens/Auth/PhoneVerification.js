import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native'
import PINInterface from "../../components/PINInterface";
import {LinearGradient} from "expo-linear-gradient";
import HeaderTitle from "../../components/HeaderTitle";
import {COLORS, FONTS, SIZES} from "../../consts/theme";

function PhoneVerificationLoader({navigation}) {
    const [pin, setPin] = React.useState("")
    const [title, setTitle] = React.useState("Create a PIN")
    const pinSetCallback = (value) => {
        if(pin !== "" && pin === value){
            navigation.navigate("ConnectPhone")
        }else {
            setPin(value)
            setTitle("Confirm PIN")
        }

    }
    return (
        <LinearGradient style={styles.container}
                        colors={["rgba(247, 239, 250, 1.0)", "rgba(252, 248, 237, 1.0)"]}
                        start={[1, 0]}
                        end={[1, 1]}>
            <SafeAreaView style={styles.container}>
                <View style={styles.wrapper}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{alignSelf: "flex-start"}}>
                        <Text style={{...FONTS.body3, fontWeight: "bold", color: COLORS.primary}}>Cancel</Text>
                    </TouchableOpacity>
                    <View style={{
                        height: SIZES.height * 0.8,
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <View style={{
                            backgroundColor: COLORS.white,
                            width: 50,
                            height: 50,
                            borderRadius: 25
                        }}>

                        </View>
                    </View>
                    <TouchableOpacity>
                        <Text style={{...FONTS.body3, color: COLORS.primary}}>Learn more</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </LinearGradient>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    wrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        paddingHorizontal: 25,
    },
});
export default PhoneVerificationLoader;