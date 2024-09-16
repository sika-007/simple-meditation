import { Slot, Stack } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="meditate" options={{ headerShown: false }} />
    </Stack>
  );
}
