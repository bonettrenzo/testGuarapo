import { Stack } from 'expo-router';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Layout() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/Group.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 25,

    
  },
  logo: {
    height: 49,
    width: 46,
  },
});
