import React from 'react';
import FlashCardList from '../component/flashcard-list.component';
import SafeAreaComponent from '../../../component/safe-area.component';
import SearchFlashCard from '../component/search-flashcard.component';

import styled from 'styled-components';

const CardScreen = styled.View`
  padding: 10px;
`;

const FlashCardScreen = () => {
  return (
    <SafeAreaComponent>
      <CardScreen>
        <SearchFlashCard />
        <FlashCardList />
      </CardScreen>
    </SafeAreaComponent>
  )
};

export default FlashCardScreen;