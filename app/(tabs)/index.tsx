import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Link, Redirect, router } from "expo-router";
import { images } from "@/constants";
import { CustomButton } from "@/components/ui/CustomButton";
import { useUser, UserProvider } from "@/contexts/UserContext";

export default function HomeScreen() {

  return (
    <UserProvider>
      <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="w-full justify-center items-center h-full px-4">
            <View className="flex-row">
              <Image
                source={images.logo}
                className="mb-2 w-[140px] h-[97px]"
                resizeMode="contain"
              />
              <Text className="font-psemibold absolute right-10 top-16 text-4xl text-amber-500">
                αi
              </Text>
            </View>

            <Image
              source={images.cards}
              className="max-w-[380px] w-full h-[300px]"
              resizeMode="contain"
            />

            <View className="relative mt-5">
              <Text className="text-3xl text-white font-bold text-center">
                Discover Endless Possibilities with{" "}
                <Text className="text-secondary-200">Vai</Text>
              </Text>
              <Image
                source={images.path}
                className="w-[46px] h-[15px] absolute right-36 -bottom-2"
                resizeMode="contain"
              />
            </View>
            <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
              Where creativity meets innovation: embark on a journey of
              limitless exploration with Vai.
            </Text>

            <CustomButton
              title="Continue with Email"
              handlePress={() => router.push("/(auth)/sign-in")}
              containerStyles="w-[80%] mt-7"
            />
          </View>
        </ScrollView>

        {/*<StatusBar backgroundColor='#161622' style='light'/>*/}
      </SafeAreaView>
    </UserProvider>
  );
}
