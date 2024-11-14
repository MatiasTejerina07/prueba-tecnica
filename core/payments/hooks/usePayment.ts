import { useSelector } from "react-redux";
import { RootState } from "../../../store/rootState";

function usePayment() {
  const {
    expected_output_amount,
    currency,
    identifier,
    web_url,
    payment_uri,
    loading,
    success,
    error,
    country
  } = useSelector((store: RootState) => store.payment);
  return {
    expected_output_amount,
    currency,
    identifier,
    web_url,
    payment_uri,
    loading,
    success,
    error,
    country
  };
}

export default usePayment;
