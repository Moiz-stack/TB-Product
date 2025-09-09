import api from '@/lib/axios';
import { User } from '@/types/user';

export const userService = {
  async getUsers() {
    const response = await api.get('/users');
    return response.data;
  },

  async getUserById(id: string) {
    const response = await api.get(`/users/${id}`);
    return response.data;
  },

  async updateUser(id: string, userData: Partial<User>) {
    const response = await api.put(`/users/${id}`, userData);
    return response.data;
  },

  async deleteUser(id: string) {
    await api.delete(`/users/${id}`);
  },
};