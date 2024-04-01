import * as React from 'react';
import { Text, View, StatusBar, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


import { AppRequired, images } from '../../constants';

export default class SwitchControle extends React.Component {
  componentDidMount = async () => {
    let SwitchNavigation = await AsyncStorage.getItem('switch');

    // alert(SwitchNavigation)
    setTimeout(() => {
      if (SwitchNavigation != null || SwitchNavigation != undefined) {
        if (SwitchNavigation == 'Auth') {
          this.props.navigation.navigate('Auth');
        } else if (SwitchNavigation == 'Home') {
          this.props.navigation.navigate('HomePages');
        }
      } else {
        this.props.navigation.navigate('IntroSlider');
      }
    }, 4000);
  };

  render() {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <StatusBar hidden={true} />
        <Image
          source={images.splash}
          style={{ width: '95%', height: 400, resizeMode: 'contain' }}
        />
        <Text style={{ fontSize: 20, color: "#000" }}>
          {' '}
          مرحبا بكم في ابلكيشن البطاقات الضمنيه
        </Text>
      </View>
    );
  }
}
