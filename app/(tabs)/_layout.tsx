import { Redirect, Slot } from 'expo-router';
import { useAuth } from '@/hooks/useAuth'; // you'll create this next

export default function RootLayout() {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (!user) return <Redirect href="/login" />;

  return <Slot />;
}
