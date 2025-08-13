import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
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
        ...styles.container,
        paddingTop: insets.top,
      }}
    >
      <StatusBar style="auto" />
      <Text>Characters of rick and morty! </Text>
      <FlatList
        data={characters}
        keyExtractor={(character) => character.id.toString()}
        renderItem={({ item }) => <CharacterCard character={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#1a1a1a",
    alignItems: "center",
    justifyContent: "center",
  },
});
