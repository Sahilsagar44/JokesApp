import React, { useEffect, useState } from 'react';
import { View, StatusBar } from 'react-native';
import SplashScreen from './components/SplashScreen';
import HomeScreen from './components/HomeScreen';

export default function App() {
  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setSplashVisible(false), 3000); // 3 seconds
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#1b1b1d" />
      {isSplashVisible ? <SplashScreen /> : <HomeScreen />}
    </View>
  );
}
