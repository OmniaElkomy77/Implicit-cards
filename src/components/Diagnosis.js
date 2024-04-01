import React from 'react';
import { View, Text, StatusBar, ScrollView, Image, FlatList } from 'react-native';

export default class Diagnosis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      treatment: this.props.navigation.getParam('treatment'),
      disease_name: this.props.navigation.getParam('disease_name'),
      disease_image: this.props.navigation.getParam('disease_image'),
    };
  }

  render() {
    return (
      <>
        <View style={{ height: '100%', width: '100%', backgroundColor: '#fff' }}>
          <ScrollView>
            <StatusBar backgroundColor={'#242c78'} barStyle="light-content" />
            <View
              style={{
                height: 60,
                width: '100%',
                backgroundColor: '#242c78',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{ fontSize: 18, fontWeight: '700', color: '#fff' }}>
                التشخيص
              </Text>
            </View>

            <View
              style={{
                // backgroundColor: '#474',
                alignSelf: 'center',
                marginVertical: 10,
                // height: 300,
                // padding:10,
                width: '90%',
                borderRadius: 10,
                borderColor: '#242c78',
                borderWidth: 1,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  height: 125,
                  width: '100%',
                  borderBottomWidth: 0.5,
                  borderBottomColor: '#242c78',
                  // backgroundColor: '#474',
                  flexDirection: "row"
                }}>
                <View>
                  <Text style={{ color: '#ac1313', fontWeight: 'bold', fontSize: 18 }}>
                    {' '}
                    المرض هو
                  </Text>

                  <Text style={{ color: '#000', fontWeight: '600', fontSize: 17 }}>
                    {'           '}

                    {this.state.disease_name}
                  </Text>
                </View>
                <View>
                  <Image source={this.state.disease_image} style={{ height: 90, width: 120, resizeMode: "cover", borderRadius: 10 }} />
                </View>


              </View>

              <View
                style={{
                  // backgroundColor: '#585',
                  // height:50,
                  padding: 10,
                  width: '97%',
                  alignSelf: 'center',
                }}>
                <Text style={{ color: '#000', fontSize: 15 }}>
                  {this.state.treatment}
                </Text>


              </View>
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}
