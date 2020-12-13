import React, { FC } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { BusinessDetail } from "./BusinessDetail";


interface BusinessListProps {
  title: string;
  businesses: any[];
}

export const BusinessList: FC<BusinessListProps> = (props) => {
  const { title, businesses } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{ title }</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={businesses}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <BusinessDetail business={item} />} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15
  },
  title: {
    marginLeft: 15,
    fontSize: 20,
    fontWeight: "bold"
  }
});