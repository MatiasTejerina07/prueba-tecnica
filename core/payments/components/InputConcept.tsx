import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import { Colors } from "@/constants/Colors";

type InputConceptProps = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function InputConcept({
  value,
  onChangeText,
}: InputConceptProps) {
  const [contentSize, setContentSize] = useState<number>(56);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>Concepto</Text>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TextInput
          style={[
            styles.inputConcept,
            { height: contentSize },
            isFocused
              ? { borderColor: Colors.basePrimary }
              : { borderColor: "#E5E9F2" },
          ]}
          placeholder={isFocused ? "" : "Añade descripción del pago"}
          value={value}
          cursorColor={isFocused ? Colors.basePrimary : ""}
          onChangeText={onChangeText}
          onContentSizeChange={(e) =>
            setContentSize(e.nativeEvent.contentSize.height)
          }
          multiline
          maxLength={140}
          placeholderTextColor={Colors.textGray}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
      <Text style={styles.countLength}>
        {value.length}/{140} caracteres
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    gap: 4,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: "Mulish_700Bold",
    color: Colors.textPrimary,
    marginLeft: 24,
  },
  inputConcept: {
    width: 339,
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 18,
    paddingHorizontal: 12,
    fontFamily: "Mulish_400Regular",
  },
  countLength: {
    color: Colors.textGray,
    fontSize: 12,
    fontFamily: "Mulish_400Regular",
    textAlign: "right",
    paddingRight: 24,
  },
});
