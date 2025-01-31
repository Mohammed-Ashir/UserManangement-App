import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { User } from '../types/UserTypes';
import CustomButton from './CustomButton';

interface UserCardProps {
  user: User;
  onDelete: (id: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({user, onDelete}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.text}>{user.email}</Text>
      <Text style={styles.text}>{user.phone}</Text>
      <Text style={styles.text}>{user.address}</Text>
      <Text style={styles.text}>Age: {user.age}</Text>
      <Text style={[styles.text,{color: user.isActive ? 'green' : 'black'}]}>
        Active: {user.isActive ? 'True' : 'False'}
      </Text>
      <CustomButton
        title="Delete"
        onPress={() => onDelete(user.id)}
        color="red"
        width={70}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
        padding: 30,
        marginBottom: 10,
        borderRadius: 30,
        shadowColor: '#000',          
        shadowOffset: { width: 0, height: 1 }, 
        shadowOpacity: 0.1,           
        shadowRadius: 2,              
        elevation: 5,                
      },
  name: {fontWeight: 'bold', fontSize: 16,padding:2},
  text: {padding:2},
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    marginTop: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  deleteText: {color: 'white'},
});

export default UserCard;
