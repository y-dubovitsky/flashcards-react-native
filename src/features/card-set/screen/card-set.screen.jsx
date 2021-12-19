import React from "react";
import CardSetList from "../component/card-set-list.component";
import SafeAreaComponent from "../../../component/safe-area.component";
import SearchCardSetItem from "../component/search-card-set-item.component";

const CardSetScreen = () => {
  return (
    <SafeAreaComponent>
      <SearchCardSetItem />
      <CardSetList />
    </SafeAreaComponent>
  )
};

export default CardSetScreen;