import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StoryContainer from '../components/sample'

export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Home',
    },
  };

  componentWillMount() {
    fetch('https://tietojenkasittely.lapinamk.fi/bit16/ourstories_example/getCompanyAddress.php', {
      method: 'post',
      header: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body:JSON.stringify(({
        key: 'test'
      }))
    }).then((response) => response.json())
    .then((responseJson) => {this.setState({ companies: responseJson.companies})})
  }

  render() {
    return (
      <View style={styles.container}>
       <Text>This is home screen</Text>
       <Text> New Text</Text>
       <StoryContainer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
