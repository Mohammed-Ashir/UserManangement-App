import AsyncStorage from "@react-native-async-storage/async-storage";
import { initialUsers } from "../data/initialUsers";
import { User } from "../types/UserTypes";

export const loadUsers = async (setUsers: React.Dispatch<React.SetStateAction<User[]>>) => {
  const storedUsers = await AsyncStorage.getItem("users");
  if (storedUsers) {
    setUsers(JSON.parse(storedUsers));
  } else {
    await AsyncStorage.setItem("users", JSON.stringify(initialUsers));
    setUsers(initialUsers);
  }
};

export const saveUsers = async (users: User[]) => {
  await AsyncStorage.setItem("users", JSON.stringify(users));
};
