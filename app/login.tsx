import { useState } from 'react';
import { View, Button, Text, Alert } from 'react-native';
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import AuthInput from '../components/AuthInput';
import { useRouter } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace('/'); // Redirect to home
    } catch (err: any) {
      Alert.alert('Login Failed', err.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Login</Text>
      <AuthInput value={email} onChangeText={setEmail} placeholder="Email" />
      <AuthInput value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Go to Signup" onPress={() => router.push('/signup')} />
    </View>
  );
}
