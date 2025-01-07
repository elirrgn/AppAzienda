import { View } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import Colors from '@/utilities/Color';
import React from 'react';

export default function TabBar({ state, descriptors, navigation }:BottomTabBarProps) {
  const { buildHref } = useLinkBuilder();

  return (
    <View className='flex-row absolute bottom-2 justify-between items-center mx-10 bg-slate-500 p-5 rounded-full'>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const icons: Record<string, any> = {
            home: 'home',
            profile: 'user',
            salvati: 'bookmark',
            creapost:'plus-circle',
            chat: 'message-circle'
        };
        const names: Record<string, any> = {
            home: 'Home',
            profile: 'Profilo',
            salvati: 'Salvati',
            creapost:'Crea Post',
            chat: 'Contattaci'
        };
        
        return (
          <PlatformPressable
            key={route.name}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            className='flex-1 justify-center items-center'
          >
            <Feather name={icons[route.name]} size={isFocused?28:24}color={isFocused?Colors.PRIMARY:Colors.PRIMARYDARKER}></Feather>
            {isFocused?<Text
              className='text-xs text-blue-500 mt-1'
            >
              {names[route.name]}
            </Text>: <></>}

          </PlatformPressable>
        );
      })}
    </View>
  );
}