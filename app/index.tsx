import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useRouter } from "expo-router";

export default function Index() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSignIn = () => {
    if (password == "test" && email == "test") {
      setError(false);
      router.navigate("/(tabs)/home");
    } else {
      setError(true);
    }
  };

  const [visibilityIcon, setVisibilityIcon] = useState("visibility-off");
  const [visibilityText, setVisibilityText] = useState(true);
  const togglePswVisibility = () => {
    setVisibilityText(!visibilityText);
    setVisibilityIcon(visibilityText ? "visibility" : "visibility-off");
  };

  return (
    <View className="h-full flex flex-row items-center">
      <View className="p-6 flex-1">
        <View className="mb-4">
          <Text className="text-3xl font-extrabold text-gray-800">Sign in</Text>
          <Text className="text-sm mt-4 text-gray-800">
            Don't have an account?
            <Text
              className="text-blue-600 font-semibold hover:underline ml-1"
              onPress={() => Alert.alert("Register")}
            >
              {" "}
              Register here
            </Text>
          </Text>
        </View>

        <View className="mb-4">
          <Text className="text-[15px] mb-2 text-gray-800">Email</Text>
          <View className="relative flex items-center justify-center">
            <TextInput
              className="w-full text-sm text-gray-800 bg-gray-100 px-4 py-3.5 rounded-md"
              placeholder="Enter email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Icon
              name="email"
              size={18}
              color="#bbb"
              className="absolute right-4"
            />
          </View>
        </View>

        <View className="mb-4">
          <Text className="text-[15px] mb-2 text-gray-800">Password</Text>
          <View className="relative flex items-center justify-center">
            <TextInput
              className="w-full text-sm text-gray-800 bg-gray-100 px-4 py-3.5 rounded-md"
              placeholder="Enter password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={visibilityText}
            />
            <Icon
              name={visibilityIcon}
              size={18}
              color="#bbb"
              className="absolute right-4"
              onPress={togglePswVisibility}
            />
          </View>
        </View>

        <View className="flex flex-row items-center justify-between mt-4 mb-4">
          <TouchableOpacity onPress={() => Alert.alert("Forgot Password?")}>
            <Text className="text-blue-600 font-semibold text-sm hover:underline">
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>

        <View style={error ? styles.shown : styles.hidden}>
          <Text className="text-red-600">Login error</Text>
        </View>

        <TouchableOpacity
          className="w-full py-3 mt-4 rounded-md bg-blue-600 hover:bg-blue-700"
          onPress={handleSignIn}
        >
          <Text className="text-white text-sm tracking-wide text-center font-bold">
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hidden: {
    display: "none",
  },
  shown: {
    display: "flex",
  },
});
