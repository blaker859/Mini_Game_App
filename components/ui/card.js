import { View, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}
export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    borderRadius: 8, //rounds corners
    marginTop: 36,
    padding: 16,
    backgroundColor: Colors.primary800,
    elevation: 4, //adding a shadow for android
    shadowColor: "black", //needed for shadow on ios
    shadowOffset: { width: 10, height: 10 }, //needed for shadow on ios
    shadowRadius: 6, //needed for shadow on ios
    shadowOpacity: 1, //needed for shadow on ios
  },
});
