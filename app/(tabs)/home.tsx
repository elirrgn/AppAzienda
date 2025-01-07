import Item from "@/components/item";
import { View, Text, ScrollView } from "react-native";

export default function Home() {

  return (
    <View className="container p-2">
      <Text className="font-extrabold text-3xl text-black mb-2">Discover</Text>
      <ScrollView horizontal className="p-3" showsHorizontalScrollIndicator={false}>
        <View className="flex-row justify-start gap-2 overflow-y-scroll w-full">
          <Item name="CPU intel" cost={10.00} img={require("../../assets/images/cpu.webp")}></Item>
          <Item name="Tower" cost={9.99} img={require("../../assets/images/case.png")}></Item>
          <Item name="Small Tower" cost={10.00} img={require("../../assets/images/case.png")}></Item>
          <Item name="CPU intel" cost={10.00} img={require("../../assets/images/cpu.webp")}></Item>
        </View>
      </ScrollView>
    </View>
  );
}