import Icons from "react-native-vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import Colors from "@/utilities/Color";
import TabBar from "@/components/TabBar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@/app-example/app/(tabs)";
import Home from "./home";
import SalvatiScreen from "./salvati";
import CreaPostScreen from "./creapost";
import ChatScreen from "./chat";
import ProfileScreen from "./profile";

export default function TabsLayout( ) {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen 
        name="home"
        component={Home}
      />
      <Tab.Screen 
        name="salvati"
        component={SalvatiScreen}
      />
      <Tab.Screen 
        name="creapost"
        component={CreaPostScreen}
      />
      <Tab.Screen 
        name="chat"
        component={ChatScreen}
      />
      <Tab.Screen 
        name="profile"
        component={ProfileScreen}
      />
  </Tab.Navigator>);
}
