import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import SearchInput from '@/components/SearchInput';
import AdvancedFiltersButton from '@/components/AdvancedFiltersButton';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.containerImg}>
        <Image
          source={require('../../assets/rickandmorty.png')}
          style={styles.logo}
           resizeMode="contain" 
          />
      </View>

      <View style={styles.containerInput}>
      <SearchInput onChangeText={(text) => console.log(text)} value='' />
      </View>

      <View style={styles.containerInput}>
        <AdvancedFiltersButton onPress={() => {}} /> 
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
  },
  logo: {
      height: 104,
     width: 314,
  },
  containerImg: {
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: 1,
  },
  containerInput: {
    paddingHorizontal: 25,
    marginTop: 40,
  },
});
