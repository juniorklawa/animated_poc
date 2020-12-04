import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Card, Button} from 'react-native-elements';
import Deck from './src/Deck';

const DATA = [
  {
    id: 1,
    text: 'Card #1',
    uri:
      'https://images.unsplash.com/photo-1601758124096-1fd661873b95?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    text: 'Card #2',
    uri:
      'https://images.unsplash.com/photo-1606834843317-195f8e26a8da?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    text: 'Card #3',
    uri:
      'https://images.unsplash.com/photo-1606834843317-195f8e26a8da?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 4,
    text: 'Card #4',
    uri:
      'https://images.unsplash.com/photo-1606765244834-9d05ae7f8a6d?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 5,
    text: 'Card #5',
    uri:
      'https://images.unsplash.com/photo-1606805421441-82687fd40af9?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 6,
    text: 'Card #6',
    uri:
      'https://images.unsplash.com/photo-1606757331120-274906567028?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 7,
    text: 'Card #7',
    uri:
      'https://images.unsplash.com/photo-1606757870480-975652100251?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 8,
    text: 'Card #8',
    uri:
      'https://images.unsplash.com/photo-1606762803100-5b4833aaccc0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
];

const App = () => {
  function renderNoMoreCards() {
    return (
      <Card>
        <Card.Title>Empty list</Card.Title>
      </Card>
    );
  }

  function renderCard(item) {
    return (
      <Card key={item.id}>
        <Card.Image source={{uri: item.uri}} />
        <Card.Title>{item.text}</Card.Title>
        <Text style={{marginBottom: 10}} key={item.id}>
          {item.text}
        </Text>

        <Button
          backgroundColor="#03A9F4"
          title="View Now!"
          icon={{name: 'code', color: '#fff'}}
        />
      </Card>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Deck
          data={DATA}
          renderCard={renderCard}
          renderNoMoreCards={renderNoMoreCards}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
