import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";

import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState(""); //managing a string because input will always return a string

  //function to pass in text
  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  //was passing enteredNumber here and was creating a bug
  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number in between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      ); //title, message  ,buttons
      //show alert
      return;
    }
    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
      {/* not allowing more than 2 characters */}
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad" //always will return as type string
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}
export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    borderRadius: 8, //rounds corners
    marginTop: 100,
    padding: 16,
    backgroundColor: Colors.primary800,
    elevation: 4, //adding a shadow for android
    shadowColor: "black", //needed for shadow on ios
    shadowOffset: { width: 10, height: 10 }, //needed for shadow on ios
    shadowRadius: 6, //needed for shadow on ios
    shadowOpacity: 1, //needed for shadow on ios
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.secondary100,
    borderBottomWidth: 2,
    color: Colors.secondary100,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
