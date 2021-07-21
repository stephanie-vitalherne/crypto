import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
} from "react-native";
import { dummyData, COLORS, SIZES, icons, images } from "../../constants";
import { styles } from "./styles";

const Home = ({ navigation }) => {
  const [trending, setTrending] = useState(dummyData.trendingCurrencies);

  function renderHeader() {
    const renderItem = ({ item, index }) => (
      <TouchableOpacity
        style={[
          styles.itemContainer,
          { marginLeft: index == 0 ? SIZES.padding : 0 },
        ]}
      >
        {/* Currency */}
        <View style={styles.currencyContainer}>
          <View>
            <Image
              style={styles.currencyImage}
              source={item.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.txtContainer}>
            <Text style={styles.currency}>{item.currency}</Text>
            <Text style={styles.code}>{item.code}</Text>
          </View>
        </View>

        {/* Value */}
        <View style={styles.valueContainer}>
          <Text style={styles.amount}>${item.amount}</Text>
          <Text
            style={[
              styles.changes,
              { color: item.type == "I" ? COLORS.green : COLORS.red },
            ]}
          >
            {item.changes}
          </Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={[styles.headerContainer, styles.shadow]}>
        <ImageBackground
          resizeMode="cover"
          source={images.banner}
          style={styles.headerBanner}
        >
          {/* Header Bar */}
          <View style={styles.headerBar}>
            <TouchableOpacity
              style={styles.headerBarBtn}
              onPress={() => console.log("Notification")}
            >
              <Image
                source={icons.notification_white}
                resizeMode="contain"
                style={styles.bell}
              />
            </TouchableOpacity>
          </View>

          {/* Balance */}
          <View style={styles.balanceContainer}>
            <Text style={styles.balanceTitle}>Your Portfolio Balance</Text>
            <Text style={styles.balance}>${dummyData.portfolio.balance}</Text>
            <Text style={styles.balanceChanges}>
              {dummyData.portfolio.changes} Last 24 hours
            </Text>
          </View>

          {/* Trending */}
          <View style={styles.trendContainer}>
            <Text style={styles.trendTitle}>Trending</Text>
            <FlatList
              horizontal
              data={trending}
              renderItem={renderItem}
              style={styles.trendList}
              keyExtractor={(item) => `${item.id}`}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.trendContentContainer}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.mainContainer}>{renderHeader()}</View>
    </ScrollView>
  );
};

export default Home;
