import { useEffect } from "react";
import usePaymentWebSocket from "./usewebsocketPayment";
import { useRouter } from "expo-router";

export default function usePaymentSuccessFul() {
  const router = useRouter();
  const { paymentStatus } = usePaymentWebSocket();

  useEffect(() => {
    if (paymentStatus === "Pago Cancelado") {
      /* no logre realizar un pago para testear cual era el estado del pago, asi que realizar las pruebas del websocket cancelando el pago desde la url */
      router.replace("/(stack)/successful_payment");
    } else if (paymentStatus === "Pago Exitoso") {
      /* popup o vista de cancelado */
    }
  }, [paymentStatus, router]);
}
