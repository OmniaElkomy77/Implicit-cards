import React from "react"
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native"

import { images } from "../../constants"
export default class All_catogary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            All_catogary_arr:
                this.props.navigation.getParam("All_catogary_arr")

        }
    }
    render() {
        return (
            <>
                <View style={{ backgroundColor: "#fff", flex: 1 }}>
                    <View
                        style={{
                            height: 60,
                            width: '100%',
                            backgroundColor: '#242c78',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',

                        }}>

                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>
                            الفئات
                        </Text>
                    </View>

                    <FlatList

                        data={this.state.All_catogary_arr}
                        renderItem={({ item, index }) => (


                            item?.voice ? (
                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.navigation.navigate("Voice",

                                            {
                                                passedData: {
                                                    VR_id: '1',
                                                    lesson_id: '1',
                                                    type: 'record',

                                                    link: item.voice,
                                                    lable: item.name,
                                                    image: item.image
                                                },
                                            }
                                        )

                                    }}

                                    style={{
                                        height: 100,
                                        width: "90%",
                                        backgroundColor: "#fff",
                                        elevation: 7,
                                        marginVertical: 10,
                                        alignSelf: "center",
                                        borderRadius: 10,
                                        alignItems: "center",
                                        // justifyContent: "center",
                                        flexDirection: "row"

                                    }}>
                                    <View style={{
                                        // backgroundColor: '#fff',
                                        padding: 10,
                                        width: 100,
                                        // alignSelf: "center"
                                        height: 80,
                                        marginHorizontal: 10,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        // elevation: 2,
                                        borderRadius: 10

                                    }}>
                                        <Image source={item.image}
                                            style={{
                                                height: 70,
                                                width: 80,
                                                resizeMode: "center",

                                            }} />
                                    </View>




                                    <View>
                                        <Text style={{ color: "#000", fontSize: 20 }}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            ) : (
                                <View
                                    style={{
                                        height: 100,
                                        width: "90%",
                                        backgroundColor: "#fff",
                                        elevation: 7,
                                        marginVertical: 10,
                                        alignSelf: "center",
                                        borderRadius: 10,
                                        alignItems: "center",
                                        // justifyContent: "center",
                                        flexDirection: "row"

                                    }}
                                >
                                    <View style={{
                                        // backgroundColor: '#fff',
                                        padding: 10,
                                        width: 100,
                                        // alignSelf: "center"
                                        height: 80,
                                        marginHorizontal: 10,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        // elevation: 2,
                                        borderRadius: 10

                                    }}>
                                        <Image source={item.image}
                                            style={{
                                                height: 70,
                                                width: 80,
                                                resizeMode: "center",

                                            }} />
                                    </View>




                                    <View>
                                        <Text style={{ color: "#000", fontSize: 20 }}>{item.name}</Text>
                                    </View>
                                </View>
                            )






                        )}

                    />







                </View>
            </>
        )
    }
}