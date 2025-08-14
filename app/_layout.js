import "../global.css";
import { View, Pressable, Text } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Link } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <View className="flex-1">
        <Stack
          screenOptions={{
            contentStyle: { backgroundColor: "#1e293b", paddingBottom: 16 },
            headerTitle: "",
            headerStyle: {
              backgroundColor: "#1e293b",
              borderBottomWidth: 0,
            },
            headerLeft: () => (
              <View className="">
                <View className="flex-row items-center justify-between">
                  <Text className="text-3xl text-white font-bold tracking-tight">
                    Rick and Morty
                  </Text>
                </View>
              </View>
            ),

            headerRight: () => (
              <Link asChild href="/about">
                <Pressable className="bg-slate-700/30  rounded-full active:opacity-70">
                  <FontAwesome name="info-circle" size={20} color="#94a3b8" />
                </Pressable>
              </Link>
            ),
          }}
        />
        <StatusBar style="light" />
      </View>
    </SafeAreaProvider>
  );
}
