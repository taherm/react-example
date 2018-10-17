import React from 'react';
import { StyleSheet, Text, View,TextInput,Alert,TouchableOpacity,ImageBackground } from 'react-native';

import { createStackNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';
import MapView from 'react-native-maps';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
   super(props)
   this.state = {
      username: '',
    }
}


 render() {
    return (
<View style={styles.MainContainer}>
   
        <TextInput
          
          placeholder="Enter Some Text!!!"
 
          onChangeText={username => this.setState({username})}
 
          style={{textAlign: 'center', marginBottom: 7, height: 50,backgroundColor:'#D3D3D3'}}
        />

        <Button  raised  rightIcon={{name: 'code'}} title="Navigate" color="teal" onPress={() => {
            this.props.navigation.navigate('Login', {
              username:this.state.username,
            });
          }}
          />

<Button  raised  rightIcon={{name: 'map'}} title="Show Map" color="blue" onPress={() => {
            this.props.navigation.navigate('Maps');
          }}
          />

</View>
            
    );
  }

}




class LoginScreen extends React.Component {

  render() {
    const { navigation } = this.props;
    const username = navigation.getParam('username', 'NO-username');
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={{fontSize: 20,fontWeight: 'bold'}}>Entered Text </Text>
        <Text style={{fontSize: 15,fontWeight: 'bold'}}>{JSON.stringify(username)}</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

class MapsScreen extends React.Component {

  render() {
    const { navigation } = this.props;
     return (
      
       <MapView style={{ position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,}}
       initialRegion={{
         latitude: 29.3771118,
         longitude: 47.9825512,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421,
       }}
     />
     )
  }


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 

});

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Maps:MapsScreen,
    
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}