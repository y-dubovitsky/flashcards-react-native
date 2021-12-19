import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components';

const SearchBarContainer = styled.View`
  padding: 10px;
`;

const SearchCardSetItem = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SearchBarContainer>
      <Searchbar
        placeholder="Search flash card set"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </SearchBarContainer>
  );
};

export default SearchCardSetItem;