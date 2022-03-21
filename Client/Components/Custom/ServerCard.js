import * as React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const { width } = Dimensions.get('screen');

export const SPACING = 12;

const d = [
  {
    title: 'Card 01',
  },
  {
    title: 'Card 02',
  },
];

export default function ServerCard() {
  return (
    <View>
      <FlatList
        data={d}
        keyExtractor={(item) => item.color}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 16, paddingTop: 48 }}
        snapToInterval={width -32  + SPACING}
        decelerationRate="fast"
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width: width - 32,
                height: width - 128,
                marginRight: SPACING,
              }}
            >
              <View style={Style.Card}>
                <Text style={Style.Heading}>
                  {item.title}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const Style = StyleSheet.create({
  Card: {
    backgroundColor: '#0054dbcb',
    flex: 1,
    padding: SPACING,
    borderRadius: 16,
  },
  Heading: {
    color: 'white',
    fontSize: 24,
    textTransform: 'uppercase',
    letterSpacing: -1,
    fontWeight: '800',
  },
});