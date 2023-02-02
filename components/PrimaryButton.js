import { View, Text } from "react-native";

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
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}
export default PrimaryButton;
