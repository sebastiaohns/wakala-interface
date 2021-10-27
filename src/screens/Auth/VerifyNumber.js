import React from "react";
import {
    Dimensions,
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {COLORS} from "../../consts/theme";

export default function SignUpScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>
                        Welcome to Wakala you can now send, receive and earn.
                    </Text>
                </View>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity>
                        <LinearGradient
                            colors={COLORS.buttonGradient}
                            start={[1, 0]}
                            end={[0, 1]}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Create account</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <LinearGradient
                            colors={["rgba(232, 200, 223, 0.3)", "rgba(204, 198, 210, 0.8)"]}
                            start={[1, 0]}
                            end={[0, 1]}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Restore account</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E5E5E5",
        justifyContent: "flex-end",
    },

    wrapper: {
        flex: height > 460 ? 0.6 : 1,
        alignItems: "center",
        justifyContent: "space-around",
        paddingHorizontal: 40,
    },

    titleWrapper: {
        width: "100%",
        justifyContent: "flex-start",
    },

    title: {
        fontSize: 24,
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
        marginBottom: 40,
    },

    buttonText: {
        fontSize: 20,
        lineHeight: 23.3,
        textAlign: "center",
        color: "#FFF",
        fontFamily: "Rubik_700Bold",
    },
});