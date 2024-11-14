import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import ButtonPrimary from "@/core/components/ButtonPrimary";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import usePayment from "@/core/payments/hooks/usePayment";
import { useDispatch } from "react-redux";
import { paymentActions } from "@/store/actions/payment";
import { updatePayment } from "@/store/reducers/payment";
import InputAmount from "@/core/payments/components/InputAmount";
import InputConcept from "@/core/payments/components/InputConcept";

export default function ScreenCreatePayment() {
  const { currency, loading, success } = usePayment();
  const dispatch = useDispatch();
  const router = useRouter();
  const [payment, setPayment] = useState({
    expected_output_amount: "",
    input_currency: "BCH_TEST",
    reference: "",
    fiat: currency.fiat,
  });

  const isAmountValid =
    payment.expected_output_amount.trim() !== "" &&
    parseFloat(payment.expected_output_amount) > 0;

  const handlePayment = async () => {
    try {
      await dispatch<any>(paymentActions.newPayment(payment));
      dispatch(updatePayment(payment.expected_output_amount));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!loading && success) {
      router.replace("/application_payment");
    }
  }, [loading, success]);

  return (
    <KeyboardAvoidingView style={styles.container} behavior={"padding"}>
      <View style={{marginBottom: 60}}>
        <InputAmount
          currencySymbol={currency.currencySymbol}
          onChangeText={(amount) =>
            setPayment((prevPayment) => ({
              ...prevPayment,
              expected_output_amount: amount,
            }))
          }
          value={payment.expected_output_amount}
          position={currency.position}
        />
        <InputConcept
          onChangeText={(reference) =>
            setPayment((prevState) => ({
              ...prevState,
              reference,
            }))
          }
          value={payment.reference}
        />
      </View>
      <View style={styles.containerButton}>
        <ButtonPrimary
          loading={loading}
          onPress={handlePayment}
          text={"Continuar"}
          disabled={!isAmountValid}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  subTitle: {
    fontSize: 14,
    fontFamily: "Mulish_700Bold",
    color: Colors.textPrimary,
    marginLeft: 24,
  },
  containerButton: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 50,
  },
  inputPayment: {
    fontSize: 40,
    fontFamily: "Mulish_700Bold",
    color: Colors.basePrimary,
    height: 50,
    minWidth: 90,
  },
  inputConcept: {
    width: 339,
    borderWidth: 1,
    borderColor: "#E5E9F2",
    borderRadius: 6,
    paddingVertical: 18,
    paddingHorizontal: 12,
    fontFamily: "Mulish_400Regular",
  },
  symbolFocus: {
    fontSize: 40,
    fontFamily: "Mulish_700Bold",
    color: Colors.basePrimary,
  },
  symbol: {
    fontSize: 40,
    fontFamily: "Mulish_700Bold",
    color: "#C0CCDA",
  },
  symbolLeft: {
    marginRight: 5,
  },
  symbolRight: {
    marginLeft: 5,
  },
  countLength: {
    color: Colors.textGray,
    fontSize: 12,
    fontFamily: "Mulish_400Regular",
    textAlign: "right",
    paddingRight: 24,
  },
});
