import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Text} from 'react-native';
import {Logintocreateuser} from './Src/Navigations/logintocreateuser';
import {Provider} from 'react-redux';
import {store} from './Src/redux/store';
import {useSelector} from 'react-redux';
import {HomeStackNavigation} from './Src/Navigations/logintocreateuser';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from './Src/redux/store';

const AppWrapper = () => {
  const storeData = useSelector(state => state);
  const uid = storeData.userReducer.uid;

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  if (uid) {
    return <HomeStackNavigation />;
  }
  return <Logintocreateuser />;
};
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading</Text>} persistor={persistor}>
        <AppWrapper />
      </PersistGate>
    </Provider>
  );
};

export default App;
