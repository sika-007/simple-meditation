import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AffirmationsLayout = () => {
  return (
    <Stack>
      <Stack.Screen options={{ headerShown: false }} name="index" />
      <Stack.Screen options={{ headerShown: false }} name="[itemId]" />
    </Stack>
  );
};

export default AffirmationsLayout;
