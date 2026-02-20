import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

const Saved = () => {
  const [savedMovies, setSavedMovies] = useState([]);
  return (
    <View>
      {savedMovies.length > 0 ? (
        <Text>Saved Movies are here!</Text>
      ) : (
        <Text>No saved movies</Text>
      )}
    </View>
  );
};

export default Saved;
