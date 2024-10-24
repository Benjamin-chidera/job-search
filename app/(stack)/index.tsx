import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, View, ScrollView, SafeAreaView } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, icons, FONT, SIZES, images } from "@/constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "@/components";

export default function HomeScreen() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
