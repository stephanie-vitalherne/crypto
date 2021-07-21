import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../constants";

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.padding * 4.5,
    marginHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.radius,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
  },
  notification: {
    width: 30,
    height: 30,
  },
  txtContainer: {
    flex: 1,
    marginLeft: SIZES.radius,
  },
  title: {
    ...FONTS.h3,
  },
  subtitle: {
    ...FONTS.body4,
  },
  arrow: {
    width: 25,
    height: 25,
    tintColor: COLORS.gray,
  },
});

export { styles };
