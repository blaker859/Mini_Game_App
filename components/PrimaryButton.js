import { View, Text, Pressable, StyleSheet } from "react-native";

// accepts props
// function PrimaryButton(props) {
//   return (
//     <View>
//       <Text>{props.children}</Text>
//     </View>
//   );
// }

// destructuring props.children so we don't have to access props everytime we reference it
function PrimaryButton({ children }) {
  function pressHandler() {
    console.log("Pressed!");
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={pressHandler}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
