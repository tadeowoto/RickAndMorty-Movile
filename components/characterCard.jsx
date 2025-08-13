import { View, Text, Image } from "react-native";
import { Status } from "./Status";

export function CharacterCard({ character }) {
  return (
    <View className="bg-slate-800 p-4 m-2 rounded-lg items-center flex gap-5 flex-row space-x-4 min-w-full min-h-30">
      <View>
        <Image
          source={{ uri: character.image }}
          style={{ width: 100, height: 100 }}
          resizeMode="center"
        />
      </View>
      <View className="flex flex-col items-start justify-start w-1/2 h-full">
        <Text className="text-2xl text-white font-bold">{character.name}</Text>
        <Status status={character.status} />
      </View>
    </View>
  );
}
