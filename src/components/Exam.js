import React, { useState, useEffect, useRef, useCallback } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    StyleSheet,
    FlatList,
    ToastAndroid,
    I18nManager,
    Dimensions,
    Image,
    Animated,
    Modal,
    TouchableWithoutFeedback
} from "react-native";

import Slider from "@react-native-community/slider";
import AntDesign from "react-native-vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from 'lottie-react-native'
import { RFValue } from 'react-native-responsive-fontsize';
import TrackPlayer, {
    State,
    usePlaybackState,
    useProgress,
    Capability,
} from "react-native-track-player";
import { images } from "../../constants";

const { width, height } = Dimensions.get("window");
const Record = (props) => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const playbackState = usePlaybackState();
    const progress = useProgress();
    const flatListRef = React.useRef();
    const [currentIndex, setCurrentIndex] = React.useState(0);
    // });
    // const mainImage =
    //     '../photo/AppLogoPurple.png';
    const [originalData, setOriginalData] = useState([]);
    const [message, setMessage] = useState([]);

    const viewabilityConfig = {
        itemVisiblePercentThreshold: 40,
        waitForInteraction: true,
    };
    const onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
        setCurrentIndex(viewableItems[0].index);
        skipTo(viewableItems[0].index);
    });

    const viewabilityConfigCallbackPairs = useRef([
        { viewabilityConfig, onViewableItemsChanged },
    ]);
    const [answer, Setanswer] = useState(false)
    const [obj, setObj] = useState({})
    const [obj1, setobj1] = useState({})
    const [current_index, setcurrentIndex] = useState(0)
    const [precent, setprecent] = useState(0)
    const [numerof_item, setnumof_item] = useState(1)
    const [modalVisible1, setmodalVisible1] = useState(false)



    useEffect(() => {
        let passedData = [{

            question_txt: "ينتمي الشكل المقابل الي اي مجموعه؟",
            question_ans: ["حيوان", "جهاز كهربي", "وسيله مواصلات"],
            qus_true_ans: "حيوان",
            chosen_answer: "",
            link: require("../../assets/Records/ES_LionCubRoar.mp3"),
            image: images.lion

        },
        {
            question_txt: "ينتمي الشكل المقابل الي اي مجموعه؟",
            question_ans: ["ظاهره طبيعيه", "وسيله مواصلات", "جهاز كهربي"],
            qus_true_ans: "ظاهره طبيعيه",
            chosen_answer: "",
            image: images.rain,
            link: require("../../assets/Records/ES_WindBlizzard2.mp3")

        },
        {
            question_txt: "ينتمي الشكل المقابل الي اي مجموعه؟",
            question_ans: ["حيوان", "جهاز كهربي", "وسيله مواصلات"],
            qus_true_ans: "جهاز كهربي",
            chosen_answer: "",
            image: images.blender,
            link: require("../../assets/Records/ES_Blender4.mp3")

        },
        {
            question_txt: "ينتمي الشكل المقابل الي اي مجموعه؟",
            question_ans: ["حيوان", "جهاز كهربي", "وسيله مواصلات"],
            qus_true_ans: "جهاز كهربي",
            chosen_answer: "",
            image: images.computer,
            link: require("../../assets/Records/ES_ComputerTurnOn.mp3")

        },
        {
            question_txt: "ينتمي الشكل المقابل الي اي مجموعه؟",
            question_ans: ["ظاهره طبيعيه", "وسيله مواصلات", "جهاز كهربي"],
            qus_true_ans: "ظاهره طبيعيه",
            chosen_answer: "",
            image: images.autumn,
            link: require("../../assets/Records/ES_AutumnFieldInEngland.mp3")

        },
        {
            question_txt: "ينتمي الشكل المقابل الي اي مجموعه؟",
            question_ans: ["ظاهره طبيعيه", "حيوان", "وسائل مواصلات"],
            qus_true_ans: "حيوان",
            chosen_answer: "",
            image: images.bird,
            link: require("../../assets/Records/ES_MorningForestBirds4.mp3")

        },
        {
            question_txt: "ينتمي الشكل المقابل الي اي مجموعه؟",
            question_ans: ["ظاهره طبيعيه", "حيوان", "وسائل مواصلات"],
            qus_true_ans: "ظاهره طبيعيه",
            chosen_answer: "",
            image: images.borkan,
            link: require("../../assets/Records/ES_VolcanoActivity.mp3")

        },
        {
            question_txt: "ينتمي الشكل المقابل الي اي مجموعه؟",
            question_ans: ["ظاهره طبيعيه", "حيوان", "وسائل مواصلات"],
            qus_true_ans: "ظاهره طبيعيه",
            chosen_answer: "",
            image: images.tornado,
            link: require("../../assets/Records/ES_WindStorm7.mp3")

        },
        {
            question_txt: "ينتمي الشكل المقابل الي اي مجموعه؟",
            question_ans: ["حيوان", "جهاز كهربي", "وسيله مواصلات"],
            qus_true_ans: "جهاز كهربي",
            chosen_answer: "",
            image: images.dish_washer,
            link: require("../../assets/Records/ES_DishwasherIn2.mp3")

        },
        {
            question_txt: "ينتمي الشكل المقابل الي اي مجموعه؟",
            question_ans: ["حيوان", "جهاز كهربي", "وسيله مواصلات"],
            qus_true_ans: "حيوان",
            chosen_answer: "",
            image: images.tigger,
            link: require("../../assets/Records/ES_TigerRoars.mp3")

        },





        ];

        let newTracks = []

        for (let i = 0; i < passedData.length; i++) {
            let newObj = {
                url: passedData[i].link,
                title: passedData[i].question_txt,
                artwork: passedData[i].image,
                question_ans: passedData[i].question_ans,
                chosen_answer: passedData[i].chosen_answer,
                qus_true_ans: passedData[i].qus_true_ans


            };
            newTracks.push(newObj);
        }
        setOriginalData(newTracks);
        setMessage(newTracks);
        _setUpPlayer(newTracks[currentIndex]);


        return () => TrackPlayer.destroy();
    }, []);







    //   افتكري دي يتبعت ليها اوبجيكت بس 
    const _setUpPlayer = async (tracks) => {
        try {
            await TrackPlayer.setupPlayer().then(() => {
                // console.log("player is setup");
            });

            await TrackPlayer.add(tracks);

            // console.log("Tracks added");

            await TrackPlayer.updateOptions({
                stopWithApp: true,
                capabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.SkipToNext,
                    Capability.SkipToPrevious,
                    Capability.Stop,
                    Capability.SeekTo,
                ],
                compactCapabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.SkipToNext,
                    Capability.SkipToPrevious,
                ],
                notificationCapabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.SkipToNext,
                    Capability.SkipToPrevious,
                    Capability.SeekTo,
                ],
            });
        } catch (e) {
            console.log(e);
        }
    };

    const togglePlayerback = async (playbackState) => {
        const currentTrack = await TrackPlayer.getCurrentTrack();
        if (currentTrack != null) {
            if (playbackState == State.Paused) {
                await TrackPlayer.play();
            } else {
                await TrackPlayer.pause();
            }
        }
    };

    const skipTo = async (trackId) => {
        await TrackPlayer.skip(trackId);
    };

    useEffect(() => {
        if (
            playbackState == State.Playing &&
            progress.position >= progress.duration
        ) {
            TrackPlayer.seekTo(0);

        }


    }, [playbackState])



    function get_score(obj) {
        let score = 0

        if (obj.chosen_answer == undefined || obj.chosen_answer == "") {
            score = 0
        }
        if (obj.chosen_answer != obj.qus_true_ans) {
            score = 0

        }
        if (obj.chosen_answer === obj.qus_true_ans) {
            score++

        }
        else {
            score = 0
        }

        Setanswer(true)
        setprecent(score)
        setmodalVisible1(true)



    }



    function nextfunction() {
        let current_index1 = 0
        let obj_current_index = current_index
        let numerof_item1 = numerof_item

        if (originalData.length > 0) {

            if ((obj_current_index + 1) < originalData.length) {

                current_index1 = currentIndex + 1
                numerof_item1++

                setCurrentIndex(current_index1)
                setnumof_item(numerof_item1)
                // console.log(current_index1)
                // console.log(numerof_item1)
                setMessage([originalData[current_index1]])
                _setUpPlayer([originalData[current_index1]])

            }

        }

    }


    function render_answer(data, index_data) {
        return (
            data.question_ans.map((item, index) => (
                <>
                    {answer ?

                        <View
                            key={index}

                            style={{
                                height: 60,
                                width: "80%",
                                backgroundColor: data.chosen_answer == item ? "#ff9800" : "#fff",
                                alignSelf: "center", borderRadius: 10,
                                justifyContent: "center",
                                alignItems: "center",
                                marginVertical: 5
                            }}>
                            <Text style={{ fontSize: 18, color: "#000" }}>
                                {item}
                            </Text>
                        </View >


                        :



                        <TouchableOpacity
                            key={index}
                            onPress={() => {
                                // console.log(data)


                                let temp = ""

                                temp = item
                                data.chosen_answer = temp
                                setObj(data)
                                setMessage([data])
                            }}
                            style={{
                                height: 70,
                                width: "80%",
                                backgroundColor: data.chosen_answer == item ? "#ff9800" : "#fff",
                                alignSelf: "center", borderRadius: 10,
                                justifyContent: "center",
                                alignItems: "center",
                                marginVertical: 10
                            }}>
                            <Text style={{ fontSize: 18, color: "#000" }}>
                                {item}
                            </Text>
                        </TouchableOpacity >


                    }

                </>
            ))
        )
    }





















    function _renderSlider() {
        return (
            <View
                style={{
                    marginBottom: "10%",
                    backgroundColor: "rgba(0,0,0,0.6)",
                    padding: 10,
                    borderRadius: 15,
                    // flexDirection: 'row',
                    alignSelf: "center",
                    // alignItems: 'center',
                    width: "90%",
                }}
            >

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        // flex: 1,
                    }}
                >

                    <Text
                        style={{
                            color: "#fff",
                        }}
                    >
                        {progress.duration
                            ? new Date(progress.position * 1000).toISOString().substr(14, 5)
                            : "00:00"}
                    </Text>

                    <Slider
                        style={{
                            // width: '80%',
                            height: 50,
                            flex: 1,
                        }}
                        minimumValue={0}
                        maximumValue={progress.duration}
                        value={progress.position}
                        minimumTrackTintColor="#FFD369"
                        maximumTrackTintColor="#fff"
                        thumbTintColor="#FFD369"
                        onSlidingComplete={async (val) => {
                            await TrackPlayer.seekTo(val);

                            TrackPlayer.play();
                        }}
                        onValueChange={(value) => {
                            TrackPlayer.pause();
                        }}

                    />
                    <Text
                        style={{
                            color: "#fff",
                        }}
                    >
                        {progress.duration
                            ? new Date(progress.duration * 1000).toISOString().substr(14, 5)
                            : "00:00"}
                    </Text>

                    <TouchableOpacity
                        onPress={async () => {
                            if (progress.duration) {
                                togglePlayerback(playbackState);
                            } else {
                                ToastAndroid.showWithGravity(
                                    "يجب تحميل الصوت اولا",
                                    ToastAndroid.SHORT,
                                    ToastAndroid.BOTTOM
                                );
                            }
                        }}
                        style={styles.recordButton}
                    >
                        <AntDesign
                            name={playbackState == State.Playing ? "pausecircle" : "play"}
                            size={25}
                            color={"#000"}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    function rendermodal_answer(obj) {
        return (
            obj.question_ans.map((item, index) => (
                <>
                    {obj.chosen_answer == obj.qus_true_ans ?
                        <View
                            key={index}

                            style={{
                                height: 70,
                                width: "80%",
                                backgroundColor: obj.chosen_answer == item ? "#583" : "#fff",
                                alignSelf: "center", borderRadius: 10,
                                justifyContent: "center",
                                alignItems: "center",
                                marginVertical: 10
                            }}>
                            <Text style={{ fontSize: 18, color: "#000" }}>
                                {item}
                            </Text>
                        </View>
                        :
                        <View
                            key={index}

                            style={{
                                height: 70,
                                width: "80%",
                                backgroundColor: obj.chosen_answer == item ? "#f00" : obj.qus_true_ans == item ? "#583" : "#fff",
                                alignSelf: "center", borderRadius: 10,
                                justifyContent: "center",
                                alignItems: "center",
                                marginVertical: 10
                            }}>
                            <Text style={{ fontSize: 18, color: "#000" }}>
                                {item}
                            </Text>
                        </View>
                    }
                </>
            )
            )
        )
    }




    function modalVisible1_modal() {
        return (
            <Modal
                visible={modalVisible1}
                onRequestClose={() => {
                    setmodalVisible1(false)
                }}
                animationType="slide"

                transparent={true}>
                <View
                    style={{

                        backgroundColor: 'rgba(0,0,0,0.6)',
                        flex: 1,
                        justifyContent: 'flex-end',
                    }}>
                    <TouchableWithoutFeedback
                        style={{ flex: 1 }}
                        onPress={() => {
                            setmodalVisible1(false)
                        }}>
                        <View
                            style={{
                                position: 'absolute',
                                height: '100%',
                                width: '100%',
                            }}
                        />
                    </TouchableWithoutFeedback>
                    <View
                        style={{
                            height: height,
                            flex: 1,
                            justifyContent: 'space-around',
                        }}>
                        <View
                            style={{
                                alignSelf: 'center',
                                justifyContent: 'space-around',
                                width: '90%',
                                backgroundColor: '#fff',
                                borderRadius: 10,
                                elevation: 5,
                                paddingVertical: 15,
                                marginBottom: 10,
                            }}>
                            <View
                                style={{
                                    height: 50,
                                    width: '100%',

                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <Text
                                    style={{ color: '#fff', fontWeight: 'bold', fontSize: 15 }}>
                                    درجه الإمتحان
                                </Text>
                            </View>

                            {precent == 0 ?
                                <LottieView
                                    source={images.failed}
                                    autoPlay
                                    loop
                                    style={{ height: RFValue(180), width: '100%', alignSelf: "center" }}
                                    resizeMode="contain"
                                />

                                :
                                <LottieView
                                    source={images.success}
                                    autoPlay
                                    loop
                                    style={{ height: RFValue(180), width: '100%', alignSelf: "center" }}
                                    resizeMode="contain"
                                />

                            }



                            <View
                                style={{
                                    height: 100,
                                    width: '100%',
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                    flexDirection: "row",
                                    alignItems: 'center',
                                }}>
                                {originalData.length == (currentIndex + 1) ? null :
                                    <TouchableOpacity
                                        onPress={() => {
                                            Setanswer(false)
                                            setmodalVisible1(false)
                                            nextfunction()

                                        }}
                                        style={{
                                            height: 50,
                                            width: '40%',
                                            backgroundColor: "#125",
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 25,
                                        }}>
                                        <Text
                                            style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
                                            التالي
                                        </Text>
                                    </TouchableOpacity>
                                }

                                <TouchableOpacity
                                    onPress={() => {

                                        // Setanswer(true)
                                        setmodalVisible1(false)
                                        // rendermodal_answer(obj)

                                    }}
                                    style={{
                                        height: 50,
                                        width: '40%',
                                        backgroundColor: "#125",
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 25,
                                    }}>
                                    <Text
                                        style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
                                        تم
                                    </Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                    <TouchableWithoutFeedback
                        style={{ flex: 1 }}
                        onPress={() => {
                            setmodalVisible1(false)
                        }}>
                        <View
                            style={{
                                width: '100%',
                            }}
                        />
                    </TouchableWithoutFeedback>
                </View>
            </Modal>
        )
    }















    function _renderBody() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    ref={flatListRef}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        {
                            useNativeDriver: false,
                        }
                    )}
                    viewabilityConfigCallbackPairs={
                        viewabilityConfigCallbackPairs.current
                    }

                    getItemLayout={(data, index) => {
                        return {
                            length: width,
                            offset: width * index,
                            index,
                        };
                    }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    contentContainerStyle={{ alignItems: "center" }}
                    data={message.slice(current_index, numerof_item)}

                    keyExtractor={(_, index) => `audio-${index.toString()}`}


                    renderItem={({ item, index }) => (
                        <>
                            <View style={{ ...styles.audioContainer }}>
                                <View
                                    style={{
                                        ...styles.indivAudioContainer,
                                    }}
                                >
                                    <View style={{ padding: 10, justifyContent: "flex-start" }}>

                                        <Text style={{ color: "#000", fontSize: 20 }}>{"-" + " " + item.title}</Text>
                                    </View>


                                    <Image
                                        source={item.artwork}
                                        style={{
                                            height: 150,
                                            width: 250,
                                            resizeMode: "center",

                                            alignSelf: "center",
                                            // marginTop: 10,
                                            // backgroundColor: "#010"
                                        }}

                                    />

                                    {/* vbbbb */}
                                    {/* <View style={{ height: 150, justifyContent: "flex-end" }}>

                                    </View> */}
                                    {answer == false ?
                                        render_answer(message[index], index)
                                        :
                                        rendermodal_answer(message[index])
                                    }



                                </View>
                            </View>
                        </>
                    )}
                    ListEmptyComponent={() => (
                        <View
                            style={{
                                width: width,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: "#777",
                                    alignSelf: "center",
                                    marginRight: 20,
                                }}
                            >
                                {" لا يوجد البيانات"}
                            </Text>
                        </View>
                    )}
                />

                {originalData.length == (currentIndex + 1) ? null :
                    <View>



                        {_renderSlider()}

                    </View>
                }
                {answer == true ?
                    originalData.length == (currentIndex + 1) ? null :
                        <TouchableOpacity
                            onPress={() => {
                                Setanswer(false)
                                setmodalVisible1(false)
                                nextfunction()

                            }}
                            style={{
                                height: 50,
                                width: '40%',
                                backgroundColor: "#125",
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10,
                                alignSelf: "center",
                                marginVertical: 5
                            }}>
                            <Text
                                style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
                                التالي
                            </Text>
                        </TouchableOpacity>

                    :
                    < TouchableOpacity
                        onPress={() => {
                            if (obj.chosen_answer == "" || obj.chosen_answer == undefined) {
                                ToastAndroid.showWithGravity(
                                    "يجب عليك اختيار اجابة اولاً",
                                    ToastAndroid.SHORT,
                                    ToastAndroid.BOTTOM
                                );
                            } else {
                                get_score(obj)
                                Setanswer(true)
                            }


                        }}

                        style={{
                            height: 70, width: 150,
                            backgroundColor: "#125", borderRadius: 10,
                            alignItems: "center",
                            justifyContent: "center",
                            alignSelf: "center",
                            marginVertical: 5
                        }}>
                        <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>تم</Text>

                    </TouchableOpacity>
                }
            </View>
        );
    }

    return (
        <>
            <SafeAreaView style={{ flex: 1 }}>
                <View
                    style={{
                        backgroundColor: "#fff",
                        flex: 1,
                    }}
                >
                    <StatusBar
                        backgroundColor={"#242c78"}

                        translucent={true}
                        barStyle="light-content"
                    />

                    <View style={[styles.headerText]}>
                        {/* <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}
            >
              <AntDesign name={"arrowleft"} size={25} color={"#fff"} />
            </TouchableOpacity> */}
                        <View
                            style={{
                                height: "100%",
                                width: "85%",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Text
                                style={{
                                    color: "#fff",
                                    fontSize: 20,
                                    fontWeight: "bold"
                                    // fontFamily: FONTS.fontFamily,
                                }}
                            >
                                {" الاسئله"}
                            </Text>
                        </View>

                        <View
                            style={{
                                flex: 5,
                                alignItems: "flex-start",
                                justifyContent: "center",
                            }}
                        ></View>
                    </View>

                    {_renderBody()}
                </View>
            </SafeAreaView>

            {modalVisible1_modal()}
            {/* {rendermodal_answer(obj)} */}
        </>
    );
};

const styles = StyleSheet.create({
    recordButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        // alignSelf: "flex-end",
        marginLeft: 15
    },
    noInterNet: {
        paddingTop: "80%",
        // flex: 1,
        textAlign: "center",
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    headerText: {
        height: 70,
        backgroundColor: "#242c78",
        width: "100%",
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // paddingHorizontal: 20,

        // alignItems: 'center',
        // justifyContent: 'center',
    },
    audioContainer: {
        width: width,
        alignItems: "center",
        justifyContent: "center",
    },
    indivAudioContainer: {
        borderRadius: 8,
        backgroundColor: "#ddd",
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        shadowRadius: 3.84,
        padding: 10,
        elevation: 5,
        width: "90%",
    },
});
export default Record;
