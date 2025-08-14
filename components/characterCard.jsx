import { View, Text, Image, Pressable } from "react-native";
import { Status } from "./Status";
import { Link } from "expo-router";

export function CharacterCard({ character }) {
  return (
    <Link asChild href={`/${character.id}`}>
      <Pressable className="active:scale-95 transition-all duration-200">
        <View className="bg-gradient-to-br from-slate-800 to-slate-900 m-3 rounded-xl overflow-hidden shadow-lg border border-slate-700/30">
          <View className="p-4 flex-row items-center gap-5">
            <View className="rounded-lg overflow-hidden border-2 border-emerald-500/20">
              <Image
                source={{ uri: character.image }}
                className="w-[100px] h-[100px]"
                resizeMode="cover"
              />
            </View>
            <View className="flex-1 gap-2">
              <Text className="text-xl text-white font-bold tracking-wide">
                {character.name}
              </Text>
              <Text className="text-sm text-gray-400 font-bold tracking-wide">
                {character.origin.name} - {character.species}
              </Text>
              <Status status={character.status} />
            </View>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}
