import React, {Component} from 'react';
import {AuthContext} from './context/AuthContext';
import {Button, Header, Spinner} from './components/common';
import {LoginForm} from './components/LoginForm';

export class Page extends Component {
  static contextType = AuthContext;

  render() {
    return (
      <>
        <Header>authentication</Header>
        {this.renderContent()}
      </>
    );
  }

  renderContent() {
    const {
      isLogin,
      action: {logout},
    } = this.context;

    if (isLogin === undefined) {
      return <Spinner size="large" />;
    }

    if (isLogin) {
      return <Button onPress={logout}>Log out</Button>;
    }

    return <LoginForm />;
  }
}
