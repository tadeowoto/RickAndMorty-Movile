import { Text, View, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Stack } from "expo-router";
import { fetchCharacterById } from "../lib/characters";
import { useEffect, useState } from "react";
import { Status } from "../components/Status";
import { ActivityIndicator } from "react-native";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const loadCharacter = async () => {
      try {
        const fetchedCharacter = await fetchCharacterById(id);
        if (fetchedCharacter) {
          setCharacter(fetchedCharacter);
        }
      } catch (error) {
        console.error("Error fetching character:", error);
      } finally {
        setLoading(false);
      }
    };
    loadCharacter();
  }, [id]);

  return (
    <View className="flex-1 bg-gray-900">
      <Stack.Screen
        options={{
          headerTitle: character?.name || "Character Details",
          headerStyle: {
            backgroundColor: "#1e293b",
          },
          headerTintColor: "#fff",
        }}
      />

      {loading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#94a3b8" />
        </View>
      ) : character ? (
        <View className="flex-1 p-4">
          <View className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700/30">
            <Image
              source={{ uri: character.image }}
              className="w-full h-64 rounded-xl"
              resizeMode="cover"
            />
            <View className="mt-4 flex gap-1">
              <Text className="text-2xl text-white font-bold">
                {character.name}
              </Text>
              {character.status && <Status status={character.status} />}
              <Text className="text-slate-400">
                Species: {character.species || "Unknown"}
              </Text>
            </View>
          </View>
          <View className="mt-6 p-6 bg-slate-800/50 rounded-xl border border-slate-700/30 gap-2">
            <Text className="text-lg text-white font-semibold">Details:</Text>
            <Text className="text-slate-400">
              Gender: {character.gender || "Unknown"}
            </Text>
            <Text className="text-slate-400">
              Origin: {character.origin?.name || "Unknown"}
            </Text>
            <Text className="text-slate-400">
              Location: {character.location?.name || "Unknown"}
            </Text>
          </View>
        </View>
      ) : (
        <View className="flex-1 items-center justify-center">
          <Text className="text-white text-lg">Character not found</Text>
        </View>
      )}
    </View>
  );
}
