import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HeaderApplicationPayment from "@/core/payments/components/HeaderApplicationPayment";
import {
  LinkIcon,
  ExportIcon,
  SmsIcon,
  ScanBarCodeIcon,
  WhatsappIcon,
  WalletAddIcon,
} from "@/assets/icons/Icons";
import CountrySelect from "@/core/stacknavigator/components/CountrySelect";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import InputWithIcon from "@/core/payments/components/InputWithIcon";
import usePayment from "@/core/payments/hooks/usePayment";
import ModalWhatsApp from "@/core/payments/components/ModalWhatsApp";
import ButtonSecondary from "@/core/components/ButtonSecondary";
import { Colors } from "@/constants/Colors";
import usePaymentSuccessFul from "@/core/payments/hooks/usePaymentSuccessFul";

export default function ScreenApplicationPayment() {
  const { web_url, country } = usePayment();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);
  const { top } = useSafeAreaInsets();
  usePaymentSuccessFul();

  useEffect(() => {
    if (country.countryCode) {
      inputRef.current?.focus();
    }
  }, [country.countryCode]);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const transformarUrl = (url: string) => {
    const urlSinProtocolo = url.replace("https://", "");
    return urlSinProtocolo;
  };

  return (
    <View style={{ ...styles.container, paddingTop: top }}>
      <View
        style={{
          gap: 15,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <HeaderApplicationPayment />

        <View style={styles.containerInputIconEspecial}>
          <InputWithIcon
            icon={<LinkIcon />}
            placeholder="pay.bitnovo.com/59f9g9"
            value={transformarUrl(web_url)}
            inputStyle={{ width: 269 }}
          />
          <Pressable
            onPress={() => router.replace("/scan_qr")}
            style={styles.buttonQR}
          >
            <ScanBarCodeIcon />
          </Pressable>
        </View>

        <InputWithIcon
          icon={<SmsIcon />}
          placeholder="Enviar por correo electrónico"
        />

        <View>
          <View style={styles.iconWhatsApp}>
            <WhatsappIcon />
          </View>
          <View style={styles.countrySelect}>
            <CountrySelect countryCode={country.countryCode as string} />
          </View>
          <TextInput
            ref={inputRef}
            style={[
              styles.input,
              isFocused
                ? {
                    borderColor: Colors.basePrimary,
                  }
                : {
                    borderColor: Colors.borderGrayInput,
                  },
            ]}
            placeholder={
              country.countryCode !== undefined
                ? ""
                : "Enviar a número de WhatsApp"
            }
            cursorColor={isFocused ? Colors.basePrimary : ""}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholderTextColor={Colors.textPrimary}
          />
          <Pressable onPress={handleOpenModal} style={styles.sendButton}>
            <Text style={styles.sendText}>Enviar</Text>
          </Pressable>
        </View>

        <InputWithIcon
          icon={<ExportIcon />}
          placeholder="Compartir con otras aplicaciones"
        />
        <View>
          {openModal && (
            <ModalWhatsApp
              handleOpenModal={handleOpenModal}
              openModal={openModal}
            />
          )}
        </View>
      </View>
      <ButtonSecondary
        text="Nueva solicitud"
        icon={<WalletAddIcon />}
        onPress={() => router.replace("/(stack)/successful_payment")}
      />
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
  input: {
    width: 339,
    height: 56,
    borderWidth: 1,
    borderRadius: 6,
    textAlign: "center",
    /* aca hay que añadir padding cuando se agrega el código del país */
  },
  containerInputIconEspecial: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconWhatsApp: {
    position: "absolute",
    top: 20,
    left: 10,
  },
  countrySelect: {
    position: "absolute",
    top: 20,
    left: 34,
  },
  buttonQR: {
    backgroundColor: Colors.basePrimary,
    width: 56,
    height: 56,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  walletAddButton: {
    width: 339,
    height: 56,
    backgroundColor: "#F9FAFC",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
    marginBottom: 50,
  },
  textWalletAdd: {
    fontSize: 16,
    fontFamily: "Mulish_600SemiBold",
    color: Colors.basePrimary,
  },
  sendButton: {
    position: "absolute",
    backgroundColor: Colors.basePrimary,
    justifyContent: "center",
    alignItems: "center",
    top: 17,
    right: 10,
    width: 53,
    height: 24,
    borderRadius: 4,
  },
  sendText: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "Mulish_700Bold",
  },
  /* modal */
});
