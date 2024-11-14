import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useGlobalSearchParams } from "expo-router";

export default function ButtonBackHeader() {
  const router = useRouter();
  const { fiat, title } = useGlobalSearchParams();

  return (
    <Pressable
      style={styles.backButton}
      onPress={() => {
        router.replace({
          pathname: title === "Seleccionar país" ? "/application_payment" : "/",
          params: { fiat: fiat ?? "USD" },
        });
      }}
    >
      <Ionicons name="arrow-back" size={20} color={Colors.primary} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: "#EFF2F7",
    height: 28,
    width: 28,
    borderRadius: 24,

    justifyContent: "center",
    alignItems: "center",
  },
});
