/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Pressable, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import {removeToken} from '../redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SelectAudioOrVideo = ({navigation}) => {
  const dispatch = useDispatch();

  function signOut() {
    const val = AsyncStorage.removeItem('token');
    dispatch(removeToken(val));
  }

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#ffd89b', '#19547b']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <LinearGradient
            colors={['#000428', '#004e92']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={{
              width: '80%',
              borderRadius: 30,
              marginBottom: 20,
              height: 50,
              paddingTop: 8,
            }}>
            <Pressable
              style={styles.textContainer}
              onPress={() => navigation.navigate('AudioList')}>
              <Text style={styles.text}>Audio</Text>
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
              paddingTop: 8,
            }}>
            <Pressable
              style={styles.textContainer}
              onPress={() => navigation.navigate('VideoList')}>
              <Text style={styles.text}>Video</Text>
            </Pressable>
          </LinearGradient>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <LinearGradient
            colors={['#000428', '#004e92']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={{
              width: '50%',
              borderRadius: 30,
              marginBottom: 20,
              height: 50,
              paddingTop: 8,
              alignItems: 'center',
            }}>
            <Pressable style={styles.textContainer} onPress={signOut}>
              <Text style={styles.text}>signOut</Text>
            </Pressable>
          </LinearGradient>
        </View>
      </LinearGradient>
    </View>
  );
};

export default SelectAudioOrVideo;

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
