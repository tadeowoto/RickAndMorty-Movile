import { Text, View, Pressable } from "react-native";
import { Link } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { Stack } from "expo-router";

export default function Detail() {
  const { id } = useLocalSearchParams();
  return (
    <View className="flex-1 items-center justify-center bg-gray-900">
      <Stack.Screen
        options={{
          headerTitle: `Character ${id}`,
          headerStyle: { backgroundColor: "#1e293b" },
          headerTintColor: "#fff",
        }}
      />
      <Link asChild href="/" className="text-white text-lg mb-4 underline">
        <Pressable>
          <Text className="text-white">Personaje {id}</Text>
        </Pressable>
      </Link>
      <Text className="text-white text-lg">Detail Page</Text>
      <Text className="text-white mt-2">
        This is a placeholder for character details.
      </Text>
    </View>
  );
}
