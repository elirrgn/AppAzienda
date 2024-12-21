import ProfileLabel from '@/components/profileLabel';
import { Text, View, StyleSheet } from 'react-native';

export default function ProfileScreen( ) {


    return (
        <View className='h-full flex flex-row items-center'>
          <View className='flex-1'>
            <Text>Profile screen</Text>
            <View className='my-6 border-b-'>
              <ProfileLabel label='Logout' iconName='logout'/>
              <ProfileLabel label='Logout' iconName='logout'/>
            </View>
          </View>
        </View>
    );
}
