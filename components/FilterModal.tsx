
import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface FilterDropdownProps {
    label: string;
    onPress: () => void;
  }

  interface FilterModalProps {
    visible: boolean;
    onClose: () => void;
    onApply: (filters: any) => void;
  }
  
  const FilterDropdown = ({ label, onPress }: FilterDropdownProps) => {
    return (
      <Pressable style={styles.dropdown} onPress={onPress}>
        <Text style={styles.dropdownText}>{label}</Text>
        <Ionicons name="chevron-down" size={20} color="#666" />
      </Pressable>
    );
  };

const FilterModal = ({ visible, onClose, onApply }: FilterModalProps) => {
    const [species, setSpecies] = useState('Species');
    const [gender, setGender] = useState('Gender');
    const [status, setStatus] = useState('Status');
  
    const handleApply = () => {
      onApply({
        species,
        gender,
        status
      });
      onClose();
    };
  
    return (
      <Modal
        visible={visible}
        transparent={true}
        animationType="slide"
        onRequestClose={onClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.header}>
              <Text style={styles.title}>Filters</Text>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Ionicons name="close" size={24} color="#000" />
              </TouchableOpacity>
            </View>
            
            <View style={styles.content}>
              <FilterDropdown 
                label={species} 
                onPress={() => {
                  // Here you would typically open a picker or another modal
                  console.log('Select species');
                }} 
              />
              
              <FilterDropdown 
                label={gender} 
                onPress={() => {
                  console.log('Select gender');
                }} 
              />
              
              <FilterDropdown 
                label={status} 
                onPress={() => {
                  console.log('Select status');
                }} 
              />
            </View>
            
            <TouchableOpacity 
              style={styles.applyButton}
              onPress={handleApply}
            >
              <Text style={styles.applyButtonText}>APPLY</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
      backgroundColor: 'white',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    closeButton: {
      padding: 5,
    },
    content: {
      marginBottom: 20,
    },
    dropdown: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      padding: 15,
      marginBottom: 15,
    },
    dropdownText: {
      fontSize: 16,
      color: '#666',
    },
    applyButton: {
      backgroundColor: '#e6f2ff',
      borderRadius: 8,
      padding: 15,
      alignItems: 'center',
    },
    applyButtonText: {
      color: '#1e88e5',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
  export default FilterModal;