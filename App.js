import { StatusBar } from 'expo-status-bar';
import React from 'react';
import CardSetScreen from './src/features/card-set/screen/card-set.screen';

export default function App() {
  return (
    <>
      <CardSetScreen />
      <StatusBar style="auto" />
    </>
  );
}
