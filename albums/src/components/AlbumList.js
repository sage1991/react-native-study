import React, {Component} from 'react';
import {View} from 'react-native';
import axios from 'axios';
import Album from './Album';

class AlbumList extends Component {
  state = {albums: []};

  componentDidMount() {
    console.log('componentDidMount');
    axios
      .get('http://localhost:3000/albums')
      .then((response) => {
        this.setState({albums: response.data});
      })
      .catch((e) => console.log(e));
  }

  render() {
    return <View>{this.renderAlbums()}</View>;
  }

  renderAlbums() {
    const {albums} = this.state;
    return albums.map((album, index) => (
      <Album key={album.id} model={album} />
    ));
  }
}

export default AlbumList;
