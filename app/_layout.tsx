import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Colors from "@/utilities/Color";

export default function RootLayout() {

  return <Stack>
    <StatusBar style="light" />
    <Stack.Screen 
      name="(tabs)"
      options={{
        headerShown: false,
      }} 
    />
    <Stack.Screen 
      name="notifics"
      options={{
        headerShown: true,
        headerTitle: "Notifications",
        headerStyle: {
          backgroundColor: Colors.PRIMARYDARKER,
        },
        headerShadowVisible: false,
        headerTintColor: Colors.LIGHT,
        headerTitleAlign: "center",
      }} 
    />
  </Stack>;
}
