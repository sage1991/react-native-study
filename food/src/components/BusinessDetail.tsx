import React, { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";


interface BusinessDetailProps {
  business: any;
}

export const BusinessDetail: FC<BusinessDetailProps> = (props) => {
  const { business } = props;

  return (
    <View style={styles.container}>
      <Image source={{ uri: business.image_url }} style={styles.image} />
      <Text style={styles.name}>{ business.name }</Text>
      <Text style={styles.info}>{ `${business.rating} Stars, ${business.review_count} Reviews` }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginVertical: 5
  },
  name: {
    fontWeight: "bold",
  },
  info: {
    color: "#aaaaaa"
  }
});