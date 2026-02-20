import React from "react";
import { Tabs } from "expo-router";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

const TabIcon = ({ focused, icon, title }: any) => {
  return (
    <View className="flex items-center justify-center">
      {focused ? (
        <ImageBackground
          source={images.highlight}
          className="flex flex-row items-center px-4 py-2 rounded-full"
        >
          <Image source={icon} tintColor="#151312" className="w-5 h-5" />
          <Text className="text-secondary font-semibold ml-10 mt-2">
            {title}
          </Text>
        </ImageBackground>
      ) : (
        <Image source={icon} tintColor="#A8B5DB" className="w-5 h-5" />
      )}
    </View>
  );
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0F0D23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "index",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="Search" />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.save} title="Save" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
