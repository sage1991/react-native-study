import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Button, Card, CardSection, Input, Spinner} from './common';
import firebase from 'firebase';
import { AuthContext } from '../context/AuthContext';

export class LoginForm extends Component {
  static contextType = AuthContext;

  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@domain.com"
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="your password"
            secureTextEntry
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />
        </CardSection>
        <Text style={styles.error}>{this.state.error}</Text>
        <CardSection style={styles.flexColumn}>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner />;
    }
    return <Button onPress={this.onButtonPress}>Login</Button>;
  }

  onButtonPress = async () => {
    this.setState({error: '', loading: true});
    const {
      action: {login, signup},
    } = this.context;
    const {email, password} = this.state;
    try {
      await login(email, password);
      return this.setState({email: '', password: '', loading: false});
    } catch (e) {
      console.log(e);
    }

    try {
      await signup(email, password);
      return this.setState({email: '', password: '', loading: false});
    } catch (e) {
      console.log(e);
    }

    this.setState({error: 'Authentication Fail...', loading: false});
  };
}

const styles = StyleSheet.create({
  error: {
    fontSize: 20,
    textAlign: 'center',
    color: 'red',
  },
  flexColumn: {
    flexDirection: 'column',
  },
});
