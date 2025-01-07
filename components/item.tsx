import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Text } from "react-native";
import { Image, type ImageSource } from "expo-image";
import Purchase from "./purchaseButton";



type Props = {
  name: string;
  cost: number;
  img: ImageSource;
  onPressFunction?: ()=>void;
};

export default function Item( {name, cost, img, onPressFunction }: Props ) {
    /*return <TouchableOpacity onPress={() => {}}>
                <View className='flex-row justify-between items-center border-t border-b p-8 gap-2'>
                    <View className="flex-row justify-start gap-2 items-center">
                        <Image source={img} style={styles.image}></Image>
                        <View className="flex-col gap-1">
                            <Text className='text-xl text-slate-950'>{name}</Text>
                            <Text className='text-md text-slate-600'>Costo: {cost} $</Text>
                        </View>
                    </View>
                    <Purchase />
                </View>
        </TouchableOpacity>;*/

    return <TouchableOpacity onPress={() => {}} className="bg-slate-200 rounded-lg shadow-md shadow-black">
                <View className='flex-col justify-between items-center p-4 gap-2'>
                    <Image source={img} style={styles.image}></Image>
                    <View className="flex-row items-center">
                        <Text className='text-md font-medium text-slate-950 align-middle'>{name}</Text>
                        <Text className='ms-2 text-xl font-bold text-blue-900'>{cost}$</Text>
                    </View>
                    <Purchase />
                </View>
        </TouchableOpacity>;
}


const styles = StyleSheet.create({
  image: {
    width: 130,
    height: 130,
  },
});
