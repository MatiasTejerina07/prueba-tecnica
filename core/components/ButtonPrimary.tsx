import { Colors } from "@/constants/Colors";
import { Text, StyleSheet, Pressable, ActivityIndicator } from "react-native";

interface Props {
  disabled: boolean;
  text: string;
  onPress?: () => void;
  loading?: boolean;
}

export default function ButtonPrimary({
  text,
  disabled,
  onPress,
  loading,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        disabled ? styles.buttonDisabled : styles.buttonActive,
        { opacity: pressed ? 0.6 : 1 },
      ]}
    >
      {loading ? (
        <ActivityIndicator size={"large"}  animating color={"white"} />
      ) : (
        <Text style={disabled ? styles.textDisabled : styles.textActive}>
          {text}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonDisabled: {
    width: 339,
    height: 56,
    backgroundColor: "#EAF3FF",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonActive: {
    width: 339,
    height: 56,
    backgroundColor: Colors.basePrimary,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  textDisabled: {
    color: "#71B0FD",
  },
  textActive: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Mulish_600SemiBold",
  },
});
