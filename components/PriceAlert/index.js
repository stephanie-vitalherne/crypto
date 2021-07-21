import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { icons } from "../../constants";

const PriceAlert = ({ customContainerStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.mainContainer, styles.shadow, { ...customContainerStyle }]}
    >
      <Image source={icons.notification_color} style={styles.notification} />
      <View style={styles.txtContainer}>
        <Text style={styles.title}>Set Price Alert</Text>
        <Text style={styles.subtitle}>
          Get notified when your coins are moving
        </Text>
      </View>

      <Image style={styles.arrow} source={icons.right_arrow} />
    </TouchableOpacity>
  );
};

export default PriceAlert;
