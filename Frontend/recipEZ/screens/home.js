import React, { Component } from 'react';
import { StyleSheet, AppRegistry, ScrollView, View, Image, Text } from 'react-native';
import { withNavigation, } from "react-navigation";
import { Title, Button, TextInput } from 'react-native-paper'

class HomeParts extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.popToTop()}
        />
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
        <Button
          title="Go to Camera"
          onPress={() => this.props.navigation.navigate('Camera')}
        />
        <Button
          title="Go to Saved Recipes"
          onPress={() => this.props.navigation.navigate('Saved')}
        />
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
        <Button
          title="Go to Recipe Search"
          onPress={() => this.props.navigation.navigate('Search')}
        />
        <Button
          title="Go to Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />

      </View>
    );
  }
}

export default withNavigation(HomeParts);