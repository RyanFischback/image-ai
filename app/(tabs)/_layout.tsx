import { Tabs } from 'expo-router';
import { Button } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase/config'; // update path if needed

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerRight: () => (
            <Button
              title="Sign Out"
              onPress={() => signOut(auth)}
            />
          ),
        }}
      />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
    </Tabs>
  );
}
