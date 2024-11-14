import { Colors } from "@/constants/Colors";
import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

interface InputWithIconProps {
  icon: JSX.Element;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  inputStyle?: object;
}

export default function InputWithIcon({
  icon,
  placeholder,
  value,
  onChangeText,
  inputStyle,
}: InputWithIconProps) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View>
      <View style={styles.icon}>{icon}</View>
      <TextInput
        style={[
          styles.input,
          inputStyle,
          isFocused
            ? {
                borderColor: Colors.basePrimary,
              }
            : { borderColor: Colors.borderGrayInput },
        ]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        cursorColor={isFocused ? Colors.basePrimary : ""}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholderTextColor={Colors.textPrimary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    top: 20,
    left: 10,
  },
  input: {
    width: 339,
    height: 56,
    borderWidth: 1,
    borderRadius: 6,
    textAlign: "left",
    paddingLeft: 50,
    color: Colors.textPrimary,
  },
});
