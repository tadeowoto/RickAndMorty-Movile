import { View, Text, ScrollView, Pressable, Image } from "react-native";
import { Link } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const features = [
  {
    icon: "database",
    title: "Rick and Morty API",
    description:
      "Powered by the official Rick and Morty API, providing comprehensive character information.",
  },
  {
    icon: "mobile",
    title: "Cross Platform",
    description:
      "Built with React Native and Expo for seamless performance on both iOS and Android.",
  },
  {
    icon: "paint-brush",
    title: "Modern Design",
    description:
      "Featuring a sleek, modern interface with Tailwind CSS for consistent styling.",
  },
];

export default function About() {
  return (
    <ScrollView
      className="flex-1 bg-gradient-to-b from-slate-900 to-slate-800 bg-gray-900"
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <View className="relative h-48 overflow-hidden">
        <View className="absolute top-0 left-0 right-0 p-4 pt-12 flex-row justify-between items-center">
          <Link asChild href="/">
            <Pressable className="bg-slate-800/80 p-3 rounded-full active:opacity-70">
              <FontAwesome name="arrow-left" size={20} color="#94a3b8" />
            </Pressable>
          </Link>
        </View>
        <View className="absolute bottom-0 left-0 right-0 p-6">
          <Text className="text-3xl font-bold text-white">About</Text>
          <Text className="text-slate-400 mt-2">
            Rick and Morty Character Explorer
          </Text>
        </View>
      </View>

      <View className="p-6 ">
        <View className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/30">
          <Text className="text-lg text-slate-300 leading-relaxed">
            Welcome to the Rick and Morty Character Explorer! This app allows
            you to discover and learn about the diverse cast of characters from
            the beloved animated series "Rick and Morty".
          </Text>
        </View>

        <View className="mt-8">
          <Text className="text-xl font-semibold text-white mb-4">
            Features
          </Text>
          {features.map((feature, index) => (
            <View
              key={index}
              className="bg-slate-800/30 rounded-xl p-4 border border-slate-700/30 mb-2"
            >
              <View className="flex-row items-center space-x-4">
                <View className="bg-slate-700/30 p-3 rounded-full">
                  <FontAwesome name={feature.icon} size={20} color="#94a3b8" />
                </View>
                <View className="flex-1">
                  <Text className="text-white font-medium">
                    {feature.title}
                  </Text>
                  <Text className="text-slate-400 mt-1 text-sm">
                    {feature.description}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
        <View className="mt-8 bg-slate-800/30 rounded-xl p-6 border border-slate-700/30">
          <Text className="text-white font-semibold">Credits</Text>
          <Text className="text-slate-400 mt-2 text-sm leading-relaxed">
            Data provided by the Rick and Morty API. This app is built with
            React Native, Expo, and Tailwind CSS. All character information and
            images are property of their respective owners.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
