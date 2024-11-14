import { Colors } from "@/constants/Colors";
import { Stack, useGlobalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import CurrencySelect from "@/core/stacknavigator/components/CurrencySelect";
import ButtonBackHeader from "@/core/stacknavigator/components/ButtonBackHeader";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useWindowDimensions } from "react-native";
import React from "react";
import { Image } from "expo-image";

export default function LayoutStack() {
  const { top } = useSafeAreaInsets();
  const router = useRouter();
  const { title } = useGlobalSearchParams();
  const { width } = useWindowDimensions();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          gestureEnabled: true,
          headerTitle: () => (
            <View
              style={{ ...styles.containerScreenPayment, width: width - 30 }}
            >
              <Text style={styles.title}>Crear Pago</Text>
              <View style={{ position: "absolute", right: 10 }}>
                <CurrencySelect />
              </View>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          presentation: "modal",
          headerShown: true,
          headerBackVisible: false,
          headerLeft: () => <ButtonBackHeader />,
          headerTitle: () => (
            <View
              style={{
                width: width - 80,
              }}
            >
              <Text style={styles.title}>{title}</Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="application_payment"
        options={{
          headerShown: true,
          title:"",
          headerShadowVisible: true,
          header: () => (
            <View
              style={{
                height: top + 5,
                elevation: 3,
                shadowColor: "black",
                backgroundColor: "#fff",
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="scan_qr"
        options={{
          headerShown: true,
          title: "",
          headerLeft: () => (
            <Pressable
              style={styles.backButton}
              onPress={() => {
                router.replace("/(stack)/application_payment");
              }}
            >
              <Ionicons
                name="arrow-back"
                size={20}
                color={Colors.textPrimary}
              />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="successful_payment"
        options={{
          headerShown: true,
          title: "",
          headerTitle: () => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: width - 30,
              }}
            >
              <Image
                source={require("../../assets/images/Bitnovopay.png")}
                style={{ width: 88, height: 32 }}
              />
            </View>
          ),
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  containerScreenPayment: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    color: Colors.textPrimary,
    textAlign: "center",
    fontFamily: "Mulish_700Bold",
  },
  backButton: {
    backgroundColor: "#EFF2F7",
    height: 28,
    width: 28,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    height: 60,
  },
});
