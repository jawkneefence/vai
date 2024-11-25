import { TouchableOpacity, Text } from "react-native";

export function CustomButton({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
  invis
}) {
  return (
      <TouchableOpacity
        className={`bg-secondary rounded-xl min-h-[42px] justify-center items-center ${containerStyles} ${isLoading ? "opacity-50" : ""}`}
        onPress={handlePress}
        activeOpacity={0.7}
        disabled={isLoading || invis}
      >
        <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
          {title}
        </Text>
      </TouchableOpacity>
  );
}
