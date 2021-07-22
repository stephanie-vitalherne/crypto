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
import { dummyData, COLORS, SIZES, icons, images } from "../../constants";
import {
  VictoryScatter,
  VictoryLine,
  VictoryChart,
  VictoryAxis,
} from "victory-native";
import { VictoryCustomTheme } from "../../styles";

// COMPONENTS
import { HeaderBar, CurrencyLabel } from "../../components";

const CryptoDetail = ({ route, navigation }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  useEffect(() => {
    const { currency } = route.params;
    setSelectedCurrency(currency);
  }, []);

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
        {/* Options */}
        {/* Dots */}
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <HeaderBar right />

      <ScrollView>
        <View style={styles.chart}>{renderChart()}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CryptoDetail;