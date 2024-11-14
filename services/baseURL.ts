import axios from "axios";

export const baseURL = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});
