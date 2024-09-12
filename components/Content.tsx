import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Content = ({ children }: { children: React.ReactNode }) => {
  return <SafeAreaView className="flex-1 px-5 py-3">{children}</SafeAreaView>;
};

export default Content;
