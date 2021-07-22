import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { dummyData, COLORS, SIZES, FONTS } from "../../constants";
import { styles } from "./styles";

// COMPONENTS
import {
  HeaderBar,
  TextButton,
  TransactionHistory,
  CurrencyLabel,
} from "../../components";

const Transaction = ({ route }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  useEffect(() => {
    const { currency } = route.params;
    setSelectedCurrency(currency);
  }, []);

  function renderTrade() {
    return (
      <View style={[styles.tradeComponent, styles.shadow]}>
        <CurrencyLabel
          code={selectedCurrency?.code}
          icon={selectedCurrency?.image}
          currency={selectedCurrency?.currency}
        />

        <View style={styles.tradeTxt}>
          <Text style={styles.crypto}>
            {selectedCurrency?.wallet.crypto} {selectedCurrency?.code}
          </Text>
          <Text style={styles.value}>${selectedCurrency?.wallet.value}</Text>
        </View>

        {/* Button */}
        <TouchableOpacity
          style={styles.tradeBtn}
          onPress={() => console.log("Trade")}
        >
          <Text style={styles.tradeLabel}>Trade</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderTransitionHistory() {
    return (
      <TransactionHistory
        customContainerStyle={{ ...styles.shadow }}
        history={selectedCurrency?.transactionHistory}
      />
    );
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <HeaderBar />
      <ScrollView>
        <View style={styles.tradeContainer}>
          {renderTrade()}
          {renderTransitionHistory()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Transaction;
