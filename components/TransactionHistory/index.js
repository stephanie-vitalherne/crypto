import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { dummyData, COLORS, SIZES, icons } from "../../constants";

const TransactionHistory = ({ customContainerStyle, history }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => console.log(item)}
    >
      <Image source={icons.transaction} style={styles.transaction} />
      <View style={styles.txtContainer}>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <View style={styles.imgContainer}>
        <Text
          style={[
            styles.imgTitle,
            { color: item.type == "B" ? COLORS.green : COLORS.black },
          ]}
        >
          {item.amount} {item.currency}
        </Text>
        <Image style={styles.arrow} source={icons.right_arrow} />
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={[styles.container, { ...customContainerStyle }]}>
      <Text style={styles.title}>Transaction History</Text>
      <FlatList
        data={history}
        scrollEnabled={false}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
      />
    </View>
  );
};

export default TransactionHistory;
