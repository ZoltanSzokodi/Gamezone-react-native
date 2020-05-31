import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Navigator from './routes/homeStack';
import Home from './screen/Home';

const getFonts = () =>
  Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  return fontsLoaded ? (
    <Navigator />
  ) : (
    <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
  );
};
export default App;
