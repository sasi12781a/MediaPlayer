import React ,{useState,useRef}from 'react';
import {View,Dimensions,Alert,StyleSheet,Text} from 'react-native';
import Video from 'react-native-video';
import MediaControls,{PLAYER_STATES} from 'react-native-media-controls';
import { WebView } from 'react-native-webview';
import { useRoute } from '@react-navigation/native';
import YoutubePlayer from 'react-native-youtube-iframe';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Player = () => {
    const route = useRoute();
    console.log(route.params.copiedVideoUrl)
    const videoPlayer=useRef(null);
    const [currentTime,setCurrentTime]=useState(0);
    const [duration,setDuration]=useState(0);
    const [isFullScreen,setIsFullScreen]=useState(false);
    const [isLoading,setIsLoading]=useState(true);
    const [paused,setPaused]=useState(false);
    const [playerState,setPlayerState]=useState(PLAYER_STATES.PLAYING);
    const [screenType,setScreenType]=useState("content");
    const onSeek=(seek)=>{
        videoPlayer.current.seek(seek);
    };

    const onPaused=(playerState)=>{
        setPaused(!paused);
        setPlayerState(playerState);
    };

    const onReplay=()=>{
        setPlayerState(PLAYER_STATES.PLAYING);
        videoPlayer.current.seek(0);
    }

    const onProgress=(data)=>{
        if(!isLoading && playerState!==PLAYER_STATES.ENDED){
            setCurrentTime(data.currentTime);
        }
    };

    const onLoad=(data)=>{
        setDuration(data.duration);
        setIsLoading(false);
    };
    const onLoadStart=(data)=>setIsLoading(true);
    const onEnd=()=>setPlayerState(PLAYER_STATES.ENDED);

    const onError=()=>Alert.alert("Oh!",eror);
    const exitFullScreen=()=>{
        Alert.alert("Exit full screen");
    };

    const enterFullScreen=()=>{};

    const onFullScreen=()=>{
        setIsFullScreen(isFullScreen);
        if (screenType=="content"){
            setScreenType('cover');
        }
        setScreenType("content");
    }

    const renderToolbar=()=>{
        <View>
            <Text style={styles.toolbar}>
                toolbar
            </Text>
        </View>
    };

    const onSeeking=(currentTime)=>setCurrentTime(currentTime);

  return (
    <View style={{flex:1}}>
        <YoutubePlayer
        height={300}
        play={true}
        videoId={route.params.copiedVideoUrl}
    />
        

        {/* <Video
         onEnd={onEnd}
         onLoad={onLoad}
         onLoadStart={onLoadStart}
         onProgress={onProgress}
         fullscreenOrientation='portrait'
         paused={paused}
         ref={videoPlayer}
         resizeMode={screenType}
         source={{uri:`${route.params.copiedVideoUrl}`}}
         style={styles.mediaPlayer}
         volume={10}
        />
        <MediaControls
         duration={duration}
         isLoading={isLoading}
         mainColor="#333"
         onFullScreen={onFullScreen}
         isFullScreen={enterFullScreen}
         onPaused={onPaused}
         onReplay={onReplay}
         onSeek={onSeek}
         onSeeking={onSeeking}
         playerState={playerState}
         progress={currentTime}
         toolbar={renderToolbar()}
        /> */}

    </View>
  );
};

export default Player;

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    toolbar:{
        marginTop:30,
        backgroundColor:'white',
        padding:10,
        borderRadius:5,
    },
    mediaPlayer:{
        position:"absolute",
        top:0,
        bottom:0,
        left:0,
        right:0,
        backgroundColor:"black",
        justifyContent:"center",
    },
});