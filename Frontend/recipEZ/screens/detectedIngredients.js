import React, { Component } from 'react';
import { StyleSheet, AppRegistry, ScrollView, View, Image, Text } from 'react-native';
import { createStackNavigator, createAppContainer, StackViewTransitionConfigs, withNavigation } from "react-navigation";
import { Searchbar, Title, Button, Divider, Subheading, ActivityIndicator } from 'react-native-paper'

const filterObject = function (results) {
  const filterWords = ['Fruit', 'Food', 'Tableware', 'Vegetable', 'Light', 'Kitchenware', 'Drink']
  const foodArray = [];
  results.forEach((result, ind) => {
    if ((filterWords.indexOf(result.name) > -1) || result.score < 0.5) {
      results.splice(ind, 1);
    } else {
      foodArray.push(result.name);
    }
  });

  return foodArray;
}


class RecipeSearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: []
    }
  }

  static navigationOptions = {
    title: 'Detected Ingredients',

  };
  async componentDidMount() {
    await this.props.navigation.state.params.detectedObjects;
    this.setState({ ingredients: filterObject(this.props.navigation.state.params.detectedObjects) })
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
        <Title>We found these ingredients:</Title>
        {this.state.ingredients.map((ingredient, ind) => {
          return (
            <View key={ind}>
              <Text>{ingredient}</Text>
            </View>
          )
        })}
        {/* <Searchbar
          placeholder="Search"
          onChangeText={query => { this.setState({ firstQuery: query }); }}
          value={firstQuery}
        /> */}
        <Divider />
        <View style={{ width: '35%' }}>
          <Button
            mode="contained"
            onPress={() => { this.props.navigation.push('Found', { ingredients: this.state.ingredients }) }}>Done</Button>
          <Button
            mode="contained" style={{ marginTop: 5 }}
            onPress={() => { this.props.navigation.popToTop() }}>Retake</Button>
        </View>


      </View>
    );
  }
}

export default withNavigation(RecipeSearchScreen);