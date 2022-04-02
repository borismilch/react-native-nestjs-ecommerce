import { useEffect, useState } from "react";
import React from "react";
import { useStripe } from "@stripe/stripe-react-native";
import { config } from "config/.";
import { useAppSelector } from "hooks/redux";
import { totalPriceSelector } from "store/selectors/cart-selectors.selector";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const usePaymentSheet = (onSuccess: () => void) => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  const totalPrice = useAppSelector(totalPriceSelector);

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(
      `${config.API_URL}checkout/` + totalPrice + "00",
      {
        method: "GET",
      }
    );
    const { paymentIntent, ephemeralKey, customer } = await response.json();

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const initializePaymentSheet = async () => {
    try {
      const { paymentIntent, ephemeralKey, customer } =
        await fetchPaymentSheetParams();

      const { error } = await initPaymentSheet({
        customerId: customer,
        customerEphemeralKeySecret: ephemeralKey,
        paymentIntentClientSecret: paymentIntent,
        merchantDisplayName: "Merchant Name",
        allowsDelayedPaymentMethods: true,
      });
      if (!error) {
        setLoading(true);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      Toast.show({
        text1: "something went wrong",
      });
    } else {
      onSuccess();
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  return { openPaymentSheet, loading };
};

export default usePaymentSheet;
