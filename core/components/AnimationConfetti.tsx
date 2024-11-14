import LottieView from "lottie-react-native";
import { StyleSheet } from "react-native";

export default function Animation() {
  return (
    <LottieView
      source={require("@/animation/animation_confetti.json")}
      autoPlay
      loop
      style={styles.animation}
    />
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 300,
    height: 300,
  },
});
