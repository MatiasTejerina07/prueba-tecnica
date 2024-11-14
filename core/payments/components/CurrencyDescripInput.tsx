import { Colors } from "@/constants/Colors";
import { TextInput, StyleSheet } from "react-native";

export default function CurrencyDescripInput() {
  return (
    <TextInput
      style={styles.input}
      placeholder="Añade descripción del pago"
      maxLength={140}
      multiline
      placeholderTextColor={Colors.textGray}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: 339,
    height: 56,
    borderWidth: 1,
    borderColor: "#E5E9F2",
    borderRadius: 6,
    paddingVertical: 18,
    paddingHorizontal: 12,
    fontFamily:'Mulish_400Regular'
  },
});
