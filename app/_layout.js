import "../global.css";
import { View } from "react-native";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <View className="w-full h-full flex-1 bg-gray-900">
        <Slot />
        <StatusBar style="light" />
      </View>
    </SafeAreaProvider>
  );
}
