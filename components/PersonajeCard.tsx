import React from 'react';
import { View, Text, Image, StyleSheet   } from 'react-native';

interface PersonajeCardProps {
  uri: string;
  name: string;
  species: string;
}

const PersonajeCard = ({uri, name, species}: PersonajeCardProps) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.species}>{species}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 340,
    height: 308,
    backgroundColor: '#fff',
    shadowColor: '#000',
    borderRadius: 1,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 235,
  },
  infoContainer: {
    marginBottom: 12,
    padding: 12,

  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  species: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default PersonajeCard;