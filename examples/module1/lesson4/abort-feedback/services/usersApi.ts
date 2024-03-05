import axios from "axios";

const API_URL = '/api/data/users?timeout=10000';

const usersApi = axios.create({
  baseURL: API_URL,
  timeout: 5000,

});

export const getUsers = async () => {
  const response =  await usersApi.get<{users: User[]}>('');
  return response.data;
};
