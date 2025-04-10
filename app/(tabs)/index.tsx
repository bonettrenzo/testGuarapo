import { Image, SafeAreaView, StyleSheet, View, ScrollView, Button, FlatList, Pressable, Text } from 'react-native';

import SearchInput from '@/components/SearchInput';
import AdvancedFiltersButton from '@/components/AdvancedFiltersButton';
import FilterModal from '@/components/FilterModal';
import useModal from '@/hooks/useModal';
import PersonajeCard from '@/components/PersonajeCard';
import CustomButton from '@/components/Button';
import useCharacters from '@/hooks/useCaracters';
import { Link } from 'expo-router';

export default function HomeScreen() {

  const modalFilter = useModal()
  const hookCaracters = useCharacters()

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

        <View style={[styles.containerInput, { marginBottom: 40 }]}>
          <AdvancedFiltersButton onPress={modalFilter.toggleModal} />
        </View>

        <View style={styles.containerCard}>

        <FlatList
  data={hookCaracters.visibleCharacters}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => (
    <Link href={{
      pathname: "/Caracter",
      params: {
        id: item.id.toString()
      }
    }} asChild>
      <Pressable>
        <PersonajeCard 
          name={item.name} 
          species={item.species} 
          uri={item.image} 
        />
      </Pressable>
    </Link>
  )}
  ListEmptyComponent={
    <Text>No hay personajes para mostrar</Text>
  }
/>
        </View>

        <View style={styles.containerCard}>
          <CustomButton title="LOAD MORE" onPress={hookCaracters.handleLoadMore} />
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
