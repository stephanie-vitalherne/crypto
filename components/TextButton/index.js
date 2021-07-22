import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

const TextButton = ({
  label,
  customContainerStyle,
  customLabelStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, ...customContainerStyle]}
    >
      <Text style={[styles.label, ...customLabelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;
