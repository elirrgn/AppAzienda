import ProfileLabel from '@/components/profileLabel';
import { Text, View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function ProfileScreen( ) {
  const router = useRouter();

    return (
        <View className='h-full flex flex-row items-center'>
          <View className='flex-1'>
            <Text>Profile screen</Text>
            <View className='my-6'>
              <ProfileLabel label='Logout' iconName='logout' onPressFunction={()=>{router.navigate("../../")}}/>
            </View>
          </View>
        </View>
    );
}
