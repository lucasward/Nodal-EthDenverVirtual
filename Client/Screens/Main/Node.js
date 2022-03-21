import React from "react";
import { Pressable, StyleSheet, View } from 'react-native';

import ServerCarousel from "../../Components/Custom/ServerCarousel";

export default function Node({ navigation }) {
  return (
    <View style={styles.container}>
      <ServerCarousel />
    </View>
  );
}

const styles = StyleSheet.create({
  server: {
    backgroundColor: '#000000',
    borderRadius: 16,
    height: 128,
    width: 128,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
  },
});