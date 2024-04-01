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
} from "react-native";

import Slider from "@react-native-community/slider";
import AntDesign from "react-native-vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";

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


    function reset_data() {
        let obj = props.navigation.getParam("passedData");

        let passedData = [obj]
        // passedData.push(obj)
        // console.log(passedData)



        if (passedData.length == 0) {
            setMessage([]);
            setOriginalData([]);
        } else {
            setOriginalData(passedData);
            let newTracks = [];
            for (let i = 0; i < passedData.length; i++) {
                let newObj = {
                    id: passedData[i].VR_id,
                    // artwork: mainImage,
                    // title: passedData[i].title,
                    url: passedData[i].link,
                    lable: passedData[i].lable,
                    image: passedData[i].image
                };
                newTracks.push(newObj);
            }

            setMessage(newTracks);

            _setUpPlayer(newTracks);
        }

        return () => {

            // TrackPlayer.destroy();
            TrackPlayer.reset()
            // _setUpPlayer(newTracks);


        };

    }



    useEffect(() => {
        let obj = props.navigation.getParam("passedData");

        let newTracks = [
            {
                id: obj?.VR_id,
                url: obj?.link,
                title: obj?.lable,
                artwork: obj?.image
            }
        ];



        setOriginalData(newTracks);

        // for (let i = 0; i < passedData.length; i++) {
        //     let newObj = {
        //         id: passedData[i].VR_id,
        //         // artwork: mainImage,
        //         // title: passedData[i].title,
        //         url: passedData[i].link,
        //         lable: passedData[i].lable,
        //         image: passedData[i].image
        //     };
        //     newTracks.push(newObj);
        // }

        setMessage(newTracks);
        _setUpPlayer(newTracks);


        return () => TrackPlayer.destroy();
    }, []);

    const _setUpPlayer = async (tracks) => {
        try {
            await TrackPlayer.setupPlayer().then(() => {
                console.log("player is setup");
            });

            await TrackPlayer.add(tracks);

            console.log("Tracks added");

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
    }, [playbackState]);

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
                {/* <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-around",
                    }}
                >
                    <TouchableOpacity
                        disabled={currentIndex == 0}
                        onPress={async () => {
                            flatListRef?.current?.scrollToIndex({
                                index: currentIndex - 1,
                                animated: true,
                            });
                        }}
                        style={styles.recordButton}
                    >
                        <AntDesign name={"stepbackward"} size={25} color={"#000"} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={async () => {
                            if (progress.duration) {
                                togglePlayerback(playbackState);
                            } else {
                                ToastAndroid.showWithGravity(
                                    "Unable to play the audio recording",
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
                    <TouchableOpacity
                        onPress={async () => {
                            try {
                                flatListRef?.current?.scrollToIndex({
                                    index: currentIndex + 1,
                                    animated: true,
                                });
                            } catch (e) {
                                // alert(e);
                            }
                        }}
                        style={styles.recordButton}
                    >
                        <AntDesign name={"stepforward"} size={25} color={"#000"} />
                    </TouchableOpacity>
                </View> */}

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
                                    "يجب تحميل الصوت اولاً",
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
                    // onViewableItemsChanged={onViewChangeRef.current}
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
                    data={message}
                    // data={[]}
                    keyExtractor={(_, index) => `audio-${index.toString()}`}
                    // renderItem={({item, index}) => _records(item, index)}

                    renderItem={({ item, index }) => (
                        <>
                            <View style={{ ...styles.audioContainer }}>
                                <View
                                    style={{
                                        ...styles.indivAudioContainer,
                                    }}
                                >
                                    {/* <Text
                                        style={{
                                            color: "#000",
                                            margin: 10,
                                            fontWeight: "bold",
                                            fontSize: 18,
                                        }}
                                    >
                                        {item.title}
                                    </Text> */}
                                    {/* {console.log(item.image)} */}

                                    <Image
                                        source={item.artwork}
                                        style={{
                                            height: 300,
                                            width: 250,
                                            resizeMode: "center",
                                            // borderRadius: 10,
                                            // shadowColor: "#000",
                                            // shadowOffset: {
                                            //     width: 0,
                                            //     height: 2,
                                            // },
                                            // shadowOpacity: 0.25,
                                            // shadowRadius: 3.84,

                                            // elevation: 5,
                                            alignSelf: "center",
                                        }}
                                    />

                                    <Text
                                        style={{
                                            color: "#000",
                                            fontSize: 18,
                                            margin: 12,
                                            fontWeight: "700",
                                            alignSelf: "center"
                                        }}
                                    >
                                        {item.title}
                                    </Text>
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

                {message.length != 0 && (
                    <>
                        {/* <Text
                            style={{
                                fontWeight: "600",
                                textAlign: "center",
                                marginBottom: 15,
                            }}
                        >
                            {currentIndex + 1 + " / " + message.length}
                        </Text> */}
                        {_renderSlider()}
                    </>
                )}
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
                                {" الصوت"}
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
        backgroundColor: "#fff",
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
