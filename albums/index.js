// import a library to help create a component
import React from 'react';
import {AppRegistry, ScrollView} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// create a component
const App = () => {
  return (
    <>
      <Header>Albums</Header>
      <ScrollView>
        <AlbumList />
      </ScrollView>
    </>
  );
};

// render it to the device
AppRegistry.registerComponent('albums', () => App);
