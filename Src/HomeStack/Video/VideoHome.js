/* eslint-disable keyword-spacing */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from "react";
import {View,Text,Pressable,StyleSheet} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

const VideoHome = ({navigation})=>{
    return(
        <View style={{flex:1}}>
            <LinearGradient
            colors={['#ffd89b', '#19547b']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={{flex: 1,justifyContent:"center",alignItems:"center"}}>
                <LinearGradient
                    colors={['#000428', '#004e92']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    
                    
                    style={{
                    width: '80%',
                    borderRadius: 30,
                    marginBottom: 20,
                    height: 50,
                    paddingTop: 8}}>
                    
                    <Pressable style={styles.textContainer} onPress={() => navigation.navigate('VideoList')}>
                        <Text style={styles.text}>
                            Video
                        </Text>
                    </Pressable>

                </LinearGradient>
                <LinearGradient
                    colors={['#000428', '#004e92']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    
                    style={{
                    width: '80%',
                    borderRadius: 30,
                    marginBottom: 20,
                    height: 50,
                    // eslint-disable-next-line comma-dangle
                    paddingTop: 8,}}>

                    <Pressable style={styles.textContainer} onPress={() => navigation.navigate('YouTube')}>
                        <Text style={styles.text}>
                            YouTube
                        </Text>
                    </Pressable>
                    </LinearGradient>
                
            </LinearGradient>
        </View>
    );
};

export default VideoHome;

const styles = StyleSheet.create({
    text: {
      fontSize: 24,
      fontFamily: 'Roboto',
      color: 'white',
    },
    textContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
