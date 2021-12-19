import React from 'react';
import { ScrollView } from 'react-native';
import CardSetItem from './card-set-item';

const CardSetList = () => {
  return (
    <ScrollView>
      <CardSetItem/>
      <CardSetItem/>
      <CardSetItem/>
      <CardSetItem/>
    </ScrollView>
  )
};

export default CardSetList;