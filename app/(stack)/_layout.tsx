import { ScreenHeaderBtn } from "@/components";
import { COLORS, icons, images } from "@/constants";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function TabLayout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerStyle: { paddingHorizontal: 20 },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          // title: "",
          headerTitle: "",
          headerStyle: { backgroundColor: COLORS.lightWhite },
          // headerShadowVisible: false,
          headerLeft: () => (
            <View style={{ paddingLeft: 15 }}>
              <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
            </View>
          ),
          headerRight: () => (
            <View style={{ paddingRight: 15 }}>
              <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="job-details/[id]"
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),

          headerTitle: "",
        }}
      />
    </Stack>
  );
}
