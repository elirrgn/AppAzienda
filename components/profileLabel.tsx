import { View, Pressable, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {
  label: string;
  iconName: string;
  onPressFunction: ()=>void;
};

export default function ProfileLabel({ label, iconName, onPressFunction }: Props) {

  return(
    <TouchableOpacity onPress={onPressFunction}>
        <View className='w-full flex flex-row justify-between items-center border-t border-b p-8'>
            <Icon name={iconName}/>
            <Text className='flex-1'>{label}</Text>
        </View>

    </TouchableOpacity>
  );
}
