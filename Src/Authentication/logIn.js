/* eslint-disable react-native/no-inline-styles */
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TextInput,
  TouchableHighlight,
  Pressable,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';
import {Provider} from 'react-redux';
import {Store} from '../redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRoute} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {setEmail, setPassword, getUserUid} from '../redux/actions';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function LogInScreen({navigation}) {
  const route = useRoute();
  const number=route.params;
  
  const dispatch = useDispatch();
  const {email, password} = useSelector(state => state.userReducer);
  const signin = (email, password) => {
    console.log(number)
    if (email.length == 0) {
      Alert.alert('Enter Email');
    } else if (password.length == 0) {
      Alert.alert('Enter Password');
    } else {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(function (result) {
          const value = result.user.uid;
          console.log(result.user);
          dispatch(getUserUid(value));
          AsyncStorage.setItem('token', value);
        })
        .catch(function (e) {
          if (e.code === 'auth/user-not-found') {
            return Alert.alert('In correct email');
          } else if (e.code === 'auth/wrong-password') {
            return Alert.alert('The password is invalid');
          } else if (e.code === 'auth/invalid-email') {
            return Alert.alert('Enter valid email');
          } else {
            // eslint-disable-next-line no-sequences
            return console.log(e.message), Alert.alert(e.mesage);
          }
        });
    }
  };

  return (
    <Provider store={Store}>
      <View style={styles.container}>
        <LinearGradient
          colors={['#000428', '#004e92']}
          style={styles.linearGradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}>
          <View
            style={{
              flex: 0.4,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Image
              style={{height: 120, width: 120, borderRadius: 60, marginTop: 10}}
              source={require('../assets/launch_screen.png')}
            />
            <Text style={{marginTop: 10, fontSize: 30, color: 'white'}}>
              Login
            </Text>
          </View>

          <View
            style={{
              flex: 0.6,
              justifyContent: 'flex-start',
              alignItems: 'center',
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              backgroundColor: '#4e4376',
              height: windowHeight,
              width: windowWidth,
            }}>
            <View
              style={{
                marginTop: 10,
                backgroundColor: 'white',
                flexDirection: 'row',
                width: 300,
                borderRadius: 6,
                borderWidth: 2,
                borderColor: '#ffffff',
              }}>
              <Icon
                style={{padding: 15}}
                name="email"
                size={30}
                color="black"
              />
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={value => dispatch(setEmail(value))}
                placeholder="E-mail"
                keyboardType="email-address"
                autoCompleteType="off"
              />
            </View>

            <View
              style={{
                marginTop: 30,
                backgroundColor: 'white',
                flexDirection: 'row',
                width: 300,
                borderRadius: 6,
                borderWidth: 2,
                borderColor: '#ffffff',
              }}>
              <Icon style={{padding: 15}} name="lock" size={30} color="black" />
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={value => dispatch(setPassword(value))}
                placeholder="Password"
                secureTextEntry={true}
              />
            </View>
            <View style={{marginTop: 30}}>
              <Pressable
                style={styles.button}
                onPress={() => signin(email, password)}>
                <Text style={styles.text}>signin</Text>
              </Pressable>
            </View>
            <TouchableHighlight
              onPress={() => navigation.navigate('CreateUser')}>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.text}>Register here</Text>
                <Icon name="east" size={25} color="white" />
              </View>
            </TouchableHighlight>
          </View>
        </LinearGradient>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },
  linearGradient: {
    height: windowHeight,
    width: windowWidth,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    marginRight: 5,
  },
});

export default LogInScreen;
