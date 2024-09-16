import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { GalleryPreviewData } from "@/constants/models/affirmationCategory";
import AFFIRMATION_GALLERY from "@/constants/affirmations-gallery";
import AppGradient from "@/components/AppGradient";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const AffirmationPractice = () => {
  const { itemId } = useLocalSearchParams();
  const { back } = useRouter();

  const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
  const [sentences, setSentences] = useState<string[]>([]);

  useEffect(() => {
    for (let i = 0; i < AFFIRMATION_GALLERY.length; i++) {
      const affirmationsData = AFFIRMATION_GALLERY[i].data;

      const affirmationToStart = affirmationsData.find(
        (item) => item.id === parseInt(itemId as string)
      );

      if (affirmationToStart) {
        setAffirmation(affirmationToStart);

        const affirmationsArray = affirmationToStart.text.split(".");

        //Remove the last element of it is an empty string

        if (affirmationsArray[affirmationsArray.length - 1] === "") {
          affirmationsArray.pop();
        }

        setSentences(affirmationsArray);

        return;
      }
    }
  }, []);
  return (
    <View className="flex-1">
      <ImageBackground
        source={affirmation?.image}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0, 0, 0, 0.3)", "rgba(0, 0, 0, 0.8)"]}>
          <Pressable onPress={back}>
            <EvilIcons
              name="arrow-left"
              size={50}
              color="white"
              className="absolute top-16 left-6 z-10"
            />
          </Pressable>

          <ScrollView className="mt-20" showsVerticalScrollIndicator={false}>
            <View className="h-full justify-center">
              <View className="h-4/5 justify-center">
                {sentences?.map((sentence, index) => (
                  <Text
                    key={index}
                    className="text-white text-3xl mb-12 font-bold text-center"
                  >
                    {sentence}
                  </Text>
                ))}
              </View>
            </View>
          </ScrollView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default AffirmationPractice;
