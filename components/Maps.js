import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View,TextInput,Alert,TouchableOpacity,ImageBackground } from 'react-native';


export default class Maps extends React.Component {
    
   render() {
      return (
          <View>
        <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      </View>
      )
   }
}

