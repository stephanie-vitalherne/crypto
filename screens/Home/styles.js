import { StyleSheet } from "react-native";
import {
  dummyData,
  COLORS,
  SIZES,
  FONTS,
  icons,
  images,
} from "../../constants";

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
    paddingBottom: 130,
  },
  headerContainer: {
    width: "100%",
    height: 290,
  },
  headerBanner: {
    flex: 1,
    alignItems: "center",
  },
  headerBar: {
    marginTop: SIZES.padding * 2,
    width: "100%",
    alignItems: "flex-end",
    paddingHorizontal: SIZES.padding,
  },
  headerBarBtn: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  bell: {
    flex: 1,
  },
  balanceContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  balanceTitle: {
    color: COLORS.white,
    ...FONTS.h3,
  },
  balance: {
    marginTop: SIZES.base,
    color: COLORS.white,
    ...FONTS.h1,
  },
  balanceChanges: {
    color: COLORS.white,
    ...FONTS.body5,
  },
  trendContainer: {
    position: "absolute",
    bottom: "-30%",
  },
  trendTitle: {
    marginLeft: SIZES.padding,
    color: COLORS.white,
    ...FONTS.h2,
  },
  trendContentContainer: {
    marginTop: SIZES.base,
  },
  trendList: {},
  itemContainer: {
    width: 180,
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding,
    marginRight: SIZES.radius,
    borderRadius: 10,
    backgroundColor: COLORS.white,
  },
  currencyContainer: {
    flexDirection: "row",
  },
  currencyImage: {
    marginTop: 5,
    width: 25,
    height: 25,
  },
  txtContainer: {
    marginLeft: SIZES.base,
  },
  currency: {
    ...FONTS.h2,
  },
  code: {
    color: COLORS.gray,
    ...FONTS.body3,
  },
  valueContainer: {
    marginTop: SIZES.radius,
  },
  amount: {
    ...FONTS.h2,
  },
  changes: {
    ...FONTS.h3,
  },
});

export { styles };
