import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
	TextInput,
	FlatList
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  };

  constructor(props){
		super(props)
		this.state={
			userName:'',
			userEmail:'', 
			userPassword:''				
		}
	}
	
	componentWillMount(){
    fetch('https://tietojenkasittely.lapinamk.fi/bit16/ourstories_example/getCompanyAddress.php', {
			method: 'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
        key: 'test',
			})
		})
		.then((response) => response.json())
			.then((responseJson) =>{
				this.setState ({ data: responseJson.companies })
			})
			.catch((error)=>{
				console.error(error);
			});
  
	}
	
	renderItem = ({item}) => (
		<Text>{item.Companyname}</Text>
	)

  render() {
    return (
      <View style={styles.container}>
      <FlatList
			style={{marginTop: 20}}
  		data={this.state.data}
  		renderItem={this.renderItem}
      />
	  
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});