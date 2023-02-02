import { TextInput, Pressable, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
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
    backgroundColor: "#72063c",
    elevation: 4, //adding a shadow for android
    shadowColor: "black", //needed for shadow on ios
    shadowOffset: { width: 10, height: 10 }, //needed for shadow on ios
    shadowRadius: 6, //needed for shadow on ios
    shadowOpacity: 1, //needed for shadow on ios
  },
});
