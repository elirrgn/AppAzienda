import Colors from '@/utilities/Color';
import { Text, View, StyleSheet } from 'react-native';

export default function ChatScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Chat screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.LIGHT,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: Colors.DARK,
    },
  });