import "./global.css";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Main } from "./components/Main";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <View className="w-full h-full bg-gray-900">
        <Main />
        <StatusBar style="light" />
      </View>
    </SafeAreaProvider>
  );
}
