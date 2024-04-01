import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  // AsyncStorage,
  ToastAndroid,
  ActivityIndicator
} from 'react-native';

import { Kohana, Fumi } from 'react-native-textinput-effects';;
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
// import { Spinner } from 'native-base';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-community/async-storage';
import { AppRequired, images } from '../../constants';
const { width, height } = Dimensions.get('window');

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      icon: false,
      secure: true,
      email: '',
      emailerr: '',
      pass: '',
      passerr: '',
      loading: false,
      securePass: '',
      bottomConnectionMsg: new Animated.Value(-100),
      connection_Status: 'Offline',
      loggedModal: false,
      resMassage: '',
    };
  }
  componentWillUnmount() {
    this._subscription && this._subscription();
  }
  async componentDidMount() {

    this._subscription = NetInfo.addEventListener(
      this._handelConnectionInfoChange,
    );
  }


  _handelConnectionInfoChange = (NetInfoState) => {
    if (NetInfoState.isConnected == true) {
      this.setState(({ }) => ({
        connection_Status: 'Online',
      }));
      Animated.spring(this.state.bottomConnectionMsg, {
        toValue: -100,
      }).start();
    } else {
      this.setState(({ }) => ({
        connection_Status: 'offline',
      }));
      Animated.spring(this.state.bottomConnectionMsg, { toValue: 0 }).start();
    }
  };







  // async signin() {
  //   // await AsyncStorage.setItem('switch', 'Home');
  //   // this.props.navigation.navigate('HomePage')
  // //  axios.get("https://camp-coding.org/check.php").then(async res=>{
  // //     if(res.status==200){
  // //       if(res.data==1){
  // //         await AsyncStorage.setItem('switch', 'Home');
  // //         this.props.navigation.navigate('HomePage')
  // //       }else{
  // //         ToastAndroid.showWithGravityAndOffset(
  // //           "حدث خطأ ما يرجي التاكيد من البيانات  الشخصيه ",
  // //           ToastAndroid.SHORT,
  // //           ToastAndroid.BOTTOM,
  // //           20,
  // //           20
  // //       );
  // //       }

  // //     }
  // //   })     
  // }
  setData = async (user_name) => {


    await AsyncStorage.setItem('user_name', JSON.stringify(user_name));
    await AsyncStorage.setItem('switch', 'Home');
    this.props.navigation.navigate('HomePage');

  };

  async signin() {

    let data_to_send = {
      email: this.state.email,
      password: this.state.pass
    };

    let users = await AsyncStorage.getItem("users")

    if (!users) {
      users = []
    } else {
      users = JSON.parse(users)
    }

    let found = -1;

    for (let i = 0; i < users.length; i++) {

      if (data_to_send.email == users[i].email && data_to_send.password == users[i].password) {

        found = i;
        break
      }
    }

    if (found == -1) {
      // alert("بيانات المستخدم غير صحيحه")
      ToastAndroid.showWithGravityAndOffset(
        "بيانات المستخدم غير صحيحه",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        20,
        20
      );

    } else {
      this.setData(users[found].name)

    }


    //   this.props.navigation.navigate('mainHomePage');




  }















  validate = (text) => {
    let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      this.setState({ email: text });
      return false;
    } else {
      this.setState({ email: text });
      return true;
    }
  };
  checkbutton() {
    let error = 0;
    if (this.validate(this.state.email.trim())) {
      this.setState({ emailerr: '' });
    } else {
      error++;
      this.setState({ emailerr: 'ادخل بريد الكتروني صحيح' });
    }

    if (this.state.pass.trim() == '') {
      error++;
      this.setState({ passerr: ' يجب ادخال كلمة المرور ' });
    } else {
      this.setState({ passerr: '' });
    }

    if (error === 0) {
      this.signin();
      // await AsyncStorage.setItem('switch', 'Home');

    }
  }

  render() {
    const { titleStyle, textTitleStyle, inputContainerView } = styles;
    const ViewConnectionMsg = (props) => {
      return (
        <Animated.View
          style={[
            styles.ConnectionView,
            { bottom: this.state.bottomConnectionMsg },
          ]}>
          <View>
            <Text style={{ color: 'white' }}>{props.ConnectionEnter}</Text>
          </View>
        </Animated.View>
      );
    };
    return (
      <>
        <View
          // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ height: "100%", width: "100%", backgroundColor: "#fff" }}>
          <StatusBar backgroundColor={'#242c78'} barStyle="light-content" />
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <ScrollView style={{ width: '100%', height: '100%' }}>

              <View
                style={{
                  width: 158,
                  height: 200,
                  alignSelf: 'center',
                  marginTop: 25,
                }}>
                <Image
                  source={images.login}
                  style={{ flex: 1, width: '100%', height: '100%' }}
                />
              </View>
              <Text
                style={{
                  alignSelf: 'center',
                  fontWeight: 'bold',
                  fontSize: 25,
                  // fontFamily: FONTS.fontFamily,
                  // color: COLORS.primary,
                  marginVertical: 20,
                }}>
                {/* {AppRequired.appName} */}
              </Text>

              {/* -------Textinput------- */}
              <View
                style={{
                  height: height * 0.15,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {/* -----البريد الإلكترونى------ */}



                <>
                  <View
                    style={{
                      width: '90%',
                      height: height * 0.09,
                      backgroundColor: '#EFF1F0',
                      flexDirection: 'row',
                    }}>

                    <Fumi
                      label={'البريد الالكتروني'}
                      iconClass={FontAwesomeIcon}
                      style={{ backgroundColor: "#EFF1F0", width: "95%", height: 5 }}
                      iconName={'envelope'}
                      iconColor={'#242c78'}
                      iconSize={25}
                      iconWidth={40}
                      inputPadding={16}
                      value={this.state.email}
                      onChangeText={(value) => {
                        this.setState({
                          email: value,
                          emailerr: '',
                        });
                      }}
                    />
                  </View>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'red',
                      fontSize: 14,
                      fontWeight: '800',
                      // fontFamily: FONTS.fontFamily,
                      marginTop: 0,
                      // marginBottom: 5,
                    }}>
                    {this.state.emailerr}
                  </Text>

                  <View
                    style={{
                      width: '90%',
                      height: height * 0.09,
                      backgroundColor: '#EFF1F0',
                      flexDirection: 'row',
                      marginTop: 10
                    }}>

                    <Fumi
                      label={'كلمة المرور'}
                      secureTextEntry={true}
                      iconClass={FontAwesomeIcon}
                      style={{ backgroundColor: "#EFF1F0", width: "95%", height: 5 }}
                      iconName={'lock'}
                      iconColor={'#242c78'}
                      iconSize={25}
                      iconWidth={40}
                      inputPadding={16}
                      value={this.state.pass}
                      onChangeText={(value) => {
                        this.setState({
                          pass: value,
                          passerr: '',
                        });
                      }}
                    />
                  </View>

                </>
              </View>


              <Text
                style={{
                  textAlign: 'center',
                  color: 'red',
                  fontSize: 14,
                  fontWeight: '800',
                  // fontFamily: FONTS.fontFamily,
                  marginTop: 30,
                  // marginBottom: 5,
                }}>
                {this.state.passerr}
              </Text>

              {/* ------login button----- */}
              <View
                style={{
                  width: '100%',
                  height: height * 0.1,
                  // backgroundColor: "blue",
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    this.checkbutton();
                  }}
                  style={{
                    width: '85%',
                    height: height * 0.07,
                    backgroundColor: "#242c78",
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: height * 0.01,
                  }}>
                  {this.state.loading ? (
                    < ActivityIndicator color="#fff" size={40} />
                  ) : (
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 22,
                        color: '#fff',
                        // fontFamily: FONTS.fontFamily,
                      }}>
                      دخول
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
              {/* -----------signin text----------- */}
              <View
                style={{
                  width: '100%',
                  height: height * 0.1,
                  // backgroundColor: "blue",
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 20,
                }}>
                <TouchableOpacity
                  disabled={this.state.loading}
                  onPress={() => {
                    this.props.navigation.navigate('Signup');
                  }}
                  style={{
                    width: '85%',
                    height: height * 0.07,
                    borderWidth: 1,
                    borderColor: "#242c78",
                    backgroundColor: '#f7f7f7',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: height * 0.01,
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 18,
                      color: "#242c78",
                      // fontFamily: FONTS.fontFamily,
                    }}>
                    إنشاء حساب
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
            {/* </Container> */}
          </TouchableWithoutFeedback>
          {/* <Modal
          visible={this.state.loggedModal}
          onRequestClose={() => {
            this.setState({ loggedModal: false });
          }}
          transparent={true}>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View
              style={{
                width: width * 0.9,
                padding: 10,
                backgroundColor: '#fff',
                elevation: 22,
                borderRadius: 15,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 10,
                }}>
                <Text
                  style={{
                    // fontFamily: FONTS.fontFamily,
                    // color: COLORS.primary,
                    fontSize: 22,
                  }}>
                  {AppRequired.appName}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: 'center',
                  width: '90%',
                  borderWidth: 1.5,
                  borderColor: '#ddd',
                }}
              />

              <View style={{ paddingHorizontal: 20, paddingVertical: 12 }}>
                <Text
                  style={{
                    // fontFamily: FONTS.fontFamily,
                    // color: COLORS.primary,
                    fontSize: 17,
                    textAlign: 'center',
                  }}>
                  {this.state.resMassage}
                </Text>
              </View>

              <View
                style={{
                  alignSelf: 'center',
                  width: '90%',
                  borderWidth: 1.5,
                  borderColor: '#ddd',
                }}
              />

              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 7,
                }}>
                <TouchableOpacity
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                  onPress={() => {
                    this.setState({ loggedModal: false });
                  }}>
                  <Text
                    style={{
                      // fontFamily: FONTS.fontFamily,
                      // color: COLORS.primary,
                      fontSize: 20,
                    }}>
                    إلغاء
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal> */}
          <ViewConnectionMsg ConnectionEnter="لا يوجد اتصال بالإنترنت" />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    width: '90%',
    margin: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  textTitleStyle: {
    fontSize: 40,
    // fontFamily: FONTS.fontFamily,
    fontWeight: 'bold',
  },
  inputContainerView: {
    width: '90%',
    margin: '5%',
  },
  ConnectionView: {
    width: '100%',
    height: 20,
    position: 'absolute',
    // zIndex: 222,
    // backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
