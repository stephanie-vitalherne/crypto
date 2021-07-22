import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

const CurrencyLabel = ({ icon, currency, code }) => {
  return (
    <View style={styles.mainContainer}>
      <Image source={icon} resizeMode="cover" style={styles.icon} />
      <View style={styles.txtContainer}>
        <Text style={styles.currency}>{currency}</Text>
        <Text style={styles.code}>{code}</Text>
      </View>
    </View>
  );
};

export default CurrencyLabel;
