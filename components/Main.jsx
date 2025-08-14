import { StatusBar } from "expo-status-bar";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { fetchCharacters } from "../lib/characters";
import { useEffect, useState } from "react";
import { CharacterCard } from "./characterCard";
import { Screen } from "./Screen";

export function Main() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        const fetchedCharacters = await fetchCharacters();
        setCharacters(fetchedCharacters);
      } finally {
        setLoading(false);
      }
    };
    loadCharacters();
  }, []);

  return (
    <Screen>
      <StatusBar style="light" />
      <Text className="text-slate-400 pl-4 pb-2">
        Explore all characters from the show
      </Text>
      {loading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#88e23b" />
        </View>
      ) : (
        <FlatList
          className="px-1"
          contentContainerStyle={{
            paddingVertical: 16,
          }}
          data={characters}
          keyExtractor={(character) => character.id.toString()}
          renderItem={({ item }) => <CharacterCard character={item} />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Screen>
  );
}
