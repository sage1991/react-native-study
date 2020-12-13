import React, { FC, useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { fetchBusiness } from "../service/Yelp";


interface BusinessShowScreenProps {
  navigation: StackNavigationProp;
}

export const BusinessShowScreen: FC<BusinessShowScreenProps> = (props) => {
  const { navigation } = props;
  const [ business, setBusiness ] = useState<any>();
  const id = navigation.getParam("id");

  const fetchBusinessById = async (_id: string) => {
    try {
      const response = await fetchBusiness(_id);
      setBusiness(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchBusinessById(id);
  }, [ id ]);

  if (!business) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{ business.name }</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={business.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => <Image style={styles.image} source={{ uri: item }} />} />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10
  },
  image: {
    height: 200,
    width: 300,
    marginVertical: 10,
    borderRadius: 5
  }
});