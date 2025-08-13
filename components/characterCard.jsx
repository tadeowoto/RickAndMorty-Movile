import { View, Text, Image } from "react-native";

export function CharacterCard({ character }) {
  return (
    <View>
      <View>
        <Image
          source={{ uri: character.image }}
          style={{ width: 100, height: 100 }}
          resizeMode="center"
        />
      </View>
      <Text>{character.name}</Text>
      <Text>{character.status}</Text>
    </View>
  );
}
