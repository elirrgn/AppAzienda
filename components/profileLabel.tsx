import Login from '@/app/login';
import { View, Pressable, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {
  label: string;
  iconName: string;
};

export default function ProfileLabel({ label, iconName }: Props) {

  return(
    <TouchableOpacity onPress={()=> {}}>
        <View className='w-full flex flex-row justify-between items-center border-t p-8'>
            <Icon className="" name={iconName}/>
            <Text className='flex-1'>{label}</Text>
        </View>

    </TouchableOpacity>
  );
}
