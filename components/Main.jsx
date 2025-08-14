import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  FlatList,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { fetchCharacters } from "../lib/characters";
import { useEffect, useState } from "react";
import { CharacterCard } from "./characterCard";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export function Main() {
  const insets = useSafeAreaInsets();
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
    <View
      style={{ paddingTop: insets.top }}
      className="flex-1 bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <StatusBar style="light" />

      <View className="px-4 pt-6 pb-4 border-b border-slate-700/30">
        <View className="flex-row items-center justify-between">
          <Text className="text-3xl text-white font-bold tracking-tight">
            Rick and Morty
          </Text>
          <Link asChild href="/about">
            <Pressable className="bg-slate-700/30 p-3 rounded-full active:opacity-70">
              <FontAwesome name="info-circle" size={20} color="#94a3b8" />
            </Pressable>
          </Link>
        </View>
        <Text className="text-slate-400 mt-1">
          Explore all characters from the show
        </Text>
      </View>

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
    </View>
  );
}
