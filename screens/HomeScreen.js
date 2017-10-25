import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StoryContainer from '../components/sample'

export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Home',
    },
  };

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
