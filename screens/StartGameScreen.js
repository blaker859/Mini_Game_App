import { TextInput, Pressable, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      {/* not allowing more than 2 characters */}
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}
export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 0,
    marginHorizontal: 24,
    borderRadius: 8, //rounds corners
    marginTop: 100,
    padding: 16,
    backgroundColor: "#4e0329",
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
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
