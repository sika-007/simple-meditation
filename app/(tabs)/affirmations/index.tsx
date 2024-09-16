import { View, Text, ScrollView } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import AFFIRMATION_GALLERY from "@/constants/affirmations-gallery";
import GuidedAffirmationsGallery from "@/components/GuidedAffirmationsGallery";

const Affirmations = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-zinc-50 text-3xl bold">
            Change your beliefs with healthy affirmations
          </Text>
          <View>
            {AFFIRMATION_GALLERY.map((gal) => (
              <GuidedAffirmationsGallery
                key={gal.title}
                title={gal.title}
                previews={gal.data}
              />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default Affirmations;
