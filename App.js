import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Logintocreateuser} from './Src/Navigations/logintocreateuser';
import {Provider} from 'react-redux';
import {Store} from './Src/redux/store';
import {useSelector, useDispatch} from 'react-redux';
import {HomeStackNavigation} from './Src/Navigations/logintocreateuser';
import {getToken} from './Src/redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppWrapper = () => {
  const storeData = useSelector(state => state);
  const token = storeData.userReducer.token;
  const dispatch = useDispatch();
  const sasi= "";
  useEffect(() => {
    getData();
  });

  const getData = async () => {
    const val = await AsyncStorage.getItem('token');
    if (val !== '') {
      dispatch(getToken(val));
    }
  };

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  if (token) {
    return <HomeStackNavigation />;
  }
  return <Logintocreateuser />;
};
const App = () => {
  return (
    <Provider store={Store}>
      <AppWrapper />
    </Provider>
  );
};

export default App;
