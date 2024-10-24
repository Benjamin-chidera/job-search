import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./screenheader.style";

type heardTypes = {
  iconUrl: string;
  dimension: number | string;
};

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }: heardTypes) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        // @ts-ignore
        source={iconUrl}
        resizeMode="cover"
        // @ts-ignore
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
