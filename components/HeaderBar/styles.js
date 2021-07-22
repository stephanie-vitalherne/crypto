import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS, icons, images } from "../../constants";

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    paddingHorizontal: SIZES.padding,
  },
  btnContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrow: {
    tintColor: COLORS.gray,
    width: 25,
    height: 25,
  },
  btnText: {
    marginLeft: SIZES.base,
    ...FONTS.h2,
  },
  starContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  star: {
    width: 30,
    height: 30,
  },
});

export { styles };
