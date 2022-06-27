import React from 'react';
import {View} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import Video from 'react-native-video';

const Player = () => {
  return (
    <View>
        <Video
          source={{uri:"https://www.youtube.com/watch?v=Gh2FaDqZp2g.mp4"}}
          style={{ width: 800, height: 800 }}
          muted={true}
          repeat={true}
          resizeMode={"cover"}
          volume={1.0}
          rate={1.0}
          ignoreSilentSwitch={"obey"}/>
    </View>
  );
};

export default Player;