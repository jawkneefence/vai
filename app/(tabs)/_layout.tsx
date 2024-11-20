import { Tabs } from "expo-router";
import React from "react";
import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#CDCDF9',
        headerShown: true,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          backgroundColor: '#161622',
          borderTopWidth: 1,
          borderTopColor: '#232533'
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
      
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="head.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="plus.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: "Saved",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="bookmarks.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
