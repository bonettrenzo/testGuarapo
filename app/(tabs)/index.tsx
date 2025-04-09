import { Image, SafeAreaView, StyleSheet, View, ScrollView, Button } from 'react-native';

import SearchInput from '@/components/SearchInput';
import AdvancedFiltersButton from '@/components/AdvancedFiltersButton';
import FilterModal from '@/components/FilterModal';
import useModal from '@/hooks/useModal';
import PersonajeCard from '@/components/PersonajeCard';
import CustomButton from '@/components/Button';

export default function HomeScreen() {

  const modalFilter = useModal()
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
          <AdvancedFiltersButton onPress={modalFilter.toggleModal} />
        </View>

        <View style={styles.containerCard}>
          <PersonajeCard name='Rick Sanchez' species='Human' uri='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BJQnVhHAIiC0zRuO2ETdx9Tvwucr27.png' />
          <PersonajeCard name='Rick Sanchez' species='Human' uri='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BJQnVhHAIiC0zRuO2ETdx9Tvwucr27.png' />
        </View>

        <View style={styles.containerCard}>
          <CustomButton title="LOAD MORE" onPress={() => console.log('load more')} />
        </View>
      </ScrollView>
      {modalFilter.visible ? <FilterModal visible={modalFilter.visible} onClose={modalFilter.toggleModal} onApply={(filters: any) => { }} /> : null}
    </SafeAreaView>
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
  containerCard: {
    paddingHorizontal: 25,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLoadMore: {
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
