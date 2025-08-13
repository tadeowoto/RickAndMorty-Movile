import { StatusBar } from "expo-status-bar";
import { Text, View, FlatList } from "react-native";
import { fetchCharacters } from "../lib/characters";
import { useEffect, useState } from "react";
import { CharacterCard } from "./characterCard";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Main() {
  const insets = useSafeAreaInsets();

  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const loadCharacters = async () => {
      const fetchedCharacters = await fetchCharacters();
      setCharacters(fetchedCharacters);
    };
    loadCharacters();
  }, []);

  return (
    <View
      style={{
        paddingTop: insets.top,
      }}
      className="w-full h-full"
    >
      <StatusBar style="auto" />
      <Text className="text-white text-2xl p-4 text-center mb-5">
        Characters of rick and morty!
      </Text>
      <FlatList
        className="p-10 w-full h-full flex"
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
        data={characters}
        keyExtractor={(character) => character.id.toString()}
        renderItem={({ item }) => <CharacterCard character={item} />}
      />
    </View>
  );
}
