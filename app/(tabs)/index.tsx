import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import { images } from "@/constants";
import { CustomButton } from "@/components/ui/CustomButton";

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
          <View className=" flex-row">
            <Image
              source={images.logo}
              className="w-[130px] h-[84px]"
              resizeMode="contain"
            />
            <Text className="font-psemibold absolute right-11 top-14 text-3xl text-amber-500">
            ai
            </Text>
          </View>

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{' '}
              <Text className="text-secondary-200">
              Vai
              </Text>
            </Text>
              <Image
                source={images.path}
                className="w-[46px] h-[15px] absolute right-36 -bottom-2"
                resizeMode="contain"
              />
          </View>
            <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
                Where creativity meets innovation: embark on a journey of limitless exploration with Vai.
            </Text>

            <CustomButton />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
