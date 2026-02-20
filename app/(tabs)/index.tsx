import { Text, View, Image, Dimensions, ScrollView } from "react-native";
import { Link } from "expo-router";

import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

const { width, height } = Dimensions.get("window");

export default function Index() {
  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        style={{
          position: "absolute",
          width: width,
          height: height,
        }}
        resizeMode="cover"
      />
      <ScrollView
        className="flex-1 items-center"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-10 h-10 m-10 align-center" />
      </ScrollView>
    </View>
  );
}
