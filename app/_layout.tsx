import { Provider } from "react-redux";
import { useEffect } from "react";
import { Slot } from "expo-router";
import { setStatusBarStyle } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import * as NavigationBar from "expo-navigation-bar";
import { store } from "@/store/store";
import useFont from "@/hooks/useFonts";

export default function RootLayout() {
  useEffect(() => {
    setStatusBarStyle("dark");
  }, []);

  const { isLoading } = useFont();

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    setStatusBarStyle("dark");
    NavigationBar.setBackgroundColorAsync("white");
    NavigationBar.setButtonStyleAsync("light");
    NavigationBar.setVisibilityAsync("hidden");

    const hiddenNavigationBar = async () => {
      await NavigationBar.setBehaviorAsync("overlay-swipe");
    };

    hiddenNavigationBar();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      SplashScreen.hideAsync();
    }
  }, [isLoading]);

  if (isLoading) {
    return null;
  }

  return (
    <Provider store={store}>
      <Slot />
    </Provider>
  );
}
