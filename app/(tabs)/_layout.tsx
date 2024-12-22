import Icons from "react-native-vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import Colors from "@/utilities/Color";

export default function TabsLayout( ) {
  const router = useRouter();

  return (
  <Tabs
    screenOptions={{
        tabBarActiveTintColor: Colors.PRIMARY,
        headerStyle: {
          backgroundColor: Colors.PRIMARYDARKER,
        },
        headerShadowVisible: false,
        headerTintColor: Colors.LIGHT,
        tabBarStyle: {
          backgroundColor: Colors.PRIMARYDARKER,
        },
        headerTitleAlign: "center",
        headerRight: () => (
          <Ionicons name="notifications-outline" size={30} color={Colors.LIGHT} style={{marginEnd: 20}} onPress={() => router.push("../notifics")}></Ionicons>
        ),
      }}
  >
    <Tabs.Screen 
      name="home"
      options={{
        headerTitle: "Home",
        tabBarLabel: "Home",
        tabBarIcon: ({focused, color}) => <Ionicons name={focused?"home":"home-outline"} size={30} color={color}></Ionicons>,
      }} 
    />
    <Tabs.Screen 
      name="salvati"
      options={{
        headerTitle: "Salvati",
        tabBarLabel: "Salvati",
        tabBarIcon: ({focused, color}) => <Icons name={focused?"bookmark":"bookmark-o"} size={30} color={color}></Icons>
      }}
    />
    <Tabs.Screen 
      name="creapost"
      options={{
        headerTitle: "Crea Post",
        tabBarLabel: "Crea Post",
        tabBarIcon: ({focused, color}) => <Icons name={focused?"plus-square":"plus-square-o"} size={30} color={color}></Icons>
      }}
    />
    <Tabs.Screen 
      name="chat"
      options={{
        headerTitle: "Chat",
        tabBarLabel: "Chat",
        tabBarIcon: ({focused, color}) => <Ionicons name={focused?"chatbox-ellipses":"chatbox-ellipses-outline"} size={30} color={color}></Ionicons>
      }}
    />
    <Tabs.Screen 
      name="profile"
      options={{
        headerTitle: "Profile",
        tabBarLabel: "Profile",
        tabBarIcon: ({focused, color}) => <Icons name={focused?"user-circle":"user-circle-o"} size={30} color={color}></Icons>
      }}
    />
  </Tabs>);
}
