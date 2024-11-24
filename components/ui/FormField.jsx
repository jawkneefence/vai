import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";

export function FormField({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2  w-full px-4 ${otherStyles}`}>
      <Text className="text-gray-100 text-base font-pmedium">{title}</Text>
      <View className="mt-1 border-2 border-black-200 h-16 rounded-2xl bg-black-100 focus:border-secondary items-center flex-row">
        <TextInput
          className="w-full px-4 flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6 mr-1"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
