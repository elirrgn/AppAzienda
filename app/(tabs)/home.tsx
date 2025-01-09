import Item from "@/components/item";
import { View, Text, ScrollView } from "react-native";

import file from "../../assets/items.json";

const prodotti = file.prodotti;

/*<Item name="CPU intel" cost={10.00} img={require("../../assets/images/cpu.webp")}></Item>
            <Item name="Tower" cost={9.99} img={require("../../assets/images/case.png")}></Item>
            <Item name="Small Tower" cost={10.00} img={require("../../assets/images/case.png")}></Item>
            <Item name="CPU intel" cost={10.00} img={require("../../assets/images/cpu.webp")}></Item>*/
export default function Home() {
  return (
    <ScrollView>
      <View className="container p-2">
        <Text className="font-extrabold text-3xl text-black mb-2">Laptop</Text>
        <ScrollView
          horizontal
          className="p-3"
          showsHorizontalScrollIndicator={false}
        >
          <View className="flex-row justify-start gap-2 overflow-y-scroll w-full">
            {prodotti.laptop.map((laptop, index) => (
              <Item
                key={index}
                name={laptop.nome}
                cost={laptop.prezzo}
                img={require("../../assets/images/laptop.jpg")}
              />
            ))}
          </View>
        </ScrollView>
        <Text className="font-extrabold text-3xl text-black mb-2">Monitor</Text>
        <ScrollView
          horizontal
          className="p-3"
          showsHorizontalScrollIndicator={false}
        >
          <View className="flex-row justify-start gap-2 overflow-y-scroll w-full">
            {prodotti.monitor.map((monitor, index) => (
              <Item
                key={index}
                name={monitor.nome}
                cost={monitor.prezzo}
                img={require("../../assets/images/monitor.webp")}
              />
            ))}
          </View>
        </ScrollView>
        <Text className="font-extrabold text-3xl text-black mb-2">Tablet</Text>
        <ScrollView
          horizontal
          className="p-3"
          showsHorizontalScrollIndicator={false}
        >
          <View className="flex-row justify-start gap-2 overflow-y-scroll w-full">
            {prodotti.tablet.map((tablet, index) => (
              <Item
                key={index}
                name={tablet.nome}
                cost={tablet.prezzo}
                img={require("../../assets/images/tablet.jpg")}
              />
            ))}
          </View>
        </ScrollView>
        <Text className="font-extrabold text-3xl text-black mb-2">
          Smartphone
        </Text>
        <ScrollView
          horizontal
          className="p-3"
          showsHorizontalScrollIndicator={false}
        >
          <View className="flex-row justify-start gap-2 overflow-y-scroll w-full">
            {prodotti.smartphone.map((smartphone, index) => (
              <Item
                key={index}
                name={smartphone.nome}
                cost={smartphone.prezzo}
                img={require("../../assets/images/smartphone.jpg")}
              />
            ))}
          </View>
        </ScrollView>
        <Text className="font-extrabold text-3xl text-black mb-2">
          Tastiere
        </Text>
        <ScrollView
          horizontal
          className="p-3"
          showsHorizontalScrollIndicator={false}
        >
          <View className="flex-row justify-start gap-2 overflow-y-scroll w-full">
            {prodotti.tastiere.map((tastiere, index) => (
              <Item
                key={index}
                name={tastiere.nome}
                cost={tastiere.prezzo}
                img={require("../../assets/images/tastiera.png")}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );

  /*return    <ScrollView>
              <View className="container p-2">
              {Object.keys(prodotti).map((category, index: number) => {
                const categoryItems = prodotti[category];  // Get items in the current category

                return (
                  <View key={index} className="mb-4">
                    <Text className="font-bold text-2xl mb-2">{category}</Text>

                    <ScrollView horizontal className="p-3" showsHorizontalScrollIndicator={false}>
                      <View className="flex-row justify-start gap-2 overflow-y-scroll w-full">
                        {/* Map over each item in the current category }
                        {categoryItems.map((item, itemIndex) => (
                          <Item
                            key={itemIndex}
                            name={item.nome}
                            cost={item.prezzo}
                            img={getImage(item.nome)} // Customize the image logic as needed
                          />
                        ))}
                      </View>
                    </ScrollView>
                  </View>
                );
              })}
              </View>
    </ScrollView>*/
}
