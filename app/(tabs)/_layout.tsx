import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelPosition: "below-icon",
      }}
    >
      <Tabs.Screen
        name="nature-meditate"
        options={{
          tabBarLabel: "Meditate",
          tabBarIcon: ({ color }) => {
            <MaterialCommunityIcons
              name="flower-tulip"
              size={24}
              color={"red"}
            />;
          },
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
