import { Colors } from "@/constants/Colors";
import { View, Text, StyleSheet } from "react-native";
import { InfoCircleIcon } from "@/assets/icons/Icons";
import usePayment from "@/core/payments/hooks/usePayment";
import QRCode from "react-native-qrcode-svg";
import usePaymentSuccessFul from "@/core/payments/hooks/usePaymentSuccessFul";

export default function ScreenScanQR() {
  const { currency, expected_output_amount, web_url } = usePayment();
  usePaymentSuccessFul();

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <View style={styles.modalInfo}>
          <InfoCircleIcon />
          <Text style={styles.textModalInfo}>
            Escanea el QR y serás redirigido a la pasarela de pago de Bitnovo
            Pay.
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              padding: 15,
              borderRadius: 6,
            }}
          >
            {web_url ? (
              <QRCode
                value={web_url}
                size={300}
                logo={require("@/assets/images/BitnovoQR.png")}
                logoSize={100}
                color={Colors.textPrimary}
                backgroundColor="white"
              />
            ) : (
              <Text>No hay URL para generar el QR</Text>
            )}
          </View>
        </View>
        <View
          style={{
            marginTop: 30,
            gap: 20,
          }}
        >
          <Text style={styles.amount}>
            {currency.currencySymbol} {expected_output_amount}
          </Text>
          <Text style={styles.infoRefresh}>
            Esta pantalla se actualizará automáticamente.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.basePrimary,
  },
  modalInfo: {
    flexDirection: "row",
    justifyContent: "center",
    width: 339,
    height: 60,
    backgroundColor: "#EAF3FF",
    borderRadius: 6,
    paddingLeft: 10,
    gap: 10,
    paddingVertical: 14,
  },
  textModalInfo: {
    fontSize: 12,
    fontFamily: "Mulish_400Regular",
    color: "#002859",
    textAlignVertical: "top",
    textAlign: "left",
    lineHeight: 16,
    flexWrap: "wrap",
    flex: 1,
  },
  infoRefresh: {
    fontSize: 14,
    fontFamily: "Mulish_400Regular",
    color: "#FFFFFF",
    textAlign: "center",
  },
  amount: {
    fontSize: 26,
    color: "#FFFFFF",
    fontFamily: "Mulish_700Bold",
    textAlign: "center",
  },
});
