import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateUserScreen from '../Authentication/CreateUser';
import LogInScreen from '../Authentication/logIn';
import SelectAudioOrVideo from '../HomeStack/home';
import {AudioList} from '../HomeStack/Audio/AudioList';
import PlayMusic from '../HomeStack/Audio/PlayMusic';
import VideoHome from '../HomeStack/Video/VideoHome';
import YouTube from '../HomeStack/Video/YouTube';
import Player from '../HomeStack/Video/player';
import { VideoList } from '../HomeStack/Video/videolist';
import PlayVideo from '../HomeStack/Video/videoPlayer';

const Stack = createNativeStackNavigator();

function Logintocreateuser() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="LogIn"
          component={LogInScreen}
        />
        <Stack.Screen name="CreateUser" component={CreateUserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const HomeStackNavigation = () => {
  // eslint-disable-next-line no-shadow
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SelectAudioOrVideo"
          component={SelectAudioOrVideo}
          options={{headerShown: false}}
        />
        <Stack.Screen name="AudioList" component={AudioList} />
        <Stack.Screen name="PlayMusic" component={PlayMusic} />
        <Stack.Screen name="VideoHome" component={VideoHome}/>
        <Stack.Screen name="YouTube" component={YouTube} />
        <Stack.Screen name="Player" component={Player} /> 
        <Stack.Screen name="VideoList" component={VideoList} />
        <Stack.Screen name="PlayVideo" component={PlayVideo} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {Logintocreateuser, HomeStackNavigation};
