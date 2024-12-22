import { View, StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/button";
import Colors from "@/utilities/Color";

const PlaceholderImage = require("@/assets/images/azienda.jpg")

export default function Home() {
  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage}/>
      </View>
      <View style={styles.footerContainer}>
        <Button label="Make your choice" theme="primary"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LIGHT,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    marginTop: 30,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
