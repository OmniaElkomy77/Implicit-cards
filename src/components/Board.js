import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert,
    Image,
    ToastAndroid,
    TouchableOpacity,

} from 'react-native';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';
export default class example extends Component {
    saveImage = async (path) => {

        let res = await CameraRoll.save(path)
        if (res) {
            ToastAndroid.showWithGravityAndOffset("تم الحفظ فى معرض الصور بنجاح", ToastAndroid.SHORT, ToastAndroid.BOTTOM, 25, 50)
        }
        // RNFetchBlob.config({
        //     fileCache: true,
        //     appendExt: 'png',
        //     indicator: true,
        //     IOSBackgroundTask: true,
        //     path: path,
        //     addAndroidDownloads: {
        //         useDownloadManager: true,
        //         notification: true,
        //         path: path,
        //         description: 'Image'
        //     },

        // }).fetch("GET", path).then(res => {
        //     console.log(res, 'end downloaded')
        // });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'row' }}>

                    <RNSketchCanvas
                        containerStyle={{ backgroundColor: 'transparent', flex: 1 }}
                        canvasStyle={{ backgroundColor: 'transparent', flex: 1 }}
                        defaultStrokeIndex={0}
                        defaultStrokeWidth={5}
                        closeComponent={<TouchableOpacity
                            onPress={() => { this.props.navigation.goBack() }}

                            style={styles.functionButton}><Text style={{ color: 'white' }}>Close</Text></TouchableOpacity >}
                        undoComponent={<View style={styles.functionButton}><Text style={{ color: 'white' }}>Undo</Text></View>}
                        clearComponent={<View style={styles.functionButton}><Text style={{ color: 'white' }}>Clear</Text></View>}
                        eraseComponent={<View style={styles.functionButton}><Text style={{ color: 'white' }}>Eraser</Text></View>}
                        strokeComponent={color => (
                            <View style={[{ backgroundColor: color }, styles.strokeColorButton]} />
                        )}
                        strokeSelectedComponent={(color, index, changed) => {
                            return (
                                <View style={[{ backgroundColor: color, borderWidth: 2 }, styles.strokeColorButton]} />
                            )
                        }}
                        onSketchSaved={(success, path) => {
                            if (success) {
                                this.saveImage("file://" + path)
                            }

                        }}
                        strokeWidthComponent={(w) => {
                            return (<View style={styles.strokeWidthButton}>
                                <View style={{
                                    backgroundColor: 'white', marginHorizontal: 2.5,
                                    width: Math.sqrt(w / 3) * 10, height: Math.sqrt(w / 3) * 10, borderRadius: Math.sqrt(w / 3) * 10 / 2
                                }} />
                            </View>
                            )
                        }}
                        saveComponent={<View style={styles.functionButton}><Text style={{ color: 'white' }}>Save</Text></View>}
                        savePreference={() => {
                            return {
                                folder: "RNSketchCanvas",
                                filename: String(Math.ceil(Math.random() * 100000000)),
                                transparent: false,
                                imageType: "png",
                                // includeImage: false,
                                // includeText: true
                            }
                        }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF',
    },
    strokeColorButton: {
        marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
    },
    strokeWidthButton: {
        marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
        justifyContent: 'center', alignItems: 'center', backgroundColor: '#39579A'
    },
    functionButton: {
        marginHorizontal: 2.5, marginVertical: 8, height: 30, width: 60,
        backgroundColor: '#39579A', justifyContent: 'center', alignItems: 'center', borderRadius: 5,
    }
});

AppRegistry.registerComponent('example', () => example);



















// import React from "react"
// import { View, Text, StatusBar, FlatList, TouchableOpacity } from "react-native"
// import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';
// import Icon from "react-native-vector-icons/FontAwesome5"
// // import { FlatList } from "react-navigation";
// export default class Board extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             color: "#141",
//             success: "",
//             path: ""
//         }
//         this.canvas = null
//     }

//     addNewPath(e) {
//         console.log(this.canvas.save())
//     }
//     removepath(e) {
//         this.canvas.clear(e)
//     }
//     save_data() {
//         console.log(this.canvas.save())
//     }
//     render() {
//         return (
//             <View style={{ flex: 1, backgroundColor: "#fff" }}>
//                 <View
//                     style={{
//                         height: 60,
//                         width: '100%',
//                         backgroundColor: '#242c78',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         alignSelf: 'center',
//                         // borderBottomLeftRadius: 50,
//                         // borderBottomRightRadius: 50,
//                     }}>

//                     <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>
//                         لوحه
//                     </Text>
//                 </View>
//                 <>
//                     <SketchCanvas
//                         style={{ flex: 1 }}
//                         strokeColor={this.state.color}
//                         ref={r => this.canvas = r}
//                         strokeWidth={7}
//                         // onStrokeEnd={(e) =>
//                         //     this.addNewPath()
//                         // }
//                         clearComponent={(e) =>
//                             this.removepath()
//                         }
//                         onSketchSaved={(S, P) => {
//                             this.setState({ success: S, path: P })
//                         }}


//                     />

//                     <View style={{
//                         backgroundColor: "#eee",
//                         position: "absolute",
//                         bottom: 0,
//                         left: 0, right: 0,
//                         height: 80,
//                         flexDirection: "row",
//                         alignItems: "center",
//                         // justifyContent: "space-around"
//                         width: "100%",
//                         padding: 4,
//                     }}>
//                         <FlatList
//                             data={["black", "yellow", "blue", "green", "red"]}
//                             renderItem={({ item }) =>
//                             (
//                                 <TouchableOpacity
//                                     style={{
//                                         backgroundColor: item,
//                                         height: 30, width: 30, borderRadius: 15,
//                                         margin: 2,

//                                     }}
//                                     onPress={() => {
//                                         this.setState({ color: item })
//                                     }}>

//                                 </TouchableOpacity>

//                             )
//                             }
//                             horizontal


//                         />

//                         <TouchableOpacity
//                             onPress={() => {
//                                 this.setState({
//                                     color: "transparent"
//                                 })
//                             }}
//                             style={{ width: 50, justifyContent: "center", alignItems: "center" }}>
//                             {/* <Text style={{ color: "#000" }}>
//                                 محايه
//                             </Text> */}
//                             <Icon name="eraser" color="#999" size={30} />
//                         </TouchableOpacity>


//                         <TouchableOpacity
//                             onPress={() => {
//                                 this.removepath()
//                             }}
//                             style={{
//                                 width: 100, justifyContent: "center",
//                                 alignItems: "center", backgroundColor: "#ddd",
//                                 borderRadius: 10, padding: 10
//                             }}>
//                             <Text style={{ color: "#000" }}>
//                                 مسح الجميع
//                             </Text>
//                             {/* <Icon name="eraser" color="#999" size={30} /> */}
//                         </TouchableOpacity>
//                         <TouchableOpacity
//                             onPress={() => {
//                                 this.save_data()
//                             }}
//                             style={{
//                                 width: 50, justifyContent: "center",
//                                 alignItems: "center", backgroundColor: "#ddd",
//                                 borderRadius: 10,
//                                 padding: 10, marginHorizontal: 5
//                             }}>
//                             <Text style={{ color: "#000" }}>
//                                 حفظ
//                             </Text>
//                             {/* <Icon name="eraser" color="#999" size={30} /> */}
//                         </TouchableOpacity>

//                     </View>
//                 </>
//             </View>
//         )
//     }
// }