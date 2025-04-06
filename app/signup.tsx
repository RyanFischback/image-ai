import { useState } from 'react';
import { View, Button, Text, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import AuthInput from '../components/AuthInput';
import { signUp } from '../firebase/auth'; // your updated function

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  // const [displayName, setDisplayName] = useState('');
  // const [avatarUrl, setAvatarUrl] = useState('');

  const router = useRouter();

  const handleSignup = async () => {
    try {
      await signUp(email, password, username);
      router.replace('/'); // redirect to home
    } catch (err: any) {
      Alert.alert('Signup Failed', err.message);
    }
  };

  return (
    <View>
      {/* <Text>Sign Up</Text> */}
      <AuthInput value={email} onChangeText={setEmail} placeholder="Email" />
      <AuthInput value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry />
      <AuthInput value={username} onChangeText={setUsername} placeholder="Username" />
      {/* <AuthInput value={displayName} onChangeText={setDisplayName} placeholder="Display Name" /> */}
      {/* <AuthInput value={avatarUrl} onChangeText={setAvatarUrl} placeholder="Avatar URL (optional)" /> */}
      
      <Button title="Sign Up" onPress={handleSignup} />
      {/* <View style={styles.switchContainer}>
        <Text style={styles.switchText}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View> */}
      <Button title="Go to Login" onPress={() => router.push('/login')} />
    </View>
  );
}