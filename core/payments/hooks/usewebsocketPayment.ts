import { useState, useEffect } from "react";
import usePayment from "./usePayment";
import { ResponseWebSocket } from "@/interfaces/ResponsePaymentWebSocket";

const usePaymentWebSocket = () => {
  const { identifier } = usePayment();
  const [paymentStatus, setPaymentStatus] =
    useState<string>("Esperando pago...");
  const [paymentExpired, setPaymentExpired] = useState<Date>();
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    if (!identifier) {
      return;
    }

    const socketUrl = `wss://payments.pre-bnvo.com/ws/merchant/${identifier}`;
    const socketConnection = new WebSocket(socketUrl);

    socketConnection.onopen = () => {
      console.log("WebSocket conectado con identifier:", identifier);
    };

    socketConnection.onmessage = (event: MessageEvent) => {
      const data: ResponseWebSocket = JSON.parse(event.data);
      setPaymentExpired(data.expired_time);

      if (data.status === "CA") {
        setPaymentStatus("Pago Cancelado");
      } else if (data.status === "pago_fallido") {
        setPaymentStatus("Pago fallido");
      } else {
        setPaymentStatus("Estado desconocido");
      }
    };

    socketConnection.onerror = (error) => {
      console.log("Error en WebSocket:", error);
    };

    socketConnection.onclose = () => {
      console.log("WebSocket cerrado");
    };

    setSocket(socketConnection);

    return () => {
      socketConnection.close();
    };
  }, [identifier]);

  return { paymentStatus, socket, paymentExpired };
};

export default usePaymentWebSocket;
