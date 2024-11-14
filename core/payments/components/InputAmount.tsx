import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import { Colors } from "@/constants/Colors";

type InputAmountProps = {
  value: string;
  currencySymbol: string;
  position: string;
  onChangeText: (amount: string) => void;
};

export default function InputAmount({
  value,
  currencySymbol,
  position,
  onChangeText,
}: InputAmountProps) {
  const [isFocused, setIsFocused] = useState(false);
  const isSymbolLeft = position === "left";

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: isSymbolLeft ? "row" : "row-reverse",
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={[
            isFocused ? styles.symbolFocus : styles.symbol,
            isSymbolLeft ? styles.symbolLeft : styles.symbolRight,
            value !== "" ? { color: Colors.basePrimary } : {},
          ]}
        >
          {currencySymbol}
        </Text>
        <TextInput
          style={
            isSymbolLeft
              ? styles.inputPayment
              : { ...styles.inputPayment, textAlign: "right" }
          }
          value={value}
          onChangeText={onChangeText}
          keyboardType="numeric"
          // selection={{ start: value.length, end: value.length }}
          placeholder={isFocused ? "" : "0.00"}
          placeholderTextColor={"#C0CCDA"}
          cursorColor={isFocused ? Colors.basePrimary : ""}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  inputPayment: {
    fontSize: 40,
    fontFamily: "Mulish_700Bold",
    color: Colors.basePrimary,
    height: 50,
    minWidth: 100,
  },
  symbolFocus: {
    fontSize: 40,
    fontFamily: "Mulish_700Bold",
    color: Colors.basePrimary,
  },
  symbol: {
    fontSize: 40,
    fontFamily: "Mulish_700Bold",
    color: "#C0CCDA",
  },
  symbolLeft: {
    marginRight: 5,
  },
  symbolRight: {
    marginLeft: 5,
  },
});
