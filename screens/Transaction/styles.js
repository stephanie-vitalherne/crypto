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
    flex: 1,
  },
  tradeContainer: {
    flex: 1,
    paddingBottom: SIZES.padding,
  },
  tradeComponent: {
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.padding,
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
  },
  tradeTxt: {
    marginTop: SIZES.padding,
    marginBottom: SIZES.padding * 1.5,
    alignItems: "center",
    justifyContent: "center",
  },
  crypto: {
    ...FONTS.h2,
  },
  value: {
    color: COLORS.gray,
    ...FONTS.body4,
  },
  tradeBtn: {
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.green,
  },
  tradeLabel: {
    color: COLORS.white,
    ...FONTS.h3,
  },
});

export { styles };
