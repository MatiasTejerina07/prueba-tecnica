import { Colors } from "@/constants/Colors";
import { Text, StyleSheet, Pressable } from "react-native";

interface Props {
  onPress?: () => void;
  icon?: JSX.Element;
  text: string;
}

export default function ButtonSecondary({ onPress, icon, text }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.walletAddButton}>
      <Text style={styles.textWalletAdd}>{text}</Text>
      {icon}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  walletAddButton: {
    width: 339,
    height: 56,
    backgroundColor: "#F9FAFC",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
    marginBottom: 50,
  },
  textWalletAdd: {
    fontSize: 16,
    fontFamily: "Mulish_600SemiBold",
    color: Colors.basePrimary,
  },
});
