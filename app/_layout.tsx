import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Colors from "@/utilities/Color";
import { useState } from "react";
import Login from "./login";
import '../global.css';


export default function RootLayout() {
  const router = useRouter();
  const [loggedin, setLoggedin] = useState(false);

  if(!loggedin) {
    return <Login setLoggedin={setLoggedin} />;
  }

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
