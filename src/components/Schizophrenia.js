import React from 'react';
import { View, Text, StatusBar, ScrollView, Image } from 'react-native';

export default class Diagnosis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // treatment: this.props.navigation.getParam('treatment'),
            disease_name: this.props.navigation.getParam('disease_name'),
            disease_image: this.props.navigation.getParam('disease_image'),
        };
    }

    render() {
        return (
            <>

                <View style={{ height: '100%', width: '100%', backgroundColor: '#fff' }}>
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

                    <ScrollView>
                        <View style={{
                            backgroundColor: "#fff",
                            height: 120,
                            width: '95%',
                            elevation: 4,
                            marginVertical: 15,
                            alignSelf: "center",
                            borderRadius: 10,
                            flexDirection: "row",
                            alignItems: 'center',
                            padding: 10

                        }}>
                            <Image source={this.state.disease_image} style={{ height: 90, width: 120, resizeMode: "cover", borderRadius: 10 }} />
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


                        </View>

                        {/* <View style={{
                            padding: 10,
                            elevation: 4,
                            backgroundColor: "#fff",
                            borderRadius: 10,
                            width: "95%",
                            alignSelf: "center",
                            // marginVertical: 10
                        }}>
                            <View
                                style={{
                                    // backgroundColor: '#585',
                                    // height:50,
                                    padding: 10,
                                    width: '97%',
                                    alignSelf: 'center',
                                }}>
                                <Text style={{ color: '#585', fontSize: 15, fontWeight: "bold" }}>
                                    تشخيص الوهن العصبي:

                                </Text>
                                <Text style={{ color: '#000', fontSize: 15 }}>

                                    {this.state.treatment}
                                </Text>
                            </View>
                        </View> */}

                        <View style={{
                            padding: 15,
                            alignSelf: "center",
                            width: "95%",
                            backgroundColor: "#fff",
                            elevation: 4,
                            marginVertical: 10,
                            borderRadius: 10
                        }}>
                            <Text style={{ color: '#585', fontSize: 15, fontWeight: "bold" }}>
                                ازاي اتعامل مع الشخصيه الفصاميه

                            </Text>

                            <Text style={{ color: "#000" }}>

                                عدم إهمال الشخص يجلس وحيد بمفرده لفترات زمنية طويلة
                            </Text>
                            <Text style={{ color: "#000" }}>
                                لا بد حال التعامل معه عدم إجباره على أن يتعامل بطريقة معينة، أو ينضم لجمعة معينة لممارسة نشاط ما
                            </Text>
                            <Text style={{ color: "#000" }}>
                                لابد من أن يكون الاهتمام موجه في البداية من لأسرة، وذلك بمحاولة التقرب من الشخص المصاب، والحديث معه في كل الأمور التي تهمه
                            </Text>
                        </View>
                        <View style={{
                            backgroundColor: "#fff",
                            elevation: 4,
                            padding: 15,
                            width: '95%',
                            alignSelf: "center",
                            borderRadius: 10,
                            marginVertical: 10
                        }}>

                            <Text style={{ color: '#585', fontSize: 15, fontWeight: "bold" }}>
                                العلاج
                            </Text>

                            <Text style={{ color: "#000" }}>
                                قد يشمل العلاج النفسي ما يلي
                            </Text>


                            <Text style={{ color: "#000" }}>
                                العلاج السلوكي المعرفي — بتحديد أنماط التفكير السلبي وتغييرها، واكتساب مهارات اجتماعية معينة، وتعديل المشكلات السلوكية
                            </Text>
                            <Text style={{ color: "#000" }}>
                                العلاج الداعم — بتوفير التشجيع وتعزيز المهارات التكيُّفية
                            </Text>

                            <Text style={{ color: "#000" }}>
                                العلاج العائلي — عن طريق إشراك أفراد الأسرة، ما قد يساعد على تحسين التواصل، والثقة، والقدرة على التعاون سويًّا في المنزل
                            </Text>
                        </View>

                    </ScrollView>
                </View>














                {/* <View style={{ height: '100%', width: '100%', backgroundColor: '#fff' }}>
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
                                borderWidth: 2,
                            }}>
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                    height: 125,
                                    width: '100%',
                                    borderBottomWidth: 1,
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
                                <Text style={{ color: '#585', fontSize: 15, fontWeight: "bold" }}>
                                    ازاي اتعامل مع الشخصيه الفصاميه

                                </Text>

                                <Text style={{ color: "#000" }}>

                                    عدم إهمال الشخص يجلس وحيد بمفرده لفترات زمنية طويلة
                                </Text>
                                <Text style={{ color: "#000" }}>
                                    لا بد حال التعامل معه عدم إجباره على أن يتعامل بطريقة معينة، أو ينضم لجمعة معينة لممارسة نشاط ما
                                </Text>
                                <Text style={{ color: "#000" }}>
                                    لابد من أن يكون الاهتمام موجه في البداية من لأسرة، وذلك بمحاولة التقرب من الشخص المصاب، والحديث معه في كل الأمور التي تهمه
                                </Text>


                                <Text style={{ color: '#585', fontSize: 15, fontWeight: "bold" }}>
                                    العلاج
                                </Text>

                                <Text style={{ color: "#000" }}>
                                    قد يشمل العلاج النفسي ما يلي
                                </Text>


                                <Text style={{ color: "#000" }}>
                                    العلاج السلوكي المعرفي — بتحديد أنماط التفكير السلبي وتغييرها، واكتساب مهارات اجتماعية معينة، وتعديل المشكلات السلوكية
                                </Text>
                                <Text style={{ color: "#000" }}>
                                    العلاج الداعم — بتوفير التشجيع وتعزيز المهارات التكيُّفية
                                </Text>

                                <Text style={{ color: "#000" }}>
                                    العلاج العائلي — عن طريق إشراك أفراد الأسرة، ما قد يساعد على تحسين التواصل، والثقة، والقدرة على التعاون سويًّا في المنزل
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </View> */}
            </>
        );
    }
}
