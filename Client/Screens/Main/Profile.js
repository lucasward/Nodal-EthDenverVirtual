import React from "react";
import { Pressable, StyleSheet, View } from 'react-native';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.push('Wallet')} style={styles.server} />
    </View>
  );
}

const styles = StyleSheet.create({
  server: {
    backgroundColor: 'blue',
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