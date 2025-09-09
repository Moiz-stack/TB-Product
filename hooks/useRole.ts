import { useAuth } from './useAuth';

export function useRole() {
  const { user } = useAuth();

  const isStudent = user?.role === 'student';
  const isMentor = user?.role === 'mentor';
  const isAdmin = user?.role === 'admin';

  const hasRole = (role: string) => user?.role === role;

  return { isStudent, isMentor, isAdmin, hasRole, role: user?.role };
}