import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TextInput, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import UserCard from '../components/UserCards';
import { User } from '../types/UserTypes';
import { loadUsers, saveUsers } from '../utils/Persist';

const UserListScreen = ({navigation}: any) => {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    loadUsers(setUsers);
  }, []);

  useEffect(() => {
    if (users.length > 0) saveUsers(users);
  }, [users]);

  const handleSort = () => {
    setUsers([...users].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const handleDelete = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search by name..."
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />
      <View style={styles.buttonRow}>
        <CustomButton title="Sort" onPress={handleSort} />
        <CustomButton
          title="Add User"
          onPress={() => navigation.navigate('AddUser', {setUsers})}
        />
      </View>
      <FlatList
        data={users.filter(user =>
          user.name.toLowerCase().includes(search.toLowerCase()),
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <UserCard user={item} onDelete={handleDelete} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  input: {borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5},
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default UserListScreen;
