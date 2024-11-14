import { Currency } from "@/interfaces/Currency";
import { View, Text, TextInput, StyleSheet } from "react-native";

/* {
  acronym,
  currencySymbol,
  image,
  name,
}: Currencie */

export default function CurrencyInput() {
  return (
    <TextInput style={styles.input} keyboardType="numeric" value="$0.00" />
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 40,
    fontFamily: "Mulish_700Bold",
    color: "#C0CCDA",
    width: 339,
    height: 50,
    textAlign: "center",
  },
});
