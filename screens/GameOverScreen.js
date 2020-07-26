import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over! Your Opponent has guessed your number!</Text>
      <Text>Your number was: {props.userNumber}</Text>
      <Text>Number of rounds: {props.roundsNumber}</Text>
      <View style={styles.button}>
        <Button onPress={props.onNewGame} title="New Game" />
      </View>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "20%",
  },
});
