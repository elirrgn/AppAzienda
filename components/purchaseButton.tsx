import { TouchableOpacity, View, Text } from "react-native";


export default function Purchase() {

    return <TouchableOpacity onPress={()=> {}}>
        <View className="w-fit p-3 flex-row justify-center items-center border-blue-600 border-solid border-2 rounded-2xl">
            <Text className="text-blue-900 font-semibold">Purchase</Text>
        </View>
    </TouchableOpacity>;
}