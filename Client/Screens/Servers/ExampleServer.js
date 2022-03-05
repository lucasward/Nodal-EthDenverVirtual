import React from "react";
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ExampleServer({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()} style={styles.back}/>
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: '#000000',
    borderRadius: 16,
    height: 64,
    left: 32,
    top: 38,
    width: 64,
  },
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
});