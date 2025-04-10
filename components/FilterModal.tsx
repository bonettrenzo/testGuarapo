import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Platform, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { species, genders, status, noSelect } from '@/constants/const';
import { Picker } from "@react-native-picker/picker";
import { Filters } from '@/types/type';

interface FilterDropdownProps {
  label: string;
  selectedValue: string;
  onValueChange: (value: string) => void;
  items: string[];
}

interface FilterModalProps {
  visible?: boolean;
  onClose: () => void;
  handleChange: (e: string, field: keyof Filters) => void;
  filtersValue: Filters;
}

const FilterDropdown = ({ label, selectedValue, onValueChange, items }: FilterDropdownProps) => {
  return (
    <View style={styles.dropdownContainer}>
      <Text style={styles.dropdownLabel}>{label}</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={onValueChange}
          style={styles.picker}
          dropdownIconColor="#666"
          mode="dropdown"
        >
          <Picker.Item label={`Select ${label}`} value={label} enabled={false} />
          {items.map((item, index) => (
            <Picker.Item label={item} value={item} key={index} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const FilterModal = ({ visible, onClose, handleChange, filtersValue }: FilterModalProps) => {
  const [selectedSpecies, setSelectedSpecies] = useState(filtersValue.species);
  const [selectedGender, setSelectedGender] = useState(filtersValue.gender);
  const [selectedStatus, setSelectedStatus] = useState(filtersValue.status);

  const handleApply = () => {
    const defaultValue = ""; 

    handleChange(selectedSpecies === noSelect ? defaultValue : selectedSpecies, 'species');
    handleChange(selectedGender === noSelect ? defaultValue : selectedGender, 'gender');
    handleChange(selectedStatus === noSelect ? defaultValue : selectedStatus, 'status');
    
    onClose();
  };

  const cleanFilter = () => {
    setSelectedSpecies(noSelect);
    setSelectedGender(noSelect);
    setSelectedStatus(noSelect);
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
            <TouchableOpacity 
              onPress={onClose} 
              style={styles.closeButton}
              hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
            >
              <Ionicons name="close" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <FilterDropdown
              label="Species"
              selectedValue={selectedSpecies}
              onValueChange={setSelectedSpecies}
              items={species}
            />
            <FilterDropdown
              label="Gender"
              selectedValue={selectedGender}
              onValueChange={setSelectedGender}
              items={genders}
            />
            <FilterDropdown
              label="Status"
              selectedValue={selectedStatus}
              onValueChange={setSelectedStatus}
              items={status}
            />
          </View>

          <TouchableOpacity 
            style={styles.applyButton} 
            onPress={handleApply}
            activeOpacity={0.7}
          >
            <Text style={styles.applyButtonText}>APPLY</Text>
          </TouchableOpacity>

          <Pressable onPress={cleanFilter}>
            <Text style={styles.cancelButtonText}>LIMPIAR</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  /* i want color how yellow */
  cancelButtonText: {
    color: '#FF7043',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',

  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 25,
    paddingBottom: 30,
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
    marginBottom: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  closeButton: {
    padding: 4,
  },
  content: {
    marginBottom: 25,
  },
  dropdownContainer: {
    marginBottom: 20,
  },
  dropdownLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
    marginLeft: 4,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
  },
  picker: {
    width: '100%',
    height: Platform.OS === 'ios' ? 160 : 50,
    backgroundColor: '#fff',
  },
  applyButton: {
    backgroundColor: '#e6f2ff',
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
    elevation: 2,
  },
  applyButtonText: {
    color: '#1e88e5',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FilterModal;