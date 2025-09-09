interface RoleBadgeProps {
  role: 'student' | 'mentor' | 'admin';
}

export default function RoleBadge({ role }: RoleBadgeProps) {
  return (
    <span className={`role-badge role-${role}`}>
      {role}
    </span>
  );
}