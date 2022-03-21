import * as React from 'react';
import { Animated, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import ServerData from "../../Data/ServerData";

import { SharedElement } from 'react-navigation-shared-element';

const { width, height } = Dimensions.get('screen');


import { useNavigation } from '@react-navigation/native';


export const CardWidth = width - 32;
export const SPACING = 16;

export default function ServerCarousel({ Server }) {
  const navigation = useNavigation();
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View>
      <Text
        style={{
          fontWeight: '900',
          left: 16,
          textTransform: 'uppercase',
          fontSize: 18,
          marginTop: 48,
        }}
      >
        My Servers
      </Text>
      <Animated.FlatList
        data={ServerData}
        keyExtractor={(item) => item.key}
        horizontal
        snapToInterval={CardWidth + SPACING * 2}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={{
          paddingRight: width - (CardWidth + SPACING * 2),
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: true,
          },
        )}
        renderItem={({ item, index }) => {
          const s = CardWidth + SPACING * 2;
          const inputRange = [(index - 1) * s, index * s, (index + 1) * s];
          const imageScale = scrollX.interpolate({
            inputRange,
            outputRange: [1, 1.1, 1],
            extrapolate: 'clamp',
          });
          const headingTranslateX = scrollX.interpolate({
            inputRange,
            outputRange: [width, 0, -width],
            extrapolate: 'clamp',
          });
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                width: CardWidth,
                height: height,
                margin: SPACING,
                borderRadius: 18,
                overflow: 'hidden',
              }}
              onPress={() => navigation.navigate('ServerDetail', { item })}
            >
              <SharedElement
                id={`item.${item.key}.photo`}
                style={[StyleSheet.absoluteFillObject]}
              >
                <Animated.View
                  style={{
                    width: CardWidth,
                    height: height - 200,
                    borderRadius: 18,
                    resizeMode: 'cover',
                    backgroundColor: item.color,
                  }}
                />
              </SharedElement>
              <View
                style={[
                  StyleSheet.absoluteFillObject,
                  { padding: 18, justifyContent: 'space-between' },
                ]}
              >
                <SharedElement
                  id={`item.${item.key}.ServerName`}
                  style={{ width: CardWidth - SPACING * 2 }}
                >
                  <Animated.Text
                    style={{
                      fontSize: 32,
                      color: 'white',
                      fontWeight: '800',
                      letterSpacing: -1,
                      textTransform: 'uppercase',
                      transform: [{ translateX: headingTranslateX }],
                    }}
                  >
                    {item.ServerName}
                  </Animated.Text>
                </SharedElement>
                <View>
                  <View
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: 64,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#000000',
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        lineHeight: 18,
                        color: 'white',
                        fontWeight: '800',
                      }}
                    >
                      {item.numberOfDays}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}