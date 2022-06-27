/* eslint-disable react-native/no-inline-styles */

/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, Pressable,Dimensions } from 'react-native';
import Sound from 'react-native-sound';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
// import { DATA } from './AudioList';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function PlayMusic({navigation, route}) {
  const data = route.params.data;
  const [music, setMusic] = useState(null);
  const [second, setSecond] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playIcon, setPlayIcon] = useState(true);
  Sound.setCategory('Playback');
  const play = () => {
    let summer = new Sound(`${data.song}`, Sound.MAIN_BUNDLE, (err) => {
      //data.song
      if (err) {
        console.log('hata', err);
        return;
      }
      summer.play((success) => {
        console.log('end', success);
      });
      setDuration(summer.getDuration());
      setPlayIcon(false);
    });
    console.log('summer', summer);
    setMusic(summer);
  };
  useEffect(() => {
    if (music) {
    }
    return (() => {
      setSecond(0);
    });
  }, [music]);

  const setVolume = (type) => {
    const volume = music.getVolume();
    console.log(volume);
    // eslint-disable-next-line eqeqeq
    if (type == "+") {
      const newVolume = volume + 0.1;
      music.setVolume(newVolume);
    } else {
      const newVolume = volume - 0.1;
      music.setVolume(newVolume);
    }
  };



  return (
    <LinearGradient
      colors={["#ffd89b", '#19547b']}


      style={styles.linearGradient}
    >
      <View style={styles.container}>

        <Image source={require('../../assets/music.jpg')} style={styles.logoIcon} />
        <View style={{ marginTop: 20, flexDirection: 'row' }}>
          {playIcon ?
            <Pressable onPress={() => play()}>
              <Icon name="audiotrack" size={34} style={{ paddingLeft: 20, color: 'black' }} />
            </Pressable> :
            // eslint-disable-next-line no-sequences
            <Pressable onPress={() => { music.pause(), setPlayIcon(true); } }>
              <Icon name="stop" size={34} style={{ paddingLeft: 20, color: 'black' }} />
            </Pressable>}
          <Pressable onPress={() => { music.stop(); } }>
            <Icon name="stop" size={34} style={{ paddingLeft: 20, color: 'black' }} />
          </Pressable>
        </View>
        <View style={{ margin: 10, borderRadius: 10 }}>
          <Button title="setVolume high" onPress={() => { setVolume('+'); } } />
        </View>
        <View style={{ margin: 10, borderRadius: 10 }}>
          <Button title="setVolume Low" onPress={() => { setVolume("-"); } } />
        </View>
        <View style={{ margin: 10, borderRadius: 10 }}>
          <Button title="setCurrentTime" onPress={() => { music.setCurrentTime(100); } } />
        </View>

        <View style={{ margin: 10, borderRadius: 10 }}>
          <Button title="isPlaying" onPress={() => { console.log(music.isPlaying()); } } />
        </View>

        <View>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>{second}  / Total Second {duration}</Text>
        </View>


      </View>
    </LinearGradient>

    // <View>
    //   <Button title="play" onPress={() => { play() }} />
    //   <Button title="pause" onPress={() => { music.pause() }} />
    //   <Button title="play" onPress={() => { music.play() }} />
    //   <Button title="stop" onPress={() => { music.stop() }} />
    //   <Button title="setVolume high" onPress={() => { setVolume('+') }} />
    //   <Button title="setVolume Low" onPress={() => { setVolume("-") }} />
    // <Button title="setCurrentTime" onPress={() => { music.setCurrentTime(100) }} />
    // <Button title="isPlaying" onPress={() => { console.log(music.isPlaying()) }} />
    // <Text>{second}  / Total Second {duration}</Text>
    // </View>
  );
}
export default PlayMusic;

styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    linearGradient: {
      height:windowHeight,
      width:windowWidth,
      justifyContent:"flex-start",
      alignItems:"center",
      flex:1,
  },
    logoIcon:{
        width:300,
        height:300,
    },
});



// <View>
    //   <Button title="play" onPress={() => { play() }} />
    //   <Button title="pause" onPress={() => { music.pause() }} />

    //   <Button title="play" onPress={() => { music.play() }} />

    //   <Button title="stop" onPress={() => { music.stop() }} />

    //   <Button title="setVolume high" onPress={() => { setVolume('+') }} />

    //   <Button title="setVolume Low" onPress={() => { setVolume("-") }} />

      // <Button title="setCurrentTime" onPress={() => { music.setCurrentTime(100) }} />

      // <Button title="isPlaying" onPress={() => { console.log(music.isPlaying()) }} />

      // <Text>{second}  / Total Second {duration}</Text>
    // </View>
