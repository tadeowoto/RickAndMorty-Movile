import { View, Text } from "react-native";

export function Status({ status }) {
  function getStatusStyles(status) {
    switch (status) {
      case "Alive":
        return {
          bg: "bg-emerald-500/10",
          text: "text-emerald-400",
          border: "border-emerald-500/20",
          dot: "bg-emerald-500",
        };
      case "Dead":
        return {
          bg: "bg-red-500/10",
          text: "text-red-400",
          border: "border-red-500/20",
          dot: "bg-red-500",
        };
      case "unknown":
      default:
        return {
          bg: "bg-gray-500/10",
          text: "text-gray-400",
          border: "border-gray-500/20",
          dot: "bg-gray-500",
        };
    }
  }
  const styles = getStatusStyles(status);

  return (
    <View className="self-start">
      <View
        className={`${styles.bg} px-3 py-1 rounded-full border ${styles.border} flex-row items-center gap-2`}
      >
        <View className={`w-1.5 h-1.5 rounded-full ${styles.dot}`} />
        <Text className={`${styles.text} text-sm font-medium`}>{status}</Text>
      </View>
    </View>
  );
}
