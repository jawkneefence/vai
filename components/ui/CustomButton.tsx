import { TouchableOpacity, Text } from "react-native";

export function CustomButton() {
  return (
    <TouchableOpacity className="bg-secondary rounded-xl min-h-[36px] justify-center items-center">
      <Text className="text-primary font-psemibold text-lg">CustomButton</Text>
    </TouchableOpacity>
  )
}