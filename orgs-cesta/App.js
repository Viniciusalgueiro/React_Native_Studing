
import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Cesta from './src/telas/cesta';
import { useFonts, 
  Raleway_400Regular,Raleway_700Bold,Raleway_400Regular_Italic }
   from '@expo-google-fonts/raleway';

export default function App() {
  const [fonteCarregada] = useFonts ({
    "RalewayRegular" : Raleway_400Regular,
    "RalewayBold" : Raleway_700Bold, 
  });

  if (!fonteCarregada) {
    return<View/>
  }

  return (
    <SafeAreaView >
      <StatusBar/>
      <Cesta/>
    </SafeAreaView>
  );
}

