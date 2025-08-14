import { View, Text } from "react-native";

export function Status({ status }) {
  function getStatusStyles(status) {
    switch (status) {
      case "Alive":
        return "green-500";
      case "Dead":
        return "red-500";
      case "unknown":
        return "gray-500";
      default:
        return "yellow-500";
    }
  }
  const statusStyles = getStatusStyles(status);

  return (
    <View className={`bg-${statusStyles} px-1 py-1 rounded-full`}>
      <Text className="font-bold text-md text-white">{status}</Text>
    </View>
  );
}
