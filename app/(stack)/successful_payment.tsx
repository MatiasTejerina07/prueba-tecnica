import { View, Text, StyleSheet } from "react-native";
import ButtonSecondary from "@/core/components/ButtonSecondary";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { cleanState } from "@/store/reducers/payment";
import { Colors } from "@/constants/Colors";
import Animation from "@/core/components/AnimationConfetti";

export default function ScreenSuccesfulPayment() {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleCleanState = () => {
    dispatch(cleanState());
    router.replace("/(stack)");
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          height: 500,
          alignItems: "center",
          gap: 10,
        }}
      >
        <Image
          style={styles.tickCircle}
          transition={400}
          source={require("../../assets/payment/tick-circle.png")}
        />
        <Animation />
        <Text style={styles.paymentReceived}>Pago recibido</Text>
        <Text style={styles.paymentSuccessFul}>
          El pago se ha confirmado con éxito
        </Text>
      </View>
      <View>
        <ButtonSecondary text="Finalizar" onPress={handleCleanState} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    justifyContent: "space-between",
    alignItems: "center",
  },
  paymentReceived: {
    fontSize: 20,
    fontFamily: "Mulish_700Bold",
    color: "#002859",
  },
  paymentSuccessFul: {
    fontSize: 14,
    marginTop: 10,
    fontFamily: "Mulish_400Regular",
    color: Colors.textGray,
  },
  tickCircle: {
    width: 100,
    height: 100,
    position: "absolute",
  },
});
