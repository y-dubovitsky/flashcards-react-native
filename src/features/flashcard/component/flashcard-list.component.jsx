import React from "react";
import FlashCardItem from "./flashcard-item.component";
import { ScrollView } from "react-native";

const FlashCardList = () => {
  return (
    <ScrollView>
      <FlashCardItem />
      <FlashCardItem />
      <FlashCardItem />
      <FlashCardItem />
      <FlashCardItem />
    </ScrollView>
  )
};

export default FlashCardList;