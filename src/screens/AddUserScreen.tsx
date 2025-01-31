import React, { useRef, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import { User } from '../types/UserTypes';
import { saveUsers } from '../utils/Persist';

const AddUserScreen = ({route, navigation}: any) => {
  const {setUsers} = route.params;
  const [formData, setFormData] = useState<Partial<User>>({});

  const isActiveRef = useRef<string | undefined>(formData.isActive);

  const handleChange = (key: keyof User, value: string) => {
    setFormData(prevFormData => ({...prevFormData, [key]: value}));
  };

  const handleIsActiveChange = (value: string) => {
    isActiveRef.current = value;
  };

  const handleSubmit = () => {
    setUsers((prevUsers: User[]) => {
      const newUser: User = {
        id: prevUsers.length + 1,
        name: formData.name || '',
        email: formData.email || '',
        phone: formData.phone || '',
        address: formData.address || '',
        age: Number(formData.age) || 0,
        isActive: isActiveRef.current === 'true',
      };
      const newUsers = [...prevUsers, newUser];
      saveUsers(newUsers);
      return newUsers;
    });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        value={formData.name}
        onChangeText={value => handleChange('name', value)}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={formData.email}
        onChangeText={value => handleChange('email', value)}
        style={styles.input}
      />
      <TextInput
        placeholder="Phone"
        value={formData.phone}
        onChangeText={value => handleChange('phone', value)}
        style={styles.input}
        keyboardType="numbers-and-punctuation"
      />
      <TextInput
        placeholder="Address"
        value={formData.address}
        onChangeText={value => handleChange('address', value)}
        style={styles.input}
      />
      <TextInput
        placeholder="Age"
        value={formData.age?.toString()}
        keyboardType="numeric"
        onChangeText={value => handleChange('age', value)}
        style={styles.input}
      />
      <TextInput
        placeholder="Active (true/false)"
        value={formData.isActive}
        onChangeText={handleIsActiveChange} // Using ref-based handler
        style={styles.input}
      />
      <CustomButton title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  input: {
    borderWidth: 0.5,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: 'gray',
  },
});

export default AddUserScreen;
