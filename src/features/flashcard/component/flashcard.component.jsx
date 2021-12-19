import React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import styled from 'styled-components';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const FlashCardComponent = styled(Card)`
  margin: 10px;
`;

const FlashCard = () => (
  <FlashCardComponent>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </FlashCardComponent>
);

export default FlashCard;