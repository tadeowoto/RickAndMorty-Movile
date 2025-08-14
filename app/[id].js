import { Text, View, Pressable } from "react-native";
import { Link } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { Stack } from "expo-router";
import { fetchCharacterById } from "../lib/characters";
import { useEffect, useState } from "react";

export default async function Detail() {
  const { id } = useLocalSearchParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    const loadCharacter = async () => {
      try {
        const fetchedCharacter = await fetchCharacterById({ id });
        setCharacter(fetchedCharacter);
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    };
    loadCharacter();
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-gray-900">
      <Stack.Screen
        options={{
          headerTitle: `${character?.name || "Character Detail"}`,
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
