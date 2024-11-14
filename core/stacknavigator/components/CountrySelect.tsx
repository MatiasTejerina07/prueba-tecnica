import { Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { ArrowDownIcon } from "@/assets/icons/Icons";

interface Props {
  countryCode: string;
}

export default function CountrySelect({ countryCode }: Props) {
  const router = useRouter();

  return (
    <Pressable
      style={styles.buttonPress}
      onPress={() => {
        router.replace({
          pathname: "/modal",
        }),
          router.setParams({
            title: "Seleccionar país",
            renderList: "countries",
          });
      }}
    >
      <Text style={styles.countryCode}>{countryCode}</Text>
      <ArrowDownIcon />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonPress: {
    gap: 4,
    borderRadius: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    zIndex: 20,
  },
  countryCode: {
    fontSize: 14,
    fontFamily: "Mulish_700Bold",
    color: Colors.textPrimary,
  },
});
