
import { useNavigation } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';
import { Image, View, TouchableOpacity, Text } from 'react-native';

export default function CharacterScreen() {
    const params = useLocalSearchParams();
    const navigation = useNavigation();

    return (
        <View>

            <View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ color: 'blue', padding: 10 }}>Regresar</Text>
                </TouchableOpacity>
            </View>

            <Text>{params.name}</Text>
            <Text>{params.species}</Text>
            {/*      {params.image && (
        <Image source={{ uri: params.image }} style={{ width: 100, height: 100 }} />
      )} */}
        </View>
    );
}