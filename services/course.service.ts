import api from '@/lib/axios';
import { Course } from '@/types/course';

export const courseService = {
  async getCourses() {
    const response = await api.get('/courses');
    return response.data;
  },

  async getCourseById(id: string) {
    const response = await api.get(`/courses/${id}`);
    return response.data;
  },

  async createCourse(courseData: Partial<Course>) {
    const response = await api.post('/courses', courseData);
    return response.data;
  },

  async updateCourse(id: string, courseData: Partial<Course>) {
    const response = await api.put(`/courses/${id}`, courseData);
    return response.data;
  },

  async deleteCourse(id: string) {
    await api.delete(`/courses/${id}`);
  },
};