import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  Animated,
} from "react-native";
import { styles } from "./styles";
import { dummyData, COLORS, SIZES, icons } from "../../constants";
import {
  VictoryScatter,
  VictoryLine,
  VictoryChart,
  VictoryAxis,
} from "victory-native";
import { VictoryCustomTheme } from "../../styles";

// COMPONENTS
import {
  HeaderBar,
  CurrencyLabel,
  TextButton,
  PriceAlert,
} from "../../components";

const CryptoDetail = ({ route, navigation }) => {
  const scrollX = new Animated.Value(0);
  const numberOfCharts = [1, 2, 3];
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [chartOptions, setChartOptions] = useState(dummyData.chartOptions);
  const [selectedOption, setSelectedOption] = useState(chartOptions[0]);

  useEffect(() => {
    const { currency } = route.params;
    setSelectedCurrency(currency);
  }, []);

  function optionOnClickHandler(option) {
    setSelectedOption(option);
  }

  function renderDots() {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View style={styles.dotContainer}>
        <View style={styles.dots}>
          {numberOfCharts.map((item, index) => {
            const opacity = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });
            const dotSize = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
              extrapolate: "clamp",
            });
            const dotColor = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [COLORS.gray, COLORS.primary, COLORS.gray],
              extrapolate: "clamp",
            });

            return (
              <Animated.View
                key={`dot-${index}`}
                opacity={opacity}
                style={[
                  styles.dot,
                  {
                    width: dotSize,
                    height: dotSize,
                    backgroundColor: dotColor,
                  },
                ]}
              />
            );
          })}
        </View>
      </View>
    );
  }

  function renderChart() {
    return (
      <View style={[styles.chartContainer, styles.shadow]}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <View style={styles.label}>
            <CurrencyLabel
              code={selectedCurrency?.code}
              icon={selectedCurrency?.image}
              currency={selectedCurrency?.currency}
            />
          </View>

          <View>
            <Text style={styles.amount}>${selectedCurrency?.amount}</Text>
            <Text
              style={[
                styles.changes,
                {
                  color:
                    selectedCurrency?.type == "I" ? COLORS.green : COLORS.red,
                },
              ]}
            >
              {selectedCurrency?.changes}
            </Text>
          </View>
        </View>

        {/* Chart */}
        <Animated.ScrollView
          horizontal
          pagingEnabled
          decelerationRate={0}
          scrollEventThrottle={16}
          snapToAlignment="center"
          snapToInterval={SIZES.width - 40}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
        >
          {numberOfCharts.map((item, index) => (
            <View
              key={`chart-${index}`}
              style={{ marginLeft: index == 0 ? SIZES.base : 0 }}
            >
              <View style={styles.headerChartContainer}>
                <VictoryChart
                  theme={VictoryCustomTheme}
                  width={SIZES.width - 40}
                  height={220}
                >
                  <VictoryLine
                    style={{
                      data: { stroke: COLORS.secondary },
                      parent: { border: "1px solid #ccc" },
                    }}
                    data={selectedCurrency?.chartData}
                    categories={{
                      x: ["15 MIN", "30 MIN", "45 MIN", "60 MIN"],
                      y: ["15", "30", "45"],
                    }}
                  />
                  <VictoryScatter
                    data={selectedCurrency?.chartData}
                    size={7}
                    style={{
                      data: { fill: COLORS.secondary },
                    }}
                  />
                  <VictoryAxis
                    style={{
                      grid: { stroke: "transparent" },
                    }}
                  />
                  <VictoryAxis
                    dependentAxis
                    style={{
                      axis: { stroke: "transparent" },
                      grid: { stroke: "gray" },
                    }}
                  />
                </VictoryChart>
              </View>
            </View>
          ))}
        </Animated.ScrollView>
        {/* Options */}
        <View style={styles.btnContainer}>
          {chartOptions.map((option) => {
            return (
              <TextButton
                key={`option-${option.id}`}
                label={option.label}
                customContainerStyle={[
                  styles.button,
                  {
                    backgroundColor:
                      selectedOption.id == option.id
                        ? COLORS.primary
                        : COLORS.lightGray,
                  },
                ]}
                customLabelStyle={[
                  styles.btnLabel,
                  {
                    color:
                      selectedOption.id == option.id
                        ? COLORS.white
                        : COLORS.gray,
                  },
                ]}
                onPress={() => optionOnClickHandler(option)}
              />
            );
          })}
        </View>
        {/* Dots */}
        {renderDots()}
      </View>
    );
  }

  function renderBuy() {
    return (
      <View style={[styles.buyContainer, styles.shadow]}>
        <View style={styles.buyInner}>
          {/* Currency */}
          <View style={styles.currBuyContainer}>
            <CurrencyLabel
              code={selectedCurrency?.code}
              icon={selectedCurrency?.image}
              currency={`${selectedCurrency?.currency} Wallet`}
            />
          </View>

          {/* Amount */}
          <View style={styles.amoBuyContainer}>
            <View style={styles.amoBuyTxtContainer}>
              <Text style={styles.amoValue}>
                ${selectedCurrency?.wallet.value}
              </Text>
              <Text style={styles.amoCrypto}>
                {selectedCurrency?.wallet.crypto} {selectedCurrency?.code}
              </Text>
            </View>
            <Image
              source={icons.right_arrow}
              style={styles.arrow}
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Button */}
        <TouchableOpacity
          style={styles.buyBtn}
          onPress={() =>
            navigation.navigate("Transaction", { currency: selectedCurrency })
          }
        >
          <Text style={styles.buyLabel}>Buy</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderAbout() {
    return (
      <View style={[styles.abtContainer, styles.shadow]}>
        <Text style={styles.abtTitle}>About {selectedCurrency?.currency}</Text>
        <Text style={styles.abtDescription}>
          {selectedCurrency?.description}
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <HeaderBar right />

      <ScrollView>
        <View style={styles.chart}>
          {renderChart()}
          {renderBuy()}
          {renderAbout()}
          <PriceAlert customContainerStyle={styles.price} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CryptoDetail;
