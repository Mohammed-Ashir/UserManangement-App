import { User } from "../types/UserTypes";

export const initialUsers: User[] = [
  {
    id: 1,
    name: "Aarav Patel",
    email: "aarav.patel@example.com",
    phone: "+91-9876543210",
    address: "123 Main Street, Mumbai, India",
    age: 28,
    isActive: true,
  },
  {
    id: 2,
    name: "Sneha Sharma",
    email: "sneha.sharma@example.com",
    phone: "+91-8765432109",
    address: "456 Market Road, Delhi, India",
    age: 32,
    isActive: false,
  },
  {
    id: 3,
    name: "Kabir Mehta",
    email: "kabir.mehta@example.com",
    phone: "+91-7654321098",
    address: "789 Tech Park, Bengaluru, India",
    age: 25,
    isActive: true,
  }
];
