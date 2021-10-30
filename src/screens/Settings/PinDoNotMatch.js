import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from '/src/components/Screen';
import { COLORS } from '../../consts/theme';

//config


function PinDoNotMatch(props) {
    const refInput2 = useRef();
    const refInput3 = useRef();
    const refInput4 = useRef();
    const refInput5 = useRef();
    const refInput6 = useRef();

    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [value3, setValue3] = useState('')
    const [value4, setValue4] = useState('')
    const [value5, setValue5] = useState('')
    const [value6, setValue6] = useState('')

    const [warn, showWarn] = useState(false)

    const handleLastValue = (text) => {
        setValue6(text)

        if (value1 && value2 && value3 && value4 && value5 && text) {
            showWarn(true)
            console.log("dshf")
        } else {
            showWarn(false)
        }
    }

    return (

        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: COLORS.white }}>
            {/* Back Icon */}
            <TouchableOpacity style={{ position: 'absolute', left: RFPercentage(4), top: RFPercentage(7) }}>
                <Ionicons name="chevron-back" style={{ fontSize: RFPercentage(3.5) }} color={COLORS.primary} />
            </TouchableOpacity>

            <View style={{ marginTop: RFPercentage(5), justifyContent: 'center', alignItems: 'center' }}>
                {
                    warn ?
                        <Text style={{ marginTop: RFPercentage(7), fontSize: RFPercentage(2.5), color: COLORS.warn }}>
                            PINs do not match
                        </Text> : null
                }
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ marginTop: warn ? RFPercentage(7) : RFPercentage(16), fontSize: RFPercentage(3.5), color: COLORS.primary, fontWeight: 'bold' }}>
                    {warn ? "Confirm New PIN" : "Enter Old PIN"}
                </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: RFPercentage(2) }}>
                <View style={{ marginTop: RFPercentage(2), marginRight: RFPercentage(1.3), alignItems: "center", justifyContent: "center", flexDirection: "row", backgroundColor: COLORS.inputFieldBackgroundColor, width: RFPercentage(6), height: RFPercentage(6.9), marginVertical: RFPercentage(0.7), }} >
                    <TextInput
                        placeholderTextColor={COLORS.primary}
                        onChangeText={(text) => setValue1(text)}
                        value={value1.length === 1 ? "*" : ""}
                        maxLength={1}
                        keyboardType="numeric"
                        textAlign="center"
                        style={{ color: warn ? COLORS.warn : COLORS.primary, alignSelf: "center", fontSize: RFPercentage(3), width: "90%" }}
                        autoFocus={true}
                        returnKeyType="next"
                        onSubmitEditing={() => refInput2.current.focus()}
                    />
                </View>

                <View style={{ marginTop: RFPercentage(2), marginRight: RFPercentage(1.3), alignItems: "center", justifyContent: "center", flexDirection: "row", backgroundColor: COLORS.inputFieldBackgroundColor, width: RFPercentage(6), height: RFPercentage(6.9), marginVertical: RFPercentage(0.7), }} >
                    <TextInput
                        placeholderTextColor={COLORS.primary}
                        onChangeText={(text) => setValue2(text)}
                        value={value2.length === 1 ? "*" : ""}
                        maxLength={1}
                        keyboardType="numeric"
                        textAlign="center"
                        style={{ color: warn ? COLORS.warn : COLORS.primary, alignSelf: "center", fontSize: RFPercentage(3), width: "90%" }}
                        returnKeyType="next"
                        onSubmitEditing={() => refInput3.current.focus()}
                        ref={refInput2}
                    />
                </View>

                <View style={{ marginTop: RFPercentage(2), marginRight: RFPercentage(1.3), alignItems: "center", justifyContent: "center", flexDirection: "row", backgroundColor: COLORS.inputFieldBackgroundColor, width: RFPercentage(6), height: RFPercentage(6.9), marginVertical: RFPercentage(0.7), }} >
                    <TextInput
                        placeholderTextColor={COLORS.primary}
                        onChangeText={(text) => setValue3(text)}
                        value={value3.length === 1 ? "*" : ""}
                        maxLength={1}
                        keyboardType="numeric"
                        textAlign="center"
                        style={{ color: warn ? COLORS.warn : COLORS.primary, alignSelf: "center", fontSize: RFPercentage(3), width: "90%" }}
                        returnKeyType="next"
                        onSubmitEditing={() => refInput4.current.focus()}
                        ref={refInput3}
                    />
                </View>

                <View style={{ marginTop: RFPercentage(2), marginRight: RFPercentage(1.3), alignItems: "center", justifyContent: "center", flexDirection: "row", backgroundColor: COLORS.inputFieldBackgroundColor, width: RFPercentage(6), height: RFPercentage(6.9), marginVertical: RFPercentage(0.7), }} >
                    <TextInput
                        placeholderTextColor={COLORS.primary}
                        onChangeText={(text) => setValue4(text)}
                        value={value4.length === 1 ? "*" : ""}
                        maxLength={1}
                        keyboardType="numeric"
                        textAlign="center"
                        style={{ color: warn ? COLORS.warn : COLORS.primary, alignSelf: "center", fontSize: RFPercentage(3), width: "90%" }}
                        returnKeyType="next"
                        onSubmitEditing={() => refInput5.current.focus()}
                        ref={refInput4}
                    />
                </View>

                <View style={{ marginTop: RFPercentage(2), marginRight: RFPercentage(1.3), alignItems: "center", justifyContent: "center", flexDirection: "row", backgroundColor: COLORS.inputFieldBackgroundColor, width: RFPercentage(6), height: RFPercentage(6.9), marginVertical: RFPercentage(0.7), }} >
                    <TextInput
                        placeholderTextColor={COLORS.primary}
                        onChangeText={(text) => setValue5(text)}
                        value={value5.length === 1 ? "*" : ""}
                        maxLength={1}
                        keyboardType="numeric"
                        textAlign="center"
                        style={{ color: warn ? COLORS.warn : COLORS.primary, alignSelf: "center", fontSize: RFPercentage(3), width: "90%" }}
                        returnKeyType="next"
                        onSubmitEditing={() => refInput6.current.focus()}
                        ref={refInput5}
                    />
                </View>

                <View style={{ marginTop: RFPercentage(2), marginRight: RFPercentage(1.3), alignItems: "center", justifyContent: "center", flexDirection: "row", backgroundColor: COLORS.inputFieldBackgroundColor, width: RFPercentage(6), height: RFPercentage(6.9), marginVertical: RFPercentage(0.7), }} >
                    <TextInput
                        placeholderTextColor={COLORS.primary}
                        onChangeText={(text) => handleLastValue(text)}
                        value={value6.length === 1 ? "*" : ""}
                        maxLength={1}
                        keyboardType="numeric"
                        textAlign="center"
                        style={{ color: warn ? COLORS.warn : COLORS.primary, alignSelf: "center", fontSize: RFPercentage(3), width: "90%" }}
                        ref={refInput6}
                    />
                </View>

            </View>
        </Screen>
    );
}


export default PinDoNotMatch;