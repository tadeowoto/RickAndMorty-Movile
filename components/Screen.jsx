import { View } from "react-native";

const Screen = ({ children }) => {
  return <View className="flex-1 bg-gray-900 pt-5 ">{children}</View>;
};

export { Screen };
