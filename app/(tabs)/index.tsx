import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Link, Redirect, router } from "expo-router";
import { images } from "@/constants";
import { CustomButton } from "@/components/ui/CustomButton";
import { useUser, UserProvider } from "@/contexts/UserContext";

export default function HomeScreen() {
  const user = useUser();
  return (
    <UserProvider>
      <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="w-full justify-center items-center h-full px-4">
            <View className="mt-10 flex-row">
              <Image
                source={images.logo} //Vai Logo
                className="mb-3 w-[140px] h-[97px]"
                resizeMode="contain"
              />
              <Text className="font-psemibold absolute bottom-4 right-10 text-4xl text-amber-500">
                αi
              </Text>
            </View>

            <Image
              source={images.cards} //Dog & Anime
              className="max-w-[380px] w-full h-[300px]"
              resizeMode="contain"
            />

            <View className="relative mt-5">
              <Text className="text-3xl text-white font-bold text-center">
                Discover Endless Possibilities with{" "}
                <Text className="text-secondary-200">Vai</Text>
              </Text>
              <Image
                source={images.path} //Orange Underline
                className="w-[46px] h-[15px] absolute right-36 -bottom-2"
                resizeMode="contain"
              />
            </View>
            <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
              Where creativity meets innovation: embark on a journey of
              limitless exploration with Vai.
            </Text>

            <View className="mt-10 w-[75%] ">
            <CustomButton
              title="Continue with Email"
              handlePress={() => router.push("/(auth)/sign-in")}
              containerStyles={`${user.current != null? "invisible z-0" : "z-10"}`}
              textStyles=""
              isLoading={false}
              invis = {user.current==null ? false : true}
            />
            <CustomButton
              title="Logout"
              handlePress={() => {
                user.logout();
              }}
              containerStyles={`absolute right-9 w-[75%] ${user.current == null? "invisible z-0": "z-10"}`}
              textStyles=""
              isLoading={false}
              invis = {user.current==null ? true : false}
            />
            </View>
          </View>
        </ScrollView>

        {/*<StatusBar backgroundColor='#161622' style='light'/>*/}
      </SafeAreaView>
    </UserProvider>
  );
}
