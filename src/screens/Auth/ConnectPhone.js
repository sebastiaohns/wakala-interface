import React, {useEffect, useState} from "react";
import {
    Dimensions,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import CountryFlag from "react-native-country-flag";
import {COLORS, FONTS, SIZES} from "../../consts/theme";
import {Feather} from "@expo/vector-icons";
import HeaderTitle from "../../components/HeaderTitle";

export default function ConnectPhone({navigation}) {
    const [countryCode, setCountryCode] = React.useState("+254");
    const [number, setNumber] = React.useState("");
    const [user, setUser] = React.useState("");

    const skipAction = () => {
        //Todo Implement the login logic
        navigation.navigate("Home")
    }
    const connect = () =>{
        //Todo Send the Celo verification messages (celo connection logic)
        navigation.navigate("PhoneVerificationLoader")
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <HeaderTitle title="Connect your phone number" navigation={navigation} skipButton={true} skipAction={skipAction}/>
                <View style={{height: SIZES.height*0.56, justifyContent: "center"}}>
                    <Text style={{...FONTS.body3, fontSize: 14, alignSelf: "center"}}>
                        Connecting your phone number takes about three minutes. To confirm your number, you’ll receive
                        three messages.
                    </Text>
                    <View style={{
                            marginTop: 20,
                        }}>
                        <View style={[
                                styles.numberInputBlock,
                                {
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 0,
                                },
                            ]}>
                            <View style={[
                                    styles.countryInput,
                                    {
                                        justifyContent: "center",
                                    },
                                ]}>
                                <CountryFlag isoCode="ke" size={21}/>
                            </View>
                            <View style={styles.border}/>
                            <View
                                style={[
                                    styles.numberInput,
                                    {
                                        justifyContent: "space-between",
                                        flexDirection: "row",
                                        alignItems: "center",
                                    },
                                ]}>
                                <Text style={FONTS.body3}>Kenya</Text>
                            </View>
                        </View>
                        <View
                            style={[
                                styles.border,
                                {
                                    width: SIZES.width * 0.75,
                                    height: 1,
                                },
                            ]}
                        />
                        <View
                            style={[
                                styles.numberInputBlock,
                            ]}
                        >
                            <TextInput
                                editable={false}
                                style={styles.countryInput}
                                placeholder="+254"
                                onChangeText={(text) => setCountryCode(text)}
                                defaultValue={countryCode}
                            />
                            <View style={styles.border}/>
                            <TextInput
                                editable={false}
                                style={styles.numberInput}
                                value="0706 427 718"
                                onChangeText={(text) => setNumber(text)}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.buttonWrapper}>
                    <TouchableOpacity onPress={() => connect()}>
                        <LinearGradient
                            colors={COLORS.buttonGradient}
                            start={[1, 0]}
                            end={[0, 1]}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Connect</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{...FONTS.body3, color: COLORS.primary, alignSelf: "center", paddingTop: 10}}>Do I need to confirm?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const {height} = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E5E5E5",
        justifyContent: "center",
    },

    wrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        paddingHorizontal: 40,
    },

    titleWrapper: {
        width: "100%",
        justifyContent: "flex-start",
    },

    title: {
        fontSize: 28,
        textAlign: "left",
        color: "#4840BB",
        lineHeight: 28.44,
        fontFamily: "Rubik_500Medium",
        width: 240,
        marginBottom: 50,
    },

    buttonWrapper: {
        width: "100%",
        justifyContent: "flex-start",
    },

    button: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        height: 56,
        width: "100%",
    },

    buttonText: {
        fontSize: 20,
        lineHeight: 23.3,
        textAlign: "center",
        color: "#FFF",
        fontFamily: "Rubik_700Bold",
    },
    orText: {
        textAlign: "center",
        padding: 15,
        color: COLORS.textBlack,
    },
    numberInputBlock: {
        flexDirection: "row",
        width: SIZES.width * 0.8,
        height: 40,
    },
    countryInput: {
        width: SIZES.width * 0.15,
        paddingLeft: 10,
      backgroundColor: COLORS.backgroundColor,
    },
    numberInput: {
        width: "80%",
        paddingLeft: 5,
      backgroundColor: COLORS.backgroundColor,
    },
    border: {
        backgroundColor: COLORS.backgroundColor,
        width: 1,
        height: 25,
        alignSelf: "center",
    },
    countrySelectorButton: {
        width: 26,
        height: 26,
        borderRadius: 13,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 20,
    },
});
