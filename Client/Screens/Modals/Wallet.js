import React from "react";
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Wallet({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()} style={styles.back}/>
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: 'blue',
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