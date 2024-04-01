import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  Dimensions,
  Picker,
  Animated,
  ToastAndroid,
  // AsyncStorage,
  StatusBar,
  ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Kohana, Fumi } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
// import { Container,  ActivityIndicator } from 'native-base';
import NetInfo from '@react-native-community/netinfo';
// import axios from 'axios';
import { AppRequired, images } from '../../constants';
const { width, height } = Dimensions.get('window');
export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data2: [],
      name: '',
      nameerr: '',
      email: '',
      emailerr: '',
      pass: '',
      passerr: '',
      confirm: '',
      confirmerr: '',
      phone: '',
      phonerr: '',

      loading: false,
      loading_gens: true,
      resModal: false,
      resMassage: '',
      confirmEmail: false,
      code: '',
      codeerr: '',
      sendCode: '',
      checkEmailRes: false,
      generateCodeLoading: false,
      bottomConnectionMsg: new Animated.Value(-100),
      connection_Status: 'Offline',
    };
    this._subscription;
  }

  componentWillUnmount() {
    this._subscription && this._subscription();
  }
  componentDidMount() {
    this._subscription = NetInfo.addEventListener(
      this._handelConnectionInfoChange,
    );
    // this.checkPermission();
  }

  // end notification

  _handelConnectionInfoChange = NetInfoState => {
    if (NetInfoState.isConnected == true) {
      this.setState(({ }) => ({
        connection_Status: 'Online',
      }));
      // this.getgenedata();
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

  setUserData = async userName => {
    await AsyncStorage.setItem('user_name', JSON.stringify(userName));
    await AsyncStorage.setItem('switch', 'Home');
    this.props.navigation.navigate('HomePage');
  };

  async signup() {
    let data_to_send = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.pass,
      mobile: this.state.phone,
    };

    let users = await AsyncStorage.getItem('users');

    if (!users) {
      users = [];
    } else {
      users = JSON.parse(users);
    }

    let found = 0;

    for (let i = 0; i < users.length; i++) {
      if (data_to_send.email == users[i].email) {
        found = 1;
        break;
      }
    }

    if (found == 0) {
      users.push(data_to_send);

      await AsyncStorage.setItem('users', JSON.stringify(users));

      // this.props.navigation.navigate('mainHomePage');
      this.setUserData(data_to_send.name);
    } else {
      // alert('هــــذا البـــريد الالكتــروني موجــود بالفعــل');
      ToastAndroid.showWithGravityAndOffset(
        "هــــذا البـــريد الالكتــروني موجــود بالفعــل",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        20,
        20
      );
    }
  }

  validate = text => {
    let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      this.setState({ email: text });
      return false;
    } else {
      this.setState({ email: text });
      return true;
    }
  };

  async checkbutton() {
    let error = 0;
    if (this.validate(this.state.email.trim())) {
      this.setState({ emailerr: '' });
    } else {
      error++;
      this.setState({ emailerr: 'ادخل بريد الكتروني صحيح' });
    }

    if (this.state.name.length >= 3) {
      this.setState({ nameerr: '' });
    } else {
      error++;
      this.setState({ nameerr: 'يجب ان يتكون من ثلاث حروف او اكثر' });
    }

    if (this.state.pass == '' || this.state.pass.length < 6) {
      error++;
      this.setState({ passerr: 'كلمة المرور تتكون من 6 احرف او اكثر' });
    } else {
      this.setState({ passerr: '' });
    }

    if (this.state.confirm == '' || this.state.confirm.length < 6) {
      error++;
      this.setState({ confirmerr: 'كلمة المرور تتكون من 6 احرف او اكثر' });
    } else if (
      this.state.confirm != this.state.pass ||
      this.state.confirmlength >= 6
    ) {
      error++;
      this.setState({ confirmerr: 'لا تتطابق كلمة المرور' });
    } else {
      this.setState({ confirmerr: '' });
    }
    if (
      (this.state.phone.startsWith('010') ||
        this.state.phone.startsWith('011') ||
        this.state.phone.startsWith('012') ||
        this.state.phone.startsWith('015') ||
        this.state.phone.startsWith('002') ||
        this.state.phone.startsWith('+2')) &&
      this.state.phone.length >= 11 &&
      this.state.phone.length <= 14
    ) {
      this.setState({ phonerr: '' });
    } else {
      error++;
      this.setState({ phonerr: 'ادخل رقم هاتف صحيح' });
    }

    if (error == 0) {
      this.signup();
      //   ToastAndroid.showWithGravityAndOffset(
      //     "تم انشاء الحساب يرجي تسجيل الدخول اولا",
      //     ToastAndroid.SHORT,
      //     ToastAndroid.BOTTOM,
      //     20,
      //     20
      // );
    }
  }

  render() {
    const ViewConnectionMsg = props => {
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
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <StatusBar backgroundColor={'#242c78'} barStyle="light-content" />
        <View>
          <ScrollView
            style={{ backgroundColor: '#fff' }}
          // showsVerticalScrollIndicator={false}
          >
            {/* ---------------------------- */}
            <View
              style={{
                width: 200,
                height: 170,
                alignSelf: 'center',
                marginTop: 25,
              }}>
              <Image
                source={images.signup}
                style={{ width: '100%', height: '100%', resizeMode: 'center' }}
              />
            </View>
            <Text
              style={{
                // fontFamily: FONTS.fontFamily,
                // color: COLORS.primary,
                fontSize: 20,
                alignSelf: 'center',
              }}>
              {/* تقديم طلب */}
            </Text>

            {/* -------------Textinput--------------- */}
            <View
              style={{
                // height: '40%',
                // backgroundColor: 'yellow',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {/* ------------- */}
              {/* <View style={[styles.Textinputstyle, { marginTop: height * 0.03 }]}> */}

              <View
                style={{
                  width: '90%',
                  height: 70,
                  backgroundColor: '#EFF1F0',
                  flexDirection: 'row',
                }}>
                <Fumi
                  label={'الاسم'}
                  iconClass={FontAwesomeIcon}
                  style={{
                    backgroundColor: '#EFF1F0',
                    width: '95%',
                    height: 100,
                  }}
                  iconName={'user'}
                  iconColor={'#242c78'}
                  iconSize={25}
                  iconWidth={40}
                  inputPadding={16}
                  value={this.state.name}
                  onChangeText={value => {
                    this.setState({
                      name: value,
                      nameerr: '',
                    });
                  }}
                />
              </View>
              {/* </View> */}
              <Text
                style={{
                  textAlign: 'center',
                  color: 'red',
                  fontSize: 14,
                  fontWeight: '800',
                  // fontFamily: FONTS.fontFamily,
                }}>
                {this.state.nameerr}
              </Text>

              <View
                style={{
                  width: '90%',
                  height: 70,
                  backgroundColor: '#EFF1F0',
                  flexDirection: 'row',
                }}>
                <Fumi
                  label={'البريد الالكتروني'}
                  iconClass={FontAwesomeIcon}
                  style={{
                    backgroundColor: '#EFF1F0',
                    width: '95%',
                    height: 100,
                  }}
                  iconName={'envelope'}
                  iconColor={'#242c78'}
                  iconSize={25}
                  iconWidth={40}
                  inputPadding={16}
                  value={this.state.email}
                  onChangeText={value => {
                    this.setState({
                      email: value,
                      emailerr: '',
                    });
                  }}
                />
              </View>
              {/* </View> */}
              <Text
                style={{
                  textAlign: 'center',
                  color: 'red',
                  fontSize: 14,
                  fontWeight: '800',
                  // fontFamily: FONTS.fontFamily,
                }}>
                {this.state.emailerr}
              </Text>

              <View
                style={{
                  width: '90%',
                  height: 70,
                  backgroundColor: '#EFF1F0',
                  flexDirection: 'row',
                  // marginTop: 20
                }}>
                <Fumi
                  label={'كلمة المرور'}
                  iconClass={FontAwesomeIcon}
                  secureTextEntry={true}
                  style={{ backgroundColor: '#EFF1F0', width: '95%', height: 5 }}
                  iconName={'lock'}
                  iconColor={'#242c78'}
                  iconSize={25}
                  iconWidth={40}
                  inputPadding={16}
                  value={this.state.pass}
                  onChangeText={value => {
                    this.setState({
                      pass: value,
                      passerr: '',
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
                  // marginTop: 20,
                  // marginBottom: 5,
                }}>
                {this.state.passerr}
              </Text>
              <View
                style={{
                  width: '90%',
                  height: 70,
                  backgroundColor: '#EFF1F0',
                  flexDirection: 'row',
                  // marginTop: 20
                }}>
                <Fumi
                  label={'تأكيد كلمة المرور'}
                  secureTextEntry={true}
                  iconClass={FontAwesomeIcon}
                  style={{ backgroundColor: '#EFF1F0', width: '95%', height: 5 }}
                  iconName={'lock'}
                  iconColor={'#242c78'}
                  iconSize={25}
                  iconWidth={40}
                  inputPadding={16}
                  value={this.state.confirm}
                  onChangeText={value => {
                    this.setState({
                      confirm: value,
                      confirmerr: '',
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
                  // marginTop: 20,
                  // marginBottom: 5,
                }}>
                {this.state.confirmerr}
              </Text>

              <View
                style={{
                  width: '90%',
                  height: 70,
                  backgroundColor: '#EFF1F0',
                  flexDirection: 'row',
                  // marginTop: 20
                }}>
                <Fumi
                  label={'رقم الهاتف'}
                  keyboardType="phone-pad"
                  iconClass={FontAwesomeIcon}
                  style={{ backgroundColor: '#EFF1F0', width: '95%', height: 5 }}
                  iconName={'phone'}
                  iconColor={'#242c78'}
                  iconSize={25}
                  iconWidth={40}
                  inputPadding={16}
                  value={this.state.phone}
                  onChangeText={value => {
                    this.setState({
                      phone: value,
                      phonerr: '',
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
                  // marginTop: 20,
                  // marginBottom: 5,
                }}>
                {this.state.phonerr}
              </Text>
            </View>

            {/* ----------------------------- */}
            <View
              style={{
                width: '100%',
                height: 70,
                // backgroundColor: 'blue',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 50,
              }}>
              <TouchableOpacity
                onPress={() => {
                  // alert("0000000000")
                  // this.signup()

                  this.checkbutton();
                  // this.props.navigation.navigate('mainHomePage');
                }}
                style={{
                  width: '85%',
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  backgroundColor: '#242c78',
                  borderRadius: 5,
                  alignSelf: 'center',
                  // borderRadius: 25,
                  // marginBottom: 20,
                  marginTop: '2%',
                }}>
                {this.state.loading == true ? (
                  < ActivityIndicator color="#fff" size={40} />
                ) : (
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#FFFFFF',
                      fontWeight: 'bold',
                      // fontFamily: FONTS.fontFamily,
                      fontStyle: 'normal',
                    }}>
                    تقديم الطلب
                  </Text>
                )}
              </TouchableOpacity>
            </View>
            {/* </View> */}
          </ScrollView>
        </View>
        <Modal
          visible={this.state.resModal}
          onRequestClose={() => {
            this.setState({ resModal: false });
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
                    this.setState({ resModal: false });
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
        </Modal>

        <ViewConnectionMsg ConnectionEnter="لا يوجد اتصال بالإنترنت" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Textinputstyle: {
    width: '90%',
    height: 50,
    backgroundColor: '#DCDEDD',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // marginBottom: height * 0.02,
  },
  Textinputstyle1: {
    backgroundColor: '#FFFFFF',
    width: '84%',
    height: 50,
    justifyContent: 'center',
  },
  TextinputIconstyle: {
    backgroundColor: '#FFFFFF',
    width: '15%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ConnectionView: {
    width: '100%',
    height: 20,
    position: 'absolute',
    zIndex: 222,
    backgroundColor: '#492E41',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
