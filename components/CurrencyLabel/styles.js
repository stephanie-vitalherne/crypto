import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../constants";

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
  },
  icon: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
  txtContainer: {
    marginLeft: SIZES.base,
  },
  currency: {
    ...FONTS.h3,
  },
  code: {
    color: COLORS.gray,
    ...FONTS.body4,
  },
});

export { styles };
