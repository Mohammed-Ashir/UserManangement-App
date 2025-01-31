import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AddUserScreen from "../screens/AddUserScreen";
import UserListScreen from "../screens/UserListScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UserList" component={UserListScreen} options={{ title: "User Management" }} />
      <Stack.Screen name="AddUser" component={AddUserScreen} options={{ title: "Add User" }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
