import { View, Text, ImageBackground } from "react-native";
import React from "react";
import beach from "@/assets/meditation-images/beach.webp";

const App = () => {
  return (
    <View className="flex-1">
      <ImageBackground source={beach} resizeMode="cover" className="flex-1">
        <Text className="">App</Text>
      </ImageBackground>
    </View>
  );
};

export default App;
