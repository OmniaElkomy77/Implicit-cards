import AsyncStorage from '@react-native-community/async-storage';
import * as React from 'react';
import { Text, View, TouchableOpacity, StatusBar, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { images } from '../../constants';
export default class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  async componentDidMount() {
    let users = await AsyncStorage.getItem("users")
    if (!users) {
      users = []
    } else {
      users = JSON.parse(users)
    }
    // user_name
    let user_name = JSON.parse(await AsyncStorage.getItem("user_name"))
    this.setState({ name: user_name })
  }

  async logout() {
    await AsyncStorage.setItem('user_name', "");

    await AsyncStorage.setItem('switch', 'Auth');
    this.props.navigation.navigate('Login');
  }
  render() {
    return (
      <>
        <StatusBar backgroundColor={'#242c78'} barStyle="light-content" />
        <View
          style={{
            height: 60,
            width: '100%',
            backgroundColor: '#242c78',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            // borderBottomLeftRadius: 50,
            // borderBottomRightRadius: 50,
          }}>

          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>
            الصفحة الرئيسية
          </Text>
        </View>

        <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center' }}>

          <Animatable.View

            style={{
              padding: 10,
              width: '90%',

              flex: 1 / 4,
              borderRadius: 15,
              alignSelf: 'center',
              backgroundColor: '#fff',
              elevation: 4,
              marginVertical: 15,
              // flexDirection: "row"
            }}
            duration={1000} animation="fadeInUpBig" delay={100}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Catogaries")

              }}


              style={{

                alignItems: "center",
                height: "100%",
                width: "100%",
                justifyContent: "space-around"

              }}
            >
              <Image
                source={images.education}

                style={{
                  height: 80,
                  width: 100,
                  resizeMode: "center",

                  // marginBottom: 25
                }} />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  // marginLeft: 20,
                  color: '#000',
                }}>
                تعلم
              </Text>
            </TouchableOpacity>
          </Animatable.View>



          <Animatable.View

            style={{
              padding: 10,
              width: '90%',

              flex: 1 / 4,
              borderRadius: 15,
              alignSelf: 'center',
              backgroundColor: '#fff',
              elevation: 4,
              marginVertical: 15,
              // flexDirection: "row"
            }}
            duration={1000} animation="fadeInUpBig" delay={100}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Exam")

              }}


              style={{

                alignItems: "center",
                height: "100%",
                width: "100%",
                justifyContent: "space-around"

              }}
            >
              <Image
                source={images.questions}

                style={{
                  height: 80,
                  width: 100,
                  resizeMode: "center",

                  // marginBottom: 25
                }} />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  // marginLeft: 20,
                  color: '#000',
                }}>
                أسئلة
              </Text>
            </TouchableOpacity>
          </Animatable.View>




          <Animatable.View

            style={{
              padding: 10,
              width: '90%',
              // height: 100,

              flex: 1 / 4,
              borderRadius: 15,
              alignSelf: 'center',
              backgroundColor: '#fff',
              elevation: 4,
              marginVertical: 10,
              // flexDirection: "row"
            }}


            duration={1000} animation="fadeInUpBig" delay={200}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Board")
                // alert("1")
              }}
              style={{


                alignItems: "center",
                width: "100%",
                height: "100%",
                justifyContent: "space-around"

                // flexDirection: "row",

              }}>
              <Image
                source={images.white_board}

                style={{
                  height: 80, width: 100, resizeMode: "center",
                  // marginBottom: 25
                }} />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  // marginLeft: 20,
                  color: '#000',
                }}>
                لوحه
              </Text>
            </TouchableOpacity>
          </Animatable.View>


          <Animatable.View
            style={{
              padding: 10,
              width: '90%',
              // height: 100,
              flex: 1 / 4,
              borderRadius: 15,
              alignSelf: 'center',
              backgroundColor: '#fff',
              elevation: 4,
              marginVertical: 10,
              // flexDirection: "row"
            }}


            duration={1000} animation="fadeInUpBig" delay={300}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Home")


              }}
              style={{
                alignItems: "center",

                justifyContent: "space-around",
                height: "100%",
                width: "100%",
              }}>
              <Image
                source={images.consulting}

                style={{
                  height: 80, width: 100, resizeMode: "center",

                }} />

              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  // marginLeft: 20,
                  color: '#000',
                }}>
                استشاره
              </Text>
            </TouchableOpacity>
          </Animatable.View>

          <View style={{
            // height: 200,
            flex: 1 / 4,
            // backgroundColor: '#454',
            width: "100%",
            justifyContent: "flex-end",
            alignItems: "center"
          }}>
            <Animatable.View
              duration={1000} animation="fadeInUpBig" delay={400}


              style={{
                backgroundColor: '#242c78',
                marginVertical: 30,

                width: '60%',
                borderRadius: 15,

              }}>

              <TouchableOpacity
                style={{

                  justifyContent: 'center',
                  alignSelf: 'center',

                  height: 50,
                  width: '60%',
                  borderRadius: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  this.logout();
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  تسجيل الخروج
                </Text>
              </TouchableOpacity>
            </Animatable.View>
          </View>
        </View>
      </>
    );
  }
}
