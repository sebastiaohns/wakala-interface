import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Modal, Pressable, Alert} from 'react-native'
import {LinearGradient} from "expo-linear-gradient";
import {COLORS, FONTS, SIZES} from "../../consts/theme";
import {ScrollView} from "react-native-gesture-handler";

function PhoneVerificationLoader({navigation}) {
    const [modalVisible, setModalVisible] = React.useState(false);
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
                            backgroundColor: "#fff",
                            width: 50,
                            height: 50,
                            borderRadius: 25
                        }}>

                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate("VerifyCeloCodes")}
                                          style={{
                                              position: "absolute",
                                              bottom: 0
                                          }}><Text style={FONTS.body4}>Skip (will be removed)</Text>
                        </TouchableOpacity>
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <ScrollView horizontal>
                                    <Text>test</Text>
                                </ScrollView>

                                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={{...FONTS.body3, color: COLORS.primary}}>Hide Modal</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
export default PhoneVerificationLoader;