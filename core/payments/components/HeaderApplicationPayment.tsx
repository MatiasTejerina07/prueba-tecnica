import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import usePayment from "../hooks/usePayment";
import { Colors } from "@/constants/Colors";

export default function HeaderApplicationPayment() {
  const { expected_output_amount, currency } = usePayment();

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Image
          style={{ height: 58, width: 58 }}
          source={require("../../../assets/payment/amount_payment_icon.png")}
        />
        <View style={{ paddingLeft: 5 }}>
          <Text style={styles.applicationPayment}> Solicitud de pago </Text>
          <View
            style={
              currency.position === "left"
                ? { flexDirection: "row", justifyContent: "flex-start" }
                : {
                    flexDirection: "row-reverse",
                    justifyContent: "flex-end",
                    paddingLeft: 5,
                  }
            }
          >
            <Text style={styles.amountPayment}>{currency.currencySymbol}</Text>
            <Text style={styles.amountPayment}>{expected_output_amount}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.sharedPayment}>
        {" "}
        Comparte el enlace de pago con el cliente
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9FAFC",
    width: 339,
    height: 114,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  applicationPayment: {
    fontSize: 14,
    fontFamily: "Mulish_400Regular",
    color: Colors.textGray,
  },
  amountPayment: {
    fontSize: 30,
    fontFamily: "Mulish_700Bold",
    color: Colors.textPrimary,
  },
  sharedPayment: {
    fontSize: 12,
    fontFamily: "Mulish_400Regular",
    color: Colors.textGray,
    marginTop: 3,
  },
});
