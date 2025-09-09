export interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'mentor' | 'admin';
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}