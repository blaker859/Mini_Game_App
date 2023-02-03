import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function InstructionText({ children, style }) {
  //using props to use the styles on this element and pass them to where they will be used
  // styles in the right will override those in the left of the styles array
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}
export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.secondary100,
    fontSize: 24,
  },
});
