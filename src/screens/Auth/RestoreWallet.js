import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import {COLORS, FONTS, SIZES} from '../../consts/theme';
import {LinearGradient} from "expo-linear-gradient";
import HeaderTitle from "../../components/HeaderTitle";

function RestoreWallet({ navigation }) {
    return (

            <LinearGradient style={styles.container}
                            colors={["rgba(247, 239, 250, 1.0)", "rgba(252, 248, 237, 1.0)"]}
                            start={[1, 0]}
                            end={[1, 1]}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.wrapper}>

                        <HeaderTitle navigation={navigation} title="Restore Wallet" />

                        <View style={styles.inputWrapper}>
                            <Text style={{...FONTS.body3, alignSelf: "flex-start", padding: 10}}>Recovery phrase</Text>
                            <View style={{ width: '90%'}}>
                                <Text style={{ ...FONTS.body5, color: COLORS.black, fontSize: RFPercentage(2) }}>
                                    horse giraffe dog money book fire drink cup phone car jacket computer wire charger curtain router window plate floor plate wine glass oak
                                </Text>
                            </View>
                        </View>
                        <View>
                            <Text style={FONTS.body4}>Your account key is a 24- word phrase that you wrote down and saved when you set up the account. Please enter it here to restore your account.  </Text>
                        </View>
                        <View style={styles.buttonWrapper}>
                            <TouchableOpacity onPress={() => navigation.navigate("SetPIN")}>
                                <LinearGradient
                                    colors={COLORS.buttonGradient}
                                    start={[1, 0]}
                                    end={[0, 1]}
                                    style={styles.button}
                                >
                                    <Text style={styles.buttonText}>Restore</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>

                    </View>
                </SafeAreaView>
            </LinearGradient>

    );
}
const styles = StyleSheet.create(
    {
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
        title: {
            fontSize: 28,
            textAlign: "left",
            color: "#4840BB",
            lineHeight: 28.44,
            fontFamily: "Rubik_500Medium",
            width: 240,
            alignSelf: "flex-start",
            paddingTop: 30
        },
        inputWrapper: {
            width: "100%",
            alignItems: 'center',
            backgroundColor: COLORS.white,
            height: RFPercentage(26),
            borderRadius: SIZES.radius * 0.4
        },
        buttonWrapper: {
            width: "100%",
            justifyContent: "flex-start",
            paddingBottom: 30
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
    });


export default RestoreWallet;