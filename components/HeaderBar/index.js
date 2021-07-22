import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, FONTS, icons } from "../../constants";
import { styles } from "./styles";

const HeaderBar = ({ right }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      {/* Back Button */}
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Image
            resizeMode="contain"
            style={styles.arrow}
            source={icons.back_arrow}
          />
          <Text style={styles.btnText}>Back</Text>
        </TouchableOpacity>
      </View>

      {/* Star Button */}
      {right && (
        <View style={styles.starContainer}>
          <TouchableOpacity>
            <Image
              source={icons.star}
              resizeMode="contain"
              style={styles.star}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default HeaderBar;
