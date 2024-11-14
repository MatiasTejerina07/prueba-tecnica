import { View, TextInput, StyleSheet } from "react-native";
import FlatListData from "@/core/payments/components/FlatListData";
import { SearchIcon } from "@/assets/icons/Icons";

export default function ScreenModal() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <SearchIcon />
        <TextInput style={styles.input} placeholder="Buscar" />
      </View>
      <FlatListData />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#ffff",
    gap: 20,
  },
  inputContainer: {
    width: 339,
    height: 48,
    borderColor: "#E5E9F2",
    borderWidth: 1,
    borderRadius: 6,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 56,
    paddingLeft: 10,
    fontSize: 16,
  },
});
