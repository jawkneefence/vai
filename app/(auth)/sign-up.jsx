import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import { FormField } from "@/components/ui/FormField";
import { CustomButton } from "@/components/ui/CustomButton";
import { Link } from "expo-router";

import { UserProvider, useUser } from "@/contexts/UserContext";

const SignUp = () => {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    user.register(form.email, form.password, form.username);
  };
  const user = useUser();
  return (
    <UserProvider>
      <SafeAreaView className="bg-primary h-full">
        <ScrollView>
          <View className="w-full flex-col items-center justify-center h-full my-6">
            <Image
              source={images.logo}
              className="w-[225px] h-[105px]"
              resizeMode="contain"
            />
            <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
              Create Account
            </Text>

            <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
            />

            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles="mt-7"
              keyboardType="email-address"
            />

            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              otherStyles="mt-7"
            />
            <CustomButton
              title="Sign Up"
              handlePress={submit}
              containerStyles="w-[75%] mt-7"
              isLoading={isSubmitting}
            />
            <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-100 font-pregular">
                Already have an account?
              </Text>
              <Link
                className="text-lg font-psemibold text-secondary"
                href="/(auth)/sign-in"
              >
                Sign in!
              </Link>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </UserProvider>
  );
};

export default SignUp;
