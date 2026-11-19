import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
  screenOptions={{
    tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
    headerShown: false,
    tabBarButton: HapticTab,
  }}
>
   <Tabs.Screen
    name="segredo"
    options={{
      title: 'segredo',
    }}
  />
  <Tabs.Screen
    name="index"
    options={{
      title: 'Barbie',
    }}
  />

  <Tabs.Screen
    name="ken"
    options={{
      title: 'Ken',
    }}
  />

  <Tabs.Screen
    name="raquelle"
    options={{
      title: 'Raquelle',
    }}
  />
 
</Tabs>

  );
}
