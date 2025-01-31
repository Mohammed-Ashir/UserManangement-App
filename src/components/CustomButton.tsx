import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  color?: string;
  width?: number;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  color = '#4B0082',
  width,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color, width: width}]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
