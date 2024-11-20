import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-orange-400">
      <Text className="text-2xl font-pblack">
        Vai!
      </Text>
      <StatusBar style="auto" />
      <Link href="/home" style={{color: 'blue'}}> go to home
      </Link>
    </View>
  );
}
