import Colors from '@/utilities/Color';
import { Text, View, StyleSheet } from 'react-native';

export default function SalvatiScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profile screen</Text>
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