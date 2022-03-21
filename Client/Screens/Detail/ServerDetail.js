import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import ServerNavigation from '../../Components/Custom/ServerNavigation';
import CustomModules from '../../Components/Custom/CustomModules';
import ServerCard from '../../Components/Custom/ServerCard';


export default function ServerDetail({ navigation }) {
  return (
    <View style={Style.Container}>
      <ServerCard />
      <CustomModules />
      <ServerNavigation />
    </View>
  );
}

const Style = StyleSheet.create({
  Container: {
    flex: 1,
  },
});