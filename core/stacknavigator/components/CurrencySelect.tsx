import { Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Icon from "@expo/vector-icons/MaterialIcons";
import { Colors } from "@/constants/Colors";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootState";

export default function CurrencySelect() {
  const router = useRouter();
  const { currency } = useSelector((store: RootState) => store.payment);
  return (
    <Pressable
      style={styles.buttonPress}
      onPress={() => {
        router.replace({
          pathname: "/modal",
        }),
          router.setParams({ title: "Seleccione una divisa" });
      }}
    >
      <Text style={styles.fiat}>{currency.fiat}</Text>
      <Icon name="expand-more" size={16} color={Colors.textPrimary} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonPress: {
    backgroundColor: "#D3DCE64D",
    flexDirection: "row",
    paddingVertical: 6,
    paddingHorizontal: 10,
    gap: 8,
    borderRadius: 24,
  },
  fiat: {
    fontSize: 12,
    fontFamily: "Mulish_700Bold",
    color: Colors.textPrimary,
  },
});
