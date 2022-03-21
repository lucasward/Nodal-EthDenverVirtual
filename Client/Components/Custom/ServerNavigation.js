import {useNavigation} from '@react-navigation/native'
import * as React from 'react';
import { Dimensions, Pressable, StyleSheet, View } from 'react-native';

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons";

const windowWidth = Dimensions.get('window').width;

const SIZE = (windowWidth - 112)/4;

export default function ServerNavigation() {
  const navigation = useNavigation()

  return (
    <View style={Style.Container}>
      <Pressable style={Style.Button} onPress={() => navigation.goBack()}>
        <FontAwesomeIcon icon={faStepBackward} color={'#FFFFFF'} size={SIZE/3} />
      </Pressable>
    </View>
  )
};

const Style = StyleSheet.create({
  Container: {
    backgroundColor: '#FFFFFF',
    bottom: 34,
    position: 'absolute',
    width: windowWidth - 64,
    zIndex: 1,
  },
  Button: {
    alignItems: 'center',
    backgroundColor: '#F44B37',
    borderRadius: 64,
    bottom: 0,
    height: SIZE,
    justifyContent: 'center',
    left: 32,
    position: 'absolute',
    width: SIZE,
    zIndex: 1,
  },
});