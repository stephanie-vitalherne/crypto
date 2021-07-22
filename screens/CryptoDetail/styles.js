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
    backgroundColor: COLORS.lightGray,
  },
  chart: {
    flex: 1,
    paddingBottom: SIZES.padding,
  },
  chartContainer: {
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.radius,
    alignItems: "center",
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
  },
  headerContainer: {
    flexDirection: "row",
    marginTop: SIZES.padding,
    paddingHorizontal: SIZES.padding,
  },
  label: {
    flex: 1,
  },
  amount: {
    ...FONTS.h3,
  },
  changes: {
    ...FONTS.body3,
  },
  headerChartContainer: {
    marginTop: -25,
  },
  btnContainer: {
    width: "100%",
    paddingHorizontal: SIZES.padding,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    height: 30,
    width: 60,
    borderRadius: 15,
  },
  btnLabel: {
    ...FONTS.body5,
  },
});

export { styles };
