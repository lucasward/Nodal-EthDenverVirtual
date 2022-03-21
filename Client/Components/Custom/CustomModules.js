import * as React from 'react';
import { Dimensions, Pressable, StyleSheet, View } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

const SIZE = (windowWidth - 112)/4;
const SPACING = 16;

import CustomModuleData from '../../Data/CustomModuleData';

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function CustomModules() {
  const navigation = useNavigation();

  return (

      <View style={Style.ModuleList}>
        {CustomModuleData.map((item) => {
          return (
            <Pressable
              key={item.id}
              style={Style.IndividualModule}
              onPress={() => navigation.push('ModuleDetail', { item })}
            >
              <SharedElement id={`item.${item.id}.photo`}>
                <View style={Style.Icon}>
                  <FontAwesomeIcon icon={faPlus} color={'#0054DBCB'} size={SIZE/3} />
                </View>
              </SharedElement>
            </Pressable>
          );
        })}
      </View>
  );
}

const Style = StyleSheet.create({
  Icon: {
    alignItems: 'center',
    backgroundColor: '#BFE6D4',
    borderRadius: SIZE / 2,
    height: SIZE,
    justifyContent: 'center',
    width: SIZE,
  },
  IndividualModule: {
    alignItems: 'center',
    paddingBottom: 16,
    paddingRight: SPACING,
  },
  ModuleList: {
    bottom: 132,
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'absolute',
    left: 32,
  },
});