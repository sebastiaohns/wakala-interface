import React, { Fragment, useRef, useState } from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TextInputMask } from "react-native-masked-text";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { connect } from "react-redux";

import ContractMethods from "../../utils/celo-integration/ContractMethods";
import SwipeButton from "../../components/SwipeButton";
import ScreenCmpt from "../../components/ScreenCmpt";
import NavHeader from "../../components/NavHeader";
import Modal from "../../components/Modal";

import { COLORS, SIZES } from "../../consts/theme";
import { ERROR, SHARED } from "../../assets/images";

const MaskedValue = (props) => {
  return (
    <TextInputMask
      type={"money"}
      options={{
        unit: "Ksh ",
      }}
      value={props.value}
      style={props.style}
      placeholder="Ksh 0,00"
      placeholderTextColor={COLORS.primary}
    />
  );
};

const ModalContent = (props) => {
  return (
    <View style={modalStyles.container}>
      {props.isActionSuccess ? (
        <View>
          <Image source={SHARED} style={modalStyles.image} />
          <Text style={modalStyles.title}>Request Shared</Text>
          <Text style={modalStyles.text}>
            We shared your{" "}
            {props.operation === "TopUp" ? "deposit" : "withdraw"} request with
            the agent community. We will notify you once an agent has answered
            your request. It can take up to 4 minutes. Click OK to exit this
            page.
          </Text>

          <TouchableOpacity onPress={props.handleAction}>
            <Text style={modalStyles.button}>Okay</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Image source={ERROR} style={modalStyles.errorImage} />
          <Text style={modalStyles.title}>Oh Snap!</Text>
          <Text style={modalStyles.text}>
            Something just happened. Please try again.
          </Text>
          <TouchableOpacity onPress={() => props.handleAction()}>
            <Text style={modalStyles.button}>Try again</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const ConfirmFunds = (props) => {
  const route = useRoute();
  const modalRef = useRef();
  const navigation = useNavigation();

  const value = route.params.value;
  const operation = route.params.operation;

  const [isActionSuccess, setIsActionSuccess] = useState(true);

  const handleAction = async () => {
    // Call function to perform the addressed action
    // If response is success the set isOperationSuccess
    // to true and open modal
    // if (operation === "TopUp") {
    //   performTopUpAction().then(
    //     (response) => {
    //       setIsActionSuccess(true);
    //     },
    //     (error) => {
    //       setIsActionSuccess(false);
    //     }
    //   );
    // } else {
    //   performWithdrawAction().then(
    //     (response) => {
    //       setIsActionSuccess(true);
    //     },
    //     (error) => {
    //       setIsActionSuccess(false);
    //     }
    //   );
    // }
    // openModal();

    const contractMethods = new ContractMethods(props.magic);
    let amount = contractMethods.web3.utils.toBN(value);

    if (operation === "TopUp") {
      contractMethods.initializeDepositTransaction(amount).then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error.toString() + " \n Amount: " + amount.toString());
          alert(error.toString() + " \n Amount: " + amount.toString());
        }
      );
    } else {
      contractMethods.initializeWithdrawalTransaction(amount).then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(
            error.toString() + " \n Amount to withdraw: " + amount.toString()
          );
          alert(
            error.toString() + " \n Amount to withdraw: " + amount.toString()
          );
        }
      );
    }

    openModal();
  };

  const openModal = () => {
    modalRef.current?.openModal();
  };

  const closeModal = () => {
    if (!isActionSuccess) {
      modalRef.current?.closeModal();
      return;
    }

    modalRef.current?.closeModal();

    navigation.navigate("Confirm Request", {
      value: value,
      operation: operation,
    });
  };

  return (
    <Fragment>
      <ScreenCmpt>
        <NavHeader
          showTitle={true}
          newTitle={operation === "TopUp" ? "Add Funds" : "Withdraw Funds"}
        />
        <View style={styles.container}>
          <LinearGradient
            colors={["#FF8CA121", "#FCCF2F21", "#F830B421", "#2F44FC21"]}
            start={[0.3, 0]}
            end={[1, 0.3]}
            style={styles.cardContainer}
          >
            <View style={styles.requestInfoContainer}>
              <Text style={styles.requestTitle}>
                {operation === "TopUp" ? "Request to deposit" : "Withdrawing"}
              </Text>
              <MaskedValue style={styles.requestAmount} value={value} />
            </View>

            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={styles.descriptionContainer}>
                <View
                  style={{ flexDirection: "row", alignItems: "flex-start" }}
                >
                  <Text style={styles.feesText}>Estimated Fees </Text>
                  <Feather name="info" size={11} color="#222222" />
                </View>

                <Text style={styles.receivesText}>Total you receive</Text>
              </View>

              <View style={styles.AmountContainer}>
                <MaskedValue style={styles.feesText} value={value * 0.0001} />
                <MaskedValue
                  style={styles.receivesText}
                  value={value * 0.0099}
                />
              </View>
            </View>
          </LinearGradient>
          <View style={{ marginBottom: 100 }}>
            <SwipeButton handleAction={handleAction} />
          </View>
        </View>
      </ScreenCmpt>
      <Modal
        ref={modalRef}
        style={isActionSuccess ? { height: 510 } : { height: 490 }}
        content={
          <ModalContent
            handleAction={closeModal}
            operation={operation}
            isActionSuccess={isActionSuccess}
          />
        }
      />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    justifyContent: "space-between",
  },

  cardContainer: {
    width: "100%",
    height: 230,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#FFF",
    backgroundColor: "#FFF",
    paddingHorizontal: 15,
  },

  requestInfoContainer: {
    marginTop: 20,
    marginBottom: 35,
  },

  requestTitle: {
    fontSize: 12,
    lineHeight: 14,
    color: "#333333",
    fontFamily: "Rubik_400Regular",
  },

  requestAmount: {
    fontSize: 28,
    lineHeight: 34,
    color: "#4840BB",
    fontFamily: "Rubik_700Bold",
  },

  descriptionContainer: {
    flex: 6,
  },

  AmountContainer: {
    flex: 4,
  },

  feesText: {
    height: 15,
    fontSize: 11,
    lineHeight: 13,
    color: "#222222",
    marginBottom: 35,
    fontFamily: "Rubik_400Regular",
  },

  receivesText: {
    height: 18,
    fontSize: 14,
    lineHeight: 17,
    color: "#222222",
    fontFamily: "Rubik_500Medium",
  },
});

const modalStyles = StyleSheet.create({
  container: {
    height: "auto",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  image: {
    height: 150,
    maxWidth: SIZES.width * 0.8,
    resizeMode: "contain",
    marginBottom: 20,
  },

  errorImage: {
    height: 180,
    maxWidth: SIZES.width * 0.8,
    resizeMode: "contain",
    marginBottom: 20,
  },

  title: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333333",
    textAlign: "center",
    fontFamily: "Rubik_500Medium",
  },

  text: {
    fontSize: 14,
    lineHeight: 21,
    color: "#333333",
    textAlign: "center",
    fontFamily: "Rubik_400Regular",
    marginTop: 25,
  },

  button: {
    fontSize: 20,
    lineHeight: 24,
    color: "#133FDB",
    textAlign: "center",
    fontFamily: "Rubik_500Medium",
    marginTop: 60,
  },
});
const mapStateToProps = (state) => {
  return {
    magic: state.magic,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: async (action) => {
      await dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmFunds);
