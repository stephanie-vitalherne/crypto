import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.padding,
    padding: 20,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
  },
  title: {
    ...FONTS.h2,
  },
  list: {
    marginTop: SIZES.radius,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: COLORS.lightGray,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: SIZES.base,
  },
  transaction: {
    width: 30,
    height: 30,
    tintColor: COLORS.primary,
  },
  txtContainer: {
    flex: 1,
    marginLeft: SIZES.radius,
  },
  description: {
    ...FONTS.h3,
  },
  date: {
    color: COLORS.gray,
    ...FONTS.body4,
  },
  imgContainer: {
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
  },
  imgTitle: {
    ...FONTS.h3,
  },
  arrow: {
    width: 20,
    height: 20,
    tintColor: COLORS.gray,
  },
});

export { styles };
