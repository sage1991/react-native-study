import React from 'react';
import {View, Text, Image, StyleSheet, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const Album = ({model}) => {
  const {thumbnail, textContainer, title, artist, image} = styles;
  return (
    <Card>
      <CardSection>
        <Image style={thumbnail} source={{uri: model.image}} />
        <View style={textContainer}>
          <Text style={title}>{model.title}</Text>
          <Text style={artist}>{model.artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={image} source={{uri: model.image}} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(model.url)}>Buy Now!</Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 18,
  },
  artist: {
    color: 'rgba(0, 0, 0, 0.4)',
  },
  image: {
    height: 300,
    flex: 1,
  },
});

export default Album;
