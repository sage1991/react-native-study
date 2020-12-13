import React, { FC } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BusinessDetail } from "./BusinessDetail";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { withNavigation } from "react-navigation";


interface BusinessListProps {
  title: string;
  businesses: any[];
  navigation: StackNavigationProp;
}

const BusinessList: FC<BusinessListProps> = (props) => {
  const { title, businesses, navigation } = props;

  if (!businesses.length) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{ title }</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={businesses}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Show", { id: item.id })}>
            <BusinessDetail business={item} />
          </TouchableOpacity>
          )} />
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

const BusinessListWithNavigation = withNavigation(BusinessList);
export { BusinessListWithNavigation as BusinessList };