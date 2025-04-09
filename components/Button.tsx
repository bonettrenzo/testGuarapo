import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Button {
  onPress: () => void;
  title?: string;
  disabled?: boolean;
  backgroundColor?: string;
  color?: string;
}

const Button = ({ 
  onPress, 
  title = "LOAD MORE", 
  disabled = false,
  backgroundColor = "#f3f8fe",
  color = "#369ef4"
}: Button) => {
  return (
    <TouchableOpacity 
      style={[styles.button, disabled && styles.buttonDisabled, {backgroundColor: backgroundColor}]} 
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={[styles.buttonText, {color: color}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    minWidth: 200,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});

export default Button;