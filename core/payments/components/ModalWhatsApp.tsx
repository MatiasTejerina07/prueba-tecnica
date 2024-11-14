import { TickCircleSend } from "@/assets/icons/Icons";
import ButtonPrimary from "@/core/components/ButtonPrimary";
import { View, Text, Modal, StyleSheet } from "react-native";
import { BlurView } from "@react-native-community/blur";
import { Colors } from "@/constants/Colors";

interface ModalProps {
  openModal: boolean;
  handleOpenModal: () => void;
}

export default function ModalWhatsApp({
  openModal,
  handleOpenModal,
}: ModalProps) {
  return (
    <Modal
      visible={openModal}
      animationType="slide"
      transparent={true}
      onRequestClose={handleOpenModal}
    >
      <BlurView style={styles.absolute} blurType="extraDark" blurAmount={50} />
      <View style={styles.modalContainer}>
        <View
          style={{
            justifyContent: "flex-end",
            alignItems: "center",
            height: 230,
          }}
        >
          <TickCircleSend />
          <Text style={styles.modalTitle}>Solicitud enviada</Text>
          <Text style={styles.modalContent}>
            Tu solicitud de pago ha sido enviada con éxito por WhatsApp .
          </Text>
        </View>
        <View style={{ marginBottom: 30 }}>
          <ButtonPrimary
            disabled={false}
            text="Entendido"
            onPress={handleOpenModal}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    width: "96%",
    height: 400,
    borderRadius: 24,
    position: "absolute",
    bottom: 10,
    /* test */
    right: 384 / 50,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  modalTitle: {
    fontSize: 26,
    fontFamily: "Mulish_700Bold",
    marginVertical: 20,
    color: Colors.textPrimary,
  },
  modalContent: {
    fontSize: 14,
    fontFamily: "Mulish_400Regular",
    textAlign: "center",
    lineHeight:20,
    color: Colors.textGray,
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
