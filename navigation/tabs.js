import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import LinearGradient from "react-native-linear-gradient";

import { Home } from "../screens";
import { COLORS, FONTS, icons } from "../constants";

const Tab = createBottomTabNavigator();
const TabBarCustomButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.customButton, styles.shadow]}
      onPress={onPress}
    >
      <LinearGradient
        colors={[COLORS.primary, COLORS.secondary]}
        style={styles.gradient}
      >
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.white,
          borderTopColor: "transparent",
          height: 100,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarSquare}>
              <Image
                style={[
                  styles.tabBarImage,
                  { tintColor: focused ? COLORS.primary : COLORS.black },
                ]}
                source={icons.home}
                resizeMode="contain"
              />
              <Text
                style={[
                  styles.tabBarTxt,
                  { color: focused ? COLORS.primary : COLORS.black },
                ]}
              >
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarSquare}>
              <Image
                style={[
                  styles.tabBarImage,
                  { tintColor: focused ? COLORS.primary : COLORS.black },
                ]}
                source={icons.pie_chart}
                resizeMode="contain"
              />
              <Text
                style={[
                  styles.tabBarTxt,
                  { color: focused ? COLORS.primary : COLORS.black },
                ]}
              >
                PORTFOLIO
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.transaction}
              style={styles.transactionBtn}
              resizeMode="contain"
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Prices"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarSquare}>
              <Image
                style={[
                  styles.tabBarImage,
                  { tintColor: focused ? COLORS.primary : COLORS.black },
                ]}
                source={icons.line_graph}
                resizeMode="contain"
              />
              <Text
                style={[
                  styles.tabBarTxt,
                  { color: focused ? COLORS.primary : COLORS.black },
                ]}
              >
                PRICES
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarSquare}>
              <Image
                style={[
                  styles.tabBarImage,
                  { tintColor: focused ? COLORS.primary : COLORS.black },
                ]}
                source={icons.settings}
                resizeMode="contain"
              />
              <Text
                style={[
                  styles.tabBarTxt,
                  { color: focused ? COLORS.primary : COLORS.black },
                ]}
              >
                SETTINGS
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  tabBarSquare: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabBarImage: {
    width: 30,
    height: 30,
  },
  tabBarTxt: {
    ...FONTS.body5,
  },
  transactionBtn: {
    width: 30,
    height: 30,
    tintColor: COLORS.white,
  },
  customButton: {
    top: -30,
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
});

export default Tabs;
